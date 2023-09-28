import type { Metadata } from "next"

interface LayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: "About",
  description: "About Benjo M. Quilario",
}

export default function layout({ children }: LayoutProps) {
  return <>{children}</>
}
