"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  const [currentStep, setCurrentStep] = useState(0)
  const steps = ["Welcome to Spendora", "Smart Expense Tracking Made Simple", "Take Control of Your Finances Today"]

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 dark:from-primary/10 dark:to-secondary/10 animate-gradient-wave" />
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/10 dark:bg-primary/5 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      <div className="relative z-10 text-center space-y-6">
        <motion.h1
          key={currentStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold"
        >
          {steps[currentStep]}
        </motion.h1>
        <Button size="lg" onClick={() => setCurrentStep((prev) => (prev + 1) % steps.length)} className="glow-on-hover">
          Next
        </Button>
      </div>
    </section>
  )
}

