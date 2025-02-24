import {
  Sun,
  Moon,
  type LightbulbIcon as LucideProps,
  Wallet,
  BarChart2,
  Layout,
  Shield,
  Brain,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react"

export const Icons = {
  logo: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M16 12h-4V8" />
      <path d="M12 16l-4-4" />
    </svg>
  ),
  sun: Sun,
  moon: Moon,
  categories: Wallet,
  insights: BarChart2,
  dashboard: Layout,
  privacy: Shield,
  ai: Brain,
  linkedin: Linkedin,
  twitter: Twitter,
  github: Github,
}

