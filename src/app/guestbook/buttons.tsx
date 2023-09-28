"use client"

import { GithubIcon as Github } from "lucide-react"
import { FaGoogle } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { signIn, signOut } from "next-auth/react"

export function SignOut() {
  return (
    <button onClick={() => signOut()} className="text-xs">
      Sign out
    </button>
  )
}

export function SignIn() {
  return (
    <>
      <div className="text-sm">Sign in with: </div>
      <div className="flex space-x-2">
        <Button
          onClick={() => signIn("github")}
          aria-label="github"
          variant="outline"
          className="inline-flex gap-2"
        >
          <Github />
          Github
        </Button>
        <Button
          onClick={() => signIn("google")}
          aria-label="google"
          variant="outline"
          className="inline-flex gap-2"
        >
          <FaGoogle />
          Google
        </Button>
      </div>
    </>
  )
}
