"use client"

import { motion } from "framer-motion"
import { Building2, GraduationCap, Award } from "lucide-react"

const experiences = [
  {
    role: "Graduate Research Assistant",
    company: "University at Buffalo",
    period: "Aug 2024 – Present",
    type: "Research & Development",
    description: [
      "Built and maintained backend Python systems following secure coding patterns, accessibility considerations, and engineering best practices.",
      "Developed an agentic AI-powered adaptive web extraction system using Playwright, LangChain, and large language models, resilient to dynamic DOM changes, reducing manual effort by 60%.",
      "Co-developed AutoRSR, an ML inference pipeline with production-grade logging and telemetry, reducing evaluation time by 60% and increasing clinical screening throughput.",
      "Participated in structured code reviews, applied peer feedback, and aligned implementations with team coding standards and design guidelines.",
      "Integrated observability signals including logs and metrics to support troubleshooting, availability monitoring, and performance analysis.",
    ],
    highlight: "Python · Machine Learning · LangChain · Playwright",
  },
  {
    role: "Software Engineer",
    company: "UnitedHealth Group",
    period: "Sep 2021 – Aug 2024",
    type: "Backend & Data Engineering",
    description: [
      "Architected and engineered cloud-native backend and RESTful microservices in Java, Spring Boot, and Python, contributing to the modernization of 15+ legacy healthcare systems into a scalable microservices platform serving 200K+ members.",
      "Led on-premises database to AWS Kafka migration, designing secure ingestion pipelines to stream transactional and reference data into cloud-native services, improving data freshness, scalability, and system reliability.",
      "Optimized high-throughput backend services by tuning thread pools, connection pooling, Redis caching, and database queries, reducing P95 API latency by 35% while sustaining 3.5K requests per second at peak load.",
      "Built centralized observability and monitoring using ELK Stack, Splunk, Grafana, and Snowflake, ingesting over two million daily events, improving MTTD by 40% and enabling real-time alerting for 99.9% SLA compliance.",
      "Delivered HIPAA-compliant features including provider search with Elasticsearch achieving sub-200ms P99 latency on over 500K records, secure APIs, and PostgreSQL with row-level security, partnering closely with security and compliance teams.",
      "Owned production reliability through CI/CD automation using Jenkins and GitHub and on-call rotations, maintaining 99.9% uptime and under two-hour MTTR; recognized with a Bravo Award for Kafka migration contributions.",
    ],
    highlight: "Java · Spring Boot · Python · AWS · Kafka · ELK Stack",
  },
  {
    role: "Software Engineer",
    company: "Deloitte",
    period: "Jun 2021 – Sep 2021",
    type: "Full-Stack Development",
    description: [
      "Developed enterprise full-stack applications using Java, Spring Boot, Angular, and Next.js with a focus on performance, security, and maintainability.",
      "Designed role-based backend APIs using NestJS and PostgreSQL, aligning implementations with internal privacy and compliance requirements.",
      "Created Prometheus-based monitoring and alerting pipelines and integrated automated incident workflows with ServiceNow, improving system visibility, on-call response, and operational readiness.",
      "Participated in agile ceremonies, authored low-level design documentation, and conducted peer code reviews to ensure adherence to engineering standards.",
    ],
    highlight: "Java · Spring Boot · Angular · Next.js · NestJS",
  },
  {
    role: "Software Engineering Intern",
    company: "KPMG",
    period: "Jan 2021 – Jun 2021",
    type: "Full-Stack Development",
    description: [
      "Built a secure internal risk assessment and vendor compliance platform using Python, Flask, React, and MongoDB.",
      "Automated CI/CD pipelines via Azure DevOps, reducing deployment latency through parallel execution and build caching.",
      "Developed secure REST APIs and optimized database operations to handle increased load while preserving auditability.",
      "Automated compliance workflows, reducing manual auditing time by 70% and improving assessment throughput.",
    ],
    highlight: "Python · Flask · React · MongoDB · Azure DevOps",
  },
]

const education = [
  {
    degree: "MS in Computer Science and Engineering (AI/ML)",
    school: "University at Buffalo",
    period: "Aug 2024 – Dec 2025",
    location: "Buffalo, NY",
  },
  {
    degree: "B.Tech, Electronics and Computer Engineering",
    school: "VIT University",
    period: "Jun 2017 – Jul 2021",
    location: "Vellore, India",
  },
]

const awards = [
  { title: "Top 10%, PICOCTF Cybersecurity Competition", organization: "Carnegie Mellon University", year: "2021" },
  { title: "Data Structures and Algorithms, Top Scorer", organization: "NPTEL", year: "2020" },
]

export function Experience() {
  return (
    <section id="experience" className="px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-16 sm:space-y-20"
        >
          {/* Experience */}
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Building2 className="h-7 w-7 sm:h-8 sm:w-8 text-accent" />
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance">Experience</h2>
              </div>
              <div className="h-1 w-20 bg-gradient-to-r from-accent to-accent/50 rounded-full" />
            </div>

            <div className="space-y-8 sm:space-y-10">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-6 sm:pl-8"
                >
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-[7px] sm:left-[9px] top-4 bottom-0 w-[2px] bg-border/40" />
                  )}
                  <div className="absolute left-0 sm:left-[1px] top-0 h-4 w-4 rounded-full bg-accent ring-4 ring-background shadow-lg shadow-accent/20" />

                  <div className="space-y-3 sm:space-y-4 pb-2">
                    <div className="space-y-2">
                      <div className="flex flex-col gap-1 sm:gap-2">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-2">
                          <h3 className="text-lg sm:text-xl font-bold text-foreground">{exp.role}</h3>
                          <span className="text-sm text-muted-foreground font-mono">{exp.period}</span>
                        </div>
                        <p className="text-base sm:text-lg text-foreground/90 font-medium">{exp.company}</p>
                        <p className="text-xs sm:text-sm text-accent font-medium">{exp.type}</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex gap-2 sm:gap-3 leading-relaxed">
                          <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                          <span className="text-pretty">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-2">
                      <span className="text-xs font-mono text-muted-foreground bg-muted px-3 py-1.5 rounded-md inline-block">
                        {exp.highlight}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-7 w-7 sm:h-8 sm:w-8 text-accent" />
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance">Education</h2>
              </div>
              <div className="h-1 w-20 bg-gradient-to-r from-accent to-accent/50 rounded-full" />
            </div>

            <div className="space-y-6 sm:space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-6 sm:pl-8"
                >
                  {index !== education.length - 1 && (
                    <div className="absolute left-[7px] sm:left-[9px] top-4 bottom-0 w-[2px] bg-border/40" />
                  )}
                  <div className="absolute left-0 sm:left-[1px] top-0 h-4 w-4 rounded-full bg-accent ring-4 ring-background shadow-lg shadow-accent/20" />

                  <div className="space-y-2 pb-2">
                    <div className="flex flex-col gap-1 sm:gap-2">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-2">
                        <h3 className="text-base sm:text-lg font-bold text-foreground text-pretty">{edu.degree}</h3>
                        <span className="text-sm text-muted-foreground font-mono">{edu.period}</span>
                      </div>
                      <p className="text-sm sm:text-base text-foreground/90 font-medium">{edu.school}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{edu.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6 sm:h-7 sm:w-7 text-accent" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-balance">
                  Awards & Certifications
                </h2>
              </div>
              <div className="h-1 w-20 bg-gradient-to-r from-accent to-accent/50 rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-4 sm:p-5 rounded-lg border border-border bg-card hover:border-accent/50 transition-all"
                >
                  <h3 className="font-semibold text-sm sm:text-base text-foreground text-pretty">{award.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">{award.organization}</p>
                  <p className="text-xs text-accent font-mono mt-1">{award.year}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
