import React from "react"
import { TypographyH3 } from "@/components/typography"

const Uses = () => {
  return (
    <section className="mb-12 w-full">
      <TypographyH3 className="mb-3 text-3xl">
        <span className="text-4xl">H</span>
        ere's everything I'm currently using
      </TypographyH3>

      <div>
        <div className="font-semibold">Desk</div>
        <ul className="my-6 ml-6 list-disc md:text-[15px] [&>li]:mt-2">
          <li>Hp Dell Laptop Intel Core I7</li>
        </ul>

        <div className="font-semibold">Development</div>
        <ul className="my-6 ml-6 list-disc md:text-[15px] [&>li]:mt-2">
          <li>VSCode</li>
          <li>
            One Dark Pro -{" "}
            <span className="text-foreground/70">Theme for VSCode</span>
          </li>
          <li>
            Github Copilot - <span className="text-foreground/70">Copilot</span>
          </li>
          <li>Github Desktop</li>

          <li>
            Vercel - <span className="text-foreground/70">Hosting</span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Uses
