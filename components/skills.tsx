"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Brain, Code, Database, Cloud, Layout, Workflow } from "lucide-react"

const skillCategories = [
  {
    category: "Languages",
    icon: Code,
    description: "Core programming languages and scripting",
    skills: ["Python", "Java", "C++", "C#", "JavaScript", "TypeScript", "SQL", "Bash"],
  },
  {
    category: "Frontend Development",
    icon: Layout,
    description: "Modern web applications and responsive UI",
    skills: ["React", "Angular", "Next.js", "HTML5/CSS3", "Responsive UI", "JavaScript (ES6+)"],
  },
  {
    category: "Backend Development",
    icon: Code,
    description: "Scalable APIs and microservices architecture",
    skills: ["REST APIs", "Node.js", "Spring Boot", "Flask", "FastAPI", "Microservices"],
  },
  {
    category: "Databases",
    icon: Database,
    description: "SQL, NoSQL, and distributed data stores",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Snowflake", "Elasticsearch", "Redis", "Cassandra", "Hive"],
  },
  {
    category: "Data Engineering",
    icon: Workflow,
    description: "Real-time streaming and batch processing pipelines",
    skills: ["Apache Spark", "Kafka", "Kafka Streams", "Hadoop", "Airflow", "ELK Stack", "ETL/ELT", "Data Modeling"],
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    description: "Cloud-native infrastructure and CI/CD automation",
    skills: ["AWS", "Kubernetes", "Docker", "Jenkins", "Git", "Terraform", "Prometheus", "Grafana", "Linux"],
  },
  {
    category: "AI & Machine Learning",
    icon: Brain,
    description: "Deep learning, NLP, and generative AI",
    skills: ["TensorFlow", "PyTorch", "scikit-learn", "Transformers", "Generative AI", "NLP", "Anomaly Detection"],
  },
  {
    category: "Concepts & Methodologies",
    icon: Workflow,
    description: "Software engineering principles and practices",
    skills: ["OOP", "Agile/Scrum", "Distributed Systems", "Data Structures", "Design Patterns", "SDLC"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-12 sm:space-y-16"
        >
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance">Technical Skills</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-accent to-accent/50 rounded-full" />
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl pt-2">
              Full-stack expertise across backend systems, cloud infrastructure, data engineering, and AI/ML
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group"
                >
                  <div className="h-full p-5 sm:p-6 rounded-xl border border-border bg-card hover:border-accent/50 hover:shadow-lg transition-all duration-300 space-y-4">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="p-2.5 sm:p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 flex-shrink-0">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div className="flex-1 space-y-1.5">
                        <h3 className="font-bold text-base sm:text-lg text-foreground">{category.category}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="text-xs hover:bg-secondary hover:border-accent/30 transition-all cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
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
