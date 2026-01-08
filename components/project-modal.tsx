"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Github, ExternalLink, X } from "lucide-react"
import { useEffect } from "react"

interface Project {
  id: string
  name: string
  tagline: string
  description: string
  problem: string
  solution: string
  technologies: string[]
  metrics: { value: string; label: string }[]
  impact: string
  architecture: string
  lessons: string
  githubUrl?: string
  liveUrl?: string
}

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      // Disable body scroll when modal is open
      document.body.style.overflow = "hidden"
      // Scroll to top of page
      window.scrollTo({ top: 0, behavior: "instant" })
    } else {
      // Re-enable body scroll when modal closes
      document.body.style.overflow = "unset"
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!project) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[96vw] max-h-[90vh] p-0 gap-0 flex flex-col">
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-border/50 flex-shrink-0 relative">
          <DialogTitle className="text-xl sm:text-2xl font-bold tracking-tight text-foreground pr-8">
            {project.name}
          </DialogTitle>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{project.tagline}</p>
          <Button variant="ghost" size="icon" className="absolute right-4 top-4" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <ScrollArea className="flex-1 overflow-y-auto">
          <div className="px-6 py-6 space-y-8">
            {/* Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.metrics.map((metric, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center text-center p-4 rounded-lg bg-accent/5 border border-accent/20 min-h-[100px]"
                >
                  <div className="text-xl sm:text-2xl font-bold text-accent font-mono mb-1 break-words w-full px-1">
                    {metric.value}
                  </div>
                  <div className="text-xs text-muted-foreground leading-snug break-words w-full px-1">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Problem & Solution */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-base font-bold text-accent">Problem</h3>
                <p className="text-sm leading-relaxed text-foreground/90">{project.problem}</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-accent">Solution</h3>
                <p className="text-sm leading-relaxed text-foreground/90">{project.solution}</p>
              </div>
            </div>

            {/* Architecture */}
            <div className="space-y-2">
              <h3 className="text-base font-bold text-foreground">Architecture</h3>
              <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                <p className="text-xs font-mono leading-relaxed text-foreground/80 break-words">
                  {project.architecture}
                </p>
              </div>
            </div>

            {/* Impact */}
            <div className="space-y-2">
              <h3 className="text-base font-bold text-foreground">Impact</h3>
              <p className="text-sm leading-relaxed text-foreground/90">{project.impact}</p>
            </div>

            {/* Lessons Learned */}
            <div className="space-y-2">
              <h3 className="text-base font-bold text-foreground">Lessons Learned</h3>
              <p className="text-sm leading-relaxed text-foreground/90">{project.lessons}</p>
            </div>

            {/* Technologies */}
            <div className="space-y-2">
              <h3 className="text-base font-bold text-foreground">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs px-2.5 py-0.5">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Links */}
            {(project.githubUrl || project.liveUrl) && (
              <div className="flex flex-col sm:flex-row gap-3 pt-4 pb-2 border-t border-border/50">
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full sm:flex-1 bg-transparent hover:bg-accent hover:text-accent-foreground"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View on GitHub
                    </a>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button variant="default" size="sm" className="w-full sm:flex-1 bg-accent hover:bg-accent/90" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
