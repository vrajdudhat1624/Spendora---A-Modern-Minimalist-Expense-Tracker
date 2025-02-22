import type React from "react"
import "./globals.css"
import { Inter, Poppins } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-heading",
})

export const metadata = {
    title: "Expense Tracker",
    description: "A modern expense tracking app",
  }
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.variable} ${poppins.variable} font-sans`}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </body>
      </html>
    )
  }