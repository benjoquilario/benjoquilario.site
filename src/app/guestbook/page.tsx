import { Metadata } from "next"
import db from "@/lib/db"
import { TypographyH2 } from "@/components/typography"
import React, { Suspense } from "react"
import { SignIn, SignOut } from "./buttons"
import { getSession } from "@/lib/session"
import FormEntry from "./form"
import { lowerCaseName } from "@/lib/utils"
import { type BookEntry } from "@prisma/client"
export const metadata: Metadata = {
  title: "Guestbook",
  description: "Sign my guestbook and leave your mark.",
}

export const dynamic = "force-dynamic"
// export const runtime = "edge"

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
    take: 100,
  })
}

export default async function GuestBook() {
  const session = await getSession()

  return (
    <div className="space-y-4">
      <TypographyH2 className="mb-8 text-3xl font-bold tracking-tighter">
        <span className="text-4xl">S</span>ign my guestbook
      </TypographyH2>

      {session?.user ? (
        <>
          <FormEntry />
          <SignOut />
        </>
      ) : (
        <SignIn />
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <Entries />
      </Suspense>
    </div>
  )
}

const Entries = async () => {
  const entries = await getGuestBook()

  return (
    <div>
      <div className="mt-5 flex flex-col space-y-1">
        {!entries && <>Nothing, try sending one...</>}
        {entries?.map((entry) => (
          <div className="w-full break-words" key={entry.id}>
            <span className="mr-1 text-muted-foreground">
              {lowerCaseName(entry.created_by)}:
            </span>
            {entry.body}
          </div>
        ))}
      </div>
    </div>
  )
}
