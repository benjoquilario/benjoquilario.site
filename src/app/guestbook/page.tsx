import { Metadata } from "next"
import db from "@/lib/db"
import { TypographyH2 } from "@/components/typography"
import React from "react"
import { SignIn, SignOut } from "./buttons"
import { getSession } from "@/lib/session"
import FormEntry from "./form"

export const metadata: Metadata = {
  title: "Guestbook",
  description: "Sign my guestbook and leave your mark.",
}

export const dynamic = "force-dynamic"
export const runtime = "edge"

async function getGuestBook() {
  return await db.bookEntry.findMany({
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      created_by: true,
      body: true,
    },
  })
}

export default async function GuestBook() {
  const session = await getSession()
  const entries = await getGuestBook()

  return (
    <div className="space-y-4">
      <h1 className="mb-8 text-2xl font-bold tracking-tighter">
        Sign my guestbook
      </h1>
      {session?.user ? (
        <>
          <FormEntry />
          <SignOut />
        </>
      ) : (
        <SignIn />
      )}

      <div className="mt-5 flex flex-col space-y-1">
        {!entries && <>Nothing, try sending one...</>}
        {entries?.map((entry) => (
          <div className="w-full break-words" key={entry.id}>
            <span className="mr-1 text-muted-foreground">
              {entry.created_by}:
            </span>
            {entry.body}
          </div>
        ))}
      </div>
    </div>
  )
}
