import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hackclub ASIET - Sprint 1.0",
  description: "Sprint is a 7 day flagship event by Hackclub ASIET",
  icons: {
    icon: "/images/hackclubasiet.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed left-0 top-0 -z-10 h-full w-full object-cover"
        >
          <source src="/videos/herovideomain.mp4" type="video/mp4" />
        </video>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
