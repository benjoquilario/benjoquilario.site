import { TypographyH2 } from "@/components/typography"
import contactLinks from "@/config/iconlist"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Link from "next/link"
import ContactForm from "./form"
// import { AlertCircle } from "lucide-react"

// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function Contact() {
  return (
    <>
      <div className="flex max-w-fit flex-col gap-2">
        <TypographyH2 className="text-3xl">
          <span className="text-4xl">C</span>ontacts
        </TypographyH2>
        <p className="text-muted-foreground/80">
          Contact and Social Media Links
        </p>
      </div>
      <div className="flex gap-4 py-4">
        {contactLinks.map(({ title, icon: IconComponent, href }) => (
          <IconTooltip key={title} content={title}>
            <Link
              href={href}
              key={title}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={title}
            >
              <IconComponent />
            </Link>
          </IconTooltip>
        ))}
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or contact via form
          </span>
        </div>
      </div>
      <ContactForm />
      {/* <Alert className="mt-4" variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>
          You can&apos;t send me message yet!. The benjoquilario.vercel.app is
          not valid domain.
        </AlertDescription>
      </Alert> */}
    </>
  )
}

const IconTooltip = ({
  content,
  children,
}: {
  content: string
  children: React.ReactNode
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
