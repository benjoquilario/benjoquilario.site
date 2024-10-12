import { getSession } from "@/lib/session"
import { notFound, redirect } from "next/navigation"
import db from "@/lib/db"
import { revalidatePath } from "next/cache"
import { Button } from "@/components/ui/button"

const Admin = async () => {
  const session = await getSession()

  if (!session) redirect("/")

  if (session?.user?.email !== "benjoquilario@gmail.com") notFound()

  const guestbookEntries = await db.bookEntry.findMany({
    orderBy: {
      createdAt: "desc",
    },
  })

  return <div className="space-y-4">
    {guestbookEntries.map((entry) => (
      <div
        key={entry.id}
        className="flex w-full justify-between break-words text-sm hover:bg-muted"
      >
        <div>
          <span className="text-muted-foreground">{entry.created_by}</span> :{" "}
          {entry.body}
        </div>
        <form
          className="ml-10 inline-flex"
          action={async () => {
            "use server";
            await db.bookEntry.delete({
              where: {
                id: entry.id,
              },
            })
            revalidatePath("/admin");
            revalidatePath("/guestbook");
          }}
        >
          <Button type="submit">
            Delete
          </Button>
        </form>
      </div>
    ))}
  </div>
}
export default Admin
