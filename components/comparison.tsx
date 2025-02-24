"use client"

import { CheckIcon, XIcon } from "lucide-react"
import { motion } from "framer-motion"

const comparisonData = [
  {
    feature: "Smart Categorization",
    spendora: true,
    others: false,
  },
  {
    feature: "Real-Time Insights",
    spendora: true,
    others: true,
  },
  {
    feature: "Customizable Dashboard",
    spendora: true,
    others: false,
  },
  {
    feature: "Privacy-Focused",
    spendora: true,
    others: false,
  },
  {
    feature: "AI Recommendations",
    spendora: true,
    others: false,
  },
]

export function Comparison() {
  return (
    <section id="comparison" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">How It's Different?</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="overflow-x-auto"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-4 bg-secondary">Feature</th>
                <th className="text-center p-4 bg-secondary">Spendora</th>
                <th className="text-center p-4 bg-secondary">Other Apps</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="border-b border-border"
                >
                  <td className="p-4">{item.feature}</td>
                  <td className="text-center p-4">
                    {item.spendora ? (
                      <CheckIcon className="inline-block text-green-500" />
                    ) : (
                      <XIcon className="inline-block text-red-500" />
                    )}
                  </td>
                  <td className="text-center p-4">
                    {item.others ? (
                      <CheckIcon className="inline-block text-green-500" />
                    ) : (
                      <XIcon className="inline-block text-red-500" />
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}

