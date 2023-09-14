import { Metadata } from "next"
import "@/styles/globals.css"
import { Inter as FontSans, Oswald } from "next/font/google"
import localFont from "next/font/local"
import Header from "@/components/header"
import { cn } from "@/lib/utils"
import ThemeProvider from "@/components/theme-provider"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { siteConfig } from "@/config/site"
import Footer from "@/components/site-footer"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontLogo = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
})

const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.url,
  },
  description: siteConfig.description,
  keywords: [
    "Benjo Quilario",
    "Benjo",
    "benjoquilario",
    "about",
    "contact",
    "blog",
  ],
  authors: {
    name: siteConfig.username,
  },
  creator: siteConfig.username,
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "white",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "black",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.username,
    description: siteConfig.description,
    images: [`${siteConfig.url}og.jpg`],
  },
  icons: {
    icon: "/favicon.ico",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable,
          fontHeading.variable,
          fontLogo.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="mx-auto max-w-3xl p-4">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
          <TailwindIndicator />
          {/* <Analytics /> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
