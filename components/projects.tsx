"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ProjectModal } from "@/components/project-modal"
import { useState } from "react"
import { motion } from "framer-motion"
import projectsData from "@/data/projects.json"

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleProjectClick = (project: any) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  return (
    <>
      <section id="projects" className="px-4 sm:px-6 lg:px-8 py-20 sm:py-32 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-12 sm:space-y-16"
          >
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Featured Projects</h2>
              <div className="h-1 w-20 bg-accent rounded-full" />
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl pt-2">
                Production-grade systems and ML applications built end-to-end
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {projectsData.projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col hover:border-accent/50 hover:shadow-xl transition-all duration-300 group cursor-pointer">
                    <CardHeader className="space-y-3 pb-4">
                      <CardTitle className="text-xl sm:text-2xl group-hover:text-accent transition-colors">
                        {project.name}
                      </CardTitle>
                      <CardDescription className="text-sm sm:text-base leading-relaxed line-clamp-2">
                        {project.tagline}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col gap-6">
                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-3">
                        {project.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="text-center">
                            <div className="text-lg sm:text-xl font-bold text-accent font-mono">{metric.value}</div>
                            <div className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{metric.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 5).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 5 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.technologies.length - 5}
                          </Badge>
                        )}
                      </div>

                      {/* View Details Button */}
                      <Button
                        variant="outline"
                        className="w-full mt-auto bg-transparent hover:bg-accent hover:text-accent-foreground transition-all"
                        onClick={() => handleProjectClick(project)}
                      >
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
