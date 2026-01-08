"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const companies = [
  {
    name: "UnitedHealth Group",
    logo: "/unitedhealth-group-logo.jpg",
  },
  {
    name: "Optum",
    logo: "/optum-logo.jpg",
  },
  {
    name: "Deloitte",
    logo: "/deloitte-logo.png",
  },
  {
    name: "KPMG",
    logo: "/kpmg-logo.png",
  },
]

export function Companies() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % companies.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-y border-border/40 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8 sm:space-y-12"
        >
          <div className="text-center space-y-3">
            <p className="text-sm sm:text-base text-muted-foreground uppercase tracking-wider font-medium">
              Trusted by Industry Leaders
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Companies I've Worked With</h2>
          </div>

          <div className="relative overflow-hidden">
            {/* Desktop: Show all logos in a sliding carousel */}
            <div className="hidden md:block">
              <div className="flex gap-12 items-center justify-center">
                {companies.map((company, index) => {
                  const position = (index - currentIndex + companies.length) % companies.length
                  const isCenter = position === 0 || position === 1

                  return (
                    <motion.div
                      key={company.name}
                      animate={{
                        scale: isCenter ? 1.1 : 0.85,
                        opacity: isCenter ? 1 : 0.4,
                      }}
                      transition={{ duration: 0.5 }}
                      className="flex-shrink-0 w-48 h-24 flex items-center justify-center"
                    >
                      <img
                        src={company.logo || "/placeholder.svg"}
                        alt={`${company.name} logo`}
                        className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Mobile: Show one logo at a time with smooth transitions */}
            <div className="md:hidden relative h-32 flex items-center justify-center">
              {companies.map((company, index) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: index === currentIndex ? 1 : 0,
                    scale: index === currentIndex ? 1 : 0.8,
                    position: "absolute" as const,
                  }}
                  transition={{ duration: 0.5 }}
                  className="w-48 h-24 flex items-center justify-center"
                >
                  <img
                    src={company.logo || "/placeholder.svg"}
                    alt={`${company.name} logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </motion.div>
              ))}
            </div>

            {/* Indicator dots */}
            <div className="flex justify-center gap-2 mt-8">
              {companies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "w-8 bg-accent" : "w-2 bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
