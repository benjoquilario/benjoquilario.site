import Hero from "@/components/section/hero"
import Articles from "@/components/section/blogs"
import Repositories from "@/components/section/repositories"
import QuestionAnswer from "@/components/section/qa"
import * as React from "react"

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <Repositories />
      <Articles />
      <QuestionAnswer />
    </React.Fragment>
  )
}
