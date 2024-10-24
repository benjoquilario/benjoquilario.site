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
        <IconTooltip content="Cal - 30mins">
          <Link
            href="https://cal.com/benjo-quilario-5yivnz/30min"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Cal - 30mins"
          >
            <svg
              width="42"
              height="23"
              viewBox="0 0 42 20"
              xmlns="http://www.w3.org/2000/svg"
              className="size-6"
              fill="currentColor"
            >
              <title>Book with Cal.com</title>
              <path
                d="M10.0582 20.817C4.32115 20.817 0 16.2763 0 10.6704C0 5.04589 4.1005 0.467773 10.0582 0.467773C13.2209 0.467773 15.409 1.43945 17.1191 3.66311L14.3609 5.96151C13.2025 4.72822 11.805 4.11158 10.0582 4.11158C6.17833 4.11158 4.04533 7.08268 4.04533 10.6704C4.04533 14.2582 6.38059 17.1732 10.0582 17.1732C11.7866 17.1732 13.2577 16.5566 14.4161 15.3233L17.1375 17.7151C15.501 19.8453 13.2577 20.817 10.0582 20.817Z"
                fill="currentColor"
              ></path>
              <path
                d="M29.0159 5.88577H32.7302V20.461H29.0159V18.3308C28.2436 19.8444 26.9564 20.8534 24.4925 20.8534C20.5575 20.8534 17.4131 17.4339 17.4131 13.2295C17.4131 9.02504 20.5575 5.60547 24.4925 5.60547C26.9381 5.60547 28.2436 6.61453 29.0159 8.12811V5.88577ZM29.1262 13.2295C29.1262 10.9498 27.5632 9.06242 25.0993 9.06242C22.7272 9.06242 21.1826 10.9684 21.1826 13.2295C21.1826 15.4344 22.7272 17.3965 25.0993 17.3965C27.5449 17.3965 29.1262 15.4905 29.1262 13.2295Z"
                fill="currentColor"
              ></path>
              <path
                d="M35.3604 0H39.0746V20.4427H35.3604V0Z"
                fill="currentColor"
              ></path>
            </svg>
          </Link>
        </IconTooltip>
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
