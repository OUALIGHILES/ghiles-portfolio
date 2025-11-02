import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { WhatsAppButton } from "@/components/whatsapp-button"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ghiles Ouali | Full-Stack Developer & Cybersecurity Engineer",
  description:
    "Portfolio of Ghiles Ouali, a full-stack developer specialized in Django, Next.js, and cybersecurity testing. Build secure and scalable websites for your business.",
  keywords: [
    "web developer",
    "full stack developer",
    "cybersecurity",
    "DevOps",
    "freelance developer",
    "Django",
    "Next.js",
    "React",
    "testing",
    "website developer",
    "Algeria",
    "Ghiles Ouali",
    "مطور ويب",
    "أمن المعلومات",
    "مطور مواقع"
  ],
  authors: [{ name: "Ghiles Ouali" }],
  creator: "Ghiles Ouali",
  publisher: "Ghiles Ouali",
  metadataBase: new URL("https://votre-domaine.com"), // 🟢 غيّرها إلى رابط موقعك الفعلي
  openGraph: {
    title: "Ghiles Ouali | Web Developer & Cybersecurity Engineer",
    description:
      "Building secure, modern, and high-performance web applications using Django, Next.js, and DevOps technologies.",
    url: "https://votre-domaine.com",
    siteName: "Ghiles Ouali Portfolio",
    images: [
      {
        url: "https://votre-domaine.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio of Ghiles Ouali",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghiles Ouali | Full Stack & Cybersecurity Developer",
    description:
      "Explore my projects and experience in web development, testing, and cybersecurity engineering.",
    images: ["https://votre-domaine.com/preview.jpg"],
    creator: "@ghilesouali",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://votre-domaine.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* 🔥 JSON-LD Schema for Google SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ghiles Ouali",
              jobTitle: "Full-Stack Developer & Cybersecurity Engineer",
              url: "https://votre-domaine.com",
              sameAs: [
                "https://github.com/OUALIGHILES",
                "https://linkedin.com/in/ghiles-ouali",
              ],
              knowsAbout: [
                "Web Development",
                "Cybersecurity",
                "Django",
                "Next.js",
                "DevOps",
                "API Development",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
            }),
          }}
        />
      </head>
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
