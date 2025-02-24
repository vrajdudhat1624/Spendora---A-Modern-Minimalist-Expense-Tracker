import { Moon, Sun, Laptop, type LightbulbIcon as LucideProps, ChromeIcon as Google } from "lucide-react";
import { SVGProps } from "react";

export const Icons = {
  sun: Sun,
  moon: Moon,
  laptop: Laptop,
  logo: (props: SVGProps<SVGSVGElement>) => (
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
  google: Google,
};
