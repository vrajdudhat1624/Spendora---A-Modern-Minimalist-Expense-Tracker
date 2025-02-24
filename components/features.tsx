"use client"

import { Icons } from "@/components/icons"
import { motion } from "framer-motion"

const features = [
  {
    icon: Icons.categories,
    title: "Smart Expense Categorization",
    description: "Automatically categorize your expenses with AI-powered technology.",
  },
  {
    icon: Icons.insights,
    title: "Real-Time Spending Insights",
    description: "Get instant insights into your spending habits and patterns.",
  },
  {
    icon: Icons.dashboard,
    title: "Customizable Dashboard",
    description: "Tailor your dashboard to focus on what matters most to you.",
  },
  {
    icon: Icons.privacy,
    title: "Privacy-Focused Tracking",
    description: "Keep your financial data secure with our privacy-first approach.",
  },
  {
    icon: Icons.ai,
    title: "AI-powered Budget Recommendations",
    description: "Receive personalized budget recommendations based on your spending habits.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 bg-secondary/50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 glow-on-hover"
            >
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

