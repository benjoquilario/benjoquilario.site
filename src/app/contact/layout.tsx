import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact and Social Media Links",
}

interface LayoutProps {
  children: React.ReactNode
}

export default function layout({ children }: LayoutProps) {
  return <div>{children}</div>
}
