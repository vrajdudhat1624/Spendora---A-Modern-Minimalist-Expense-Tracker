"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"
import { useTheme } from "next-themes"

export default function OnboardingPage() {
  const [step, setStep] = useState(0)
  const { theme, setTheme } = useTheme()

  const onboardingSteps = [
    {
      title: "Welcome to Spendora",
      description: "Track your expenses with ease and gain financial insights.",
    },
    {
      title: "Smart Categorization",
      description: "Our AI automatically categorizes your expenses for you.",
    },
    {
      title: "Detailed Reports",
      description: "Get in-depth analysis of your spending habits.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Icons.logo className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-6 font-heading text-3xl font-bold text-gray-900 dark:text-gray-100">
            {onboardingSteps[step].title}
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{onboardingSteps[step].description}</p>
        </div>

        {step === onboardingSteps.length - 1 ? (
          <div className="mt-8 space-y-6">
            <div>
              <Label htmlFor="email">Email address</Label>
              <Input id="email" name="email" type="email" autoComplete="email" required className="mt-1" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="mt-1"
              />
            </div>
            <div>
              <Button className="w-full" onClick={() => console.log("Sign in clicked")}>
                Sign in
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a href="#" className="font-medium text-primary hover:text-primary/80">
                  Forgot your password?
                </a>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-primary hover:text-primary/80">
                  Sign up
                </a>
              </div>
            </div>
            <div>
              <Button variant="outline" className="w-full" onClick={() => console.log("Sign in with Google clicked")}>
                <Icons.google className="mr-2 h-4 w-4" />
                Sign in with Google
              </Button>
            </div>
          </div>
        ) : (
          <Button className="mt-8 w-full" onClick={() => setStep(step + 1)}>
            Next
          </Button>
        )}

        <div className="mt-4 flex justify-center">
          {onboardingSteps.map((_, index) => (
            <div
              key={index}
              className={`mx-1 h-2 w-2 rounded-full ${index === step ? "bg-primary" : "bg-gray-300 dark:bg-gray-700"}`}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="ghost" size="sm" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            <Icons.sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Icons.moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

