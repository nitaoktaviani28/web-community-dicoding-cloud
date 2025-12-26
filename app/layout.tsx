import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Dicoding Cloud Community",
  description: "Belajar, Berbagi, dan Bertumbuh di Dunia Cloud & DevOps bersama Dicoding Cloud Community.",
  keywords: ["Cloud Computing", "DevOps", "Dicoding", "Community", "Webinar", "Technology"],
  authors: [{ name: "Dicoding Cloud Community" }],
  openGraph: {
    title: "Dicoding Cloud Community",
    description: "Belajar, Berbagi, dan Bertumbuh di Dunia Cloud & DevOps bersama Dicoding Cloud Community.",
    type: "website",
    locale: "id_ID",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
