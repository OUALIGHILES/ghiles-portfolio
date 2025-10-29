import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { WhatsAppButton } from "@/components/whatsapp-button"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ghiles Ouali - Software Developer & Cybersecurity Enthusiast",
  description:
    "Professional portfolio of Ghiles Ouali, showcasing expertise in Swift, Django, React, and Cybersecurity",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <WhatsAppButton 
          phoneNumber="213672810933"
          message="Bonjour Ghiles, je vous contacte depuis votre portfolio."
          isOnline={true}
          bottomOffset="3rem"
          rightOffset="3rem"
        />
        <Analytics />
      </body>
    </html>
  )
}
