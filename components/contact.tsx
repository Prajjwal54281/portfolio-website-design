"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { toast } from "sonner"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call (replace with actual API route)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast.success("Message sent successfully! I'll get back to you soon.")
    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <section id="contact" className="px-4 sm:px-6 lg:px-8 py-20 sm:py-32 border-t border-border/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-12 sm:space-y-16"
        >
          <div className="space-y-4 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Get in Touch</h2>
            <div className="h-1 w-20 bg-accent rounded-full mx-auto" />
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto pt-2">
              I'm always open to discussing new opportunities, collaborations, or interesting projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold">Contact Information</h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-sm sm:text-base">San Jose, California</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 mt-0.5 text-accent flex-shrink-0" />
                    <a
                      href="mailto:prajjwal.mishra5428@gmail.com"
                      className="text-foreground hover:text-accent transition-colors underline-offset-4 hover:underline text-sm sm:text-base break-all"
                    >
                      prajjwal.mishra5428@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-border/50">
                <h3 className="text-lg font-semibold">Connect</h3>
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="outline"
                    className="bg-transparent hover:bg-accent hover:text-accent-foreground"
                    asChild
                  >
                    <a href="https://github.com/Prajjwal54281" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-transparent hover:bg-accent hover:text-accent-foreground"
                    asChild
                  >
                    <a
                      href="https://www.linkedin.com/in/prajjwal-mishra-2a9528152/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-transparent hover:bg-accent hover:text-accent-foreground"
                    asChild
                  >
                    <a href="mailto:prajjwal.mishra5428@gmail.com">
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" required className="bg-transparent" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="bg-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={5}
                    required
                    className="bg-transparent resize-none"
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Note: To enable email functionality, wire up an SMTP service in the API route.
                </p>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-20 sm:mt-24 pt-8 border-t border-border/50 text-center space-y-2"
      >
        <p className="text-sm text-muted-foreground">© 2025 Prajjwal Mishra. All rights reserved.</p>
        <p className="text-xs text-muted-foreground">Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion</p>
        <div className="pt-2">
          <Button variant="link" className="text-xs" asChild>
            <a href="/Resume.pdf" download>
              Download Resume (PDF)
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
