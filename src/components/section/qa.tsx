import React from "react"
import { TypographyH2 } from "@/components/typography"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { qa } from "@/config/config"

const QuestionAnswer = () => {
  return (
    <section className="mb-12 flex flex-col items-start justify-start">
      <TypographyH2>
        <span className="text-4xl">Q</span>
        uestion and <span className="text-4xl">A</span>nswer
      </TypographyH2>
      <Accordion className="mt-6 w-full" type="single" collapsible>
        {qa.map((item, index) => (
          <AccordionItem key={item.question} value={`item-${index + 1}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

export default QuestionAnswer
