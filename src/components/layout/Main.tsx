import React, { useState, useRef, useEffect } from "react"
import About from "@/components/section/about"
// import Projects from "@/components/section/project"
import Tech from "@/components/techstack/tech"
import Contact from "@/components/section/contact"
import SkillSetModal from "@/components/techstack/skill-set-modal"
import useClickOutside from "@/lib/hooks/useClickOutside"

const Main = () => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    isOpen && (document.body.style.overflow = "hidden")

    const focusTrap = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false)
      }

      if (event.key !== "Tab") return
    }

    document.addEventListener("keydown", focusTrap)

    return () => {
      document.body.style.overflow = "unset"
      document.removeEventListener("keydown", focusTrap)
    }
  }, [isOpen])

  useClickOutside(ref, () => setIsOpen(false))

  return (
    <main className="mx-auto mt-24 flex min-h-[calc(100vh_-_96px)] w-full max-w-5xl flex-col items-center justify-center px-4">
      {/* <Hero /> */}
      <Tech isOpen={isOpen} setIsOpen={setIsOpen} />
      <About />
      {/* <Projects /> */}
      <Contact />
      <SkillSetModal isOpen={isOpen} setIsOpen={setIsOpen} ref={ref} />
    </main>
  )
}

export default Main
