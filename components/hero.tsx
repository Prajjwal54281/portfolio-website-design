"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, Download, Globe } from "lucide-react"
import { motion } from "framer-motion"
import { useCounter } from "@/lib/use-counter"

export function Hero() {
  const totalEvents = 100
  const avgAccuracy = 85
  const latencyReduction = 30

  const eventsCounter = useCounter(totalEvents, 2000)
  const accuracyCounter = useCounter(avgAccuracy, 2000)
  const latencyCounter = useCounter(latencyReduction, 2000)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 sm:py-24"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 sm:space-y-8 lg:space-y-10"
        >
          <div className="space-y-3 sm:space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.1]"
            >
              Prajjwal Mishra
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-base sm:text-lg md:text-xl text-foreground/90 max-w-3xl leading-relaxed text-pretty"
            >
              4+ years of industry experience building end-to-end data and AI systems, including real-time pipelines,
              distributed backends, cloud-native infrastructure, and scalable full-stack applications.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light tracking-wide font-mono"
            >
              Software Engineer · AI/ML · Cloud
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-foreground/90 max-w-3xl leading-relaxed text-pretty"
          >
            I build production-ready AI systems end-to-end — from multimodal models to cloud-native infrastructure and
            polished user interfaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 sm:gap-6 py-6 max-w-2xl"
          >
            <div ref={eventsCounter.elementRef} className="text-center space-y-1">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent font-mono">
                {Math.floor(eventsCounter.count)}K+
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">Events/Sec</div>
            </div>
            <div ref={accuracyCounter.elementRef} className="text-center space-y-1">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent font-mono">
                {Math.floor(accuracyCounter.count)}%
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">Accuracy</div>
            </div>
            <div ref={latencyCounter.elementRef} className="text-center space-y-1">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent font-mono">
                {Math.floor(latencyCounter.count)}%
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">Latency ↓</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4"
          >
            <Button
              size="lg"
              className="group w-full sm:w-auto min-h-[44px] shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto min-h-[44px] transition-all bg-transparent"
              asChild
            >
              <a href="/Resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto min-h-[44px] transition-all bg-transparent"
              asChild
            >
              <a href="#contact">Contact</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-border/60"
          >
            <span className="text-sm text-muted-foreground font-medium">Connect:</span>
            <div className="flex gap-3">
              <a
                href="https://autorsr.xlabub.com/home"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-all hover:scale-110 active:scale-95"
                aria-label="Website"
              >
                <Globe className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="https://github.com/Prajjwal54281"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-all hover:scale-110 active:scale-95"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/prajjwal-mishra-2a9528152/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-all hover:scale-110 active:scale-95"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="mailto:prajjwal.mishra5428@gmail.com"
                className="text-muted-foreground hover:text-accent transition-all hover:scale-110 active:scale-95"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
