import Link from "next/link"
import { Icons } from "@/components/icons"

export function Footer() {
  return (
    <footer className="bg-secondary py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="flex items-center space-x-2">
              <Icons.logo className="h-6 w-6" />
              <span className="font-bold text-xl">Spendora</span>
            </Link>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end gap-4 mb-4 md:mb-0">
            <Link href="#" className="text-sm hover:text-primary transition-colors glow-on-hover">
              About Us
            </Link>
            <Link href="#" className="text-sm hover:text-primary transition-colors glow-on-hover">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm hover:text-primary transition-colors glow-on-hover">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm hover:text-primary transition-colors glow-on-hover">
              Contact
            </Link>
          </nav>
          <div className="flex space-x-4">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              <Icons.linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              <Icons.twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              <Icons.github className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">© 2024 Spendora. All rights reserved.</div>
      </div>
    </footer>
  )
}

