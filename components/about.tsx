"use client"

import { motion } from "framer-motion"
import { GraduationCap, Briefcase, Code2 } from "lucide-react"

const timeline = [
  {
    icon: GraduationCap,
    title: "MS in Computer Science",
    subtitle: "University at Buffalo",
    period: "2024 - 2025",
    description: "AI/ML specialization with focus on multimodal systems",
  },
  {
    icon: Briefcase,
    title: "4+ Years Industry", // Updated to 4+ years
    subtitle: "UnitedHealth · Deloitte · KPMG",
    period: "2021 - 2024",
    description: "Backend, Platform, and Data Engineering",
  },
  {
    icon: Code2,
    title: "Research & Development",
    subtitle: "University at Buffalo",
    period: "2024 - Present",
    description: "VR applications and cognitive therapy systems",
  },
]

export function About() {
  return (
    <section id="about" className="px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-12 sm:space-y-16"
        >
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance">About Me</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-accent to-accent/50 rounded-full" />
          </div>

          <div className="space-y-6 max-w-4xl">
            <p className="text-base sm:text-lg leading-relaxed text-foreground text-pretty">
              Software Engineer with 4+ years of experience building production-grade distributed systems, real-time
              data pipelines, and scalable backend architectures. Currently pursuing an MS in Computer Science (AI/ML)
              at the University at Buffalo, combining strong industry execution with advanced research exposure.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-foreground text-pretty">
              At UnitedHealth Group, architected event-driven microservices processing 100K+ events/second, built
              centralized monitoring platforms that reduced debugging time by 70%, and designed Kafka- and
              Kubernetes-based streaming workflows that lowered data latency by 30%. Delivered HIPAA-compliant systems
              while improving overall scalability by 35% through robust system design and cloud-native patterns.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-foreground text-pretty">
              I operate at the intersection of backend engineering, cloud infrastructure, and AI-driven innovation,
              delivering end-to-end solutions—from real-time telemetry platforms supporting 10,000+ vehicles to
              immersive AI-powered VR healthcare applications—with a strong focus on reliability, performance, and
              business impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 pt-8">
            {timeline.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="h-full p-5 sm:p-6 rounded-xl border border-border bg-card hover:border-accent/50 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="p-2.5 sm:p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 flex-shrink-0">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <h3 className="font-bold text-sm sm:text-base text-foreground">{item.title}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground font-medium">{item.subtitle}</p>
                        <p className="text-xs text-muted-foreground font-mono">{item.period}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground pt-1 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
