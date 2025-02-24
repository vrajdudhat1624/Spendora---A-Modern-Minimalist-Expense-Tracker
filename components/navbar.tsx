"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center space-x-2">
          <Icons.logo className="h-8 w-8" />
          <span className="font-bold text-xl">Spendora</span>
        </Link>
        <div className="flex items-center space-x-6">
          <Link
            href="#"
            className="text-sm font-medium hover:text-primary transition-colors duration-200 ease-in-out transform hover:scale-105"
          >
            Home
          </Link>
          <Link
            href="#features"
            className="text-sm font-medium hover:text-primary transition-colors duration-200 ease-in-out transform hover:scale-105"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium hover:text-primary transition-colors duration-200 ease-in-out transform hover:scale-105"
          >
            Pricing
          </Link>
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            <Icons.sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Icons.moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button variant="outline" className="glow-on-hover">
            Login
          </Button>
          <Button className="glow-on-hover">Sign Up</Button>
        </div>
      </div>
    </nav>
  )
}

