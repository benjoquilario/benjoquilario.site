"use server"

import { kv } from "@vercel/kv"
import * as z from "zod"
import { Ratelimit } from "@upstash/ratelimit"
import { type Session } from "next-auth"
import { revalidatePath, revalidateTag } from "next/cache"
import { headers } from "next/headers"
import { getSession } from "@/lib/session"
import { session as sessionAuth } from "@/lib/validations/session"
import { env } from "@/env.mjs"
import db from "@/lib/db"

import {
  CreateEmailOptions,
  CreateEmailResponse,
} from "resend/build/src/emails/interfaces"

async function sendMail(options: CreateEmailOptions) {
  const data = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  })

  const response = await data.json()
  return response as CreateEmailResponse
}

export async function saveGuestbookEntry(entry: string) {
  const session = await getSession()
  const sessionValidations = sessionAuth.parse(session?.user)

  const email = sessionValidations?.email
  const created_by = sessionValidations?.name
  const body = entry.slice(0, 500)

  const ratelimit = new Ratelimit({
    redis: kv,
    limiter: Ratelimit.fixedWindow(2, "1 m"),
  })
  const { success, reset } = await ratelimit.limit(email)

  if (!success) {
    const retryAfterSeconds = Math.ceil((reset - Date.now()) / 1000)
    return {
      ok: false,
      data: `Try again in ${retryAfterSeconds} seconds!`,
    }
  }

  await db.bookEntry.create({
    data: {
      body,
      created_by,
      email,
    },
  })

  revalidatePath("/guestbook")

  if (process.env.NODE_ENV === "production")
    await sendMail({
      from: "guestbook@rohi.dev",
      to: "n@rohi.dev",
      subject: "New Guestbook Entry",
      html: `<p>Email: ${email}</p><p>Message: ${body}</p>`,
    })

  return { ok: true, data: "Thank you for your message!" }
}
