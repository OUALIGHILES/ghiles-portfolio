import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with React, Django, and Stripe integration. Features include user authentication, product management, and secure payment processing.",
    image: "/modern-ecommerce-dashboard.png",
    tags: ["React", "Django", "PostgreSQL", "Stripe"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Give Me Delivery",
    description:
      "Give Me Delivery est une plateforme Web spécialisée dans la mise en relation entre utilisateurs et restaurants, cafés, supermarkets ou cuisiniers à domicile. Grâce à une interface intuitive, les clients peuvent consulter les menus de plusieurs établissements, passer leurs commandes en ligne puis suivre la livraison en temps réel. Les restaurateurs disposent d’un tableau de bord complet pour gérer les menus, les zones de livraison et les performances." ,
    image: "/cybersecurity-dashboard-dark-theme.jpg",
    tags: ["Next.js", "Node.js (Express)", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/OUALIGHILES/giveemee",
    demo: "https://giveemee.com/",
  },
  {
    title: "Task Management App",
    description:
      "Real-time collaborative task management application with Supabase backend. Features include team collaboration, notifications, and progress tracking.",
    image: "/task-management-app.png",
    tags: ["Next.js", "Supabase", "TypeScript", "Tailwind"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "iOS Fitness Tracker",
    description:
      "Native iOS app for tracking workouts and nutrition. Integrates with HealthKit and provides personalized insights and recommendations.",
    image: "/fitness-app-ios-interface.jpg",
    tags: ["Swift", "SwiftUI", "HealthKit", "CoreData"],
    github: "https://github.com",
    demo: null,
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A selection of my recent work showcasing various technologies and problem-solving approaches
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="relative h-48 bg-muted overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button asChild variant="outline" size="sm" className="group/btn bg-transparent">
                    <Link href={project.github} target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                      <ExternalLink className="ml-2 h-3 w-3 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    </Link>
                  </Button>
                  {project.demo && (
                    <Button asChild size="sm" className="group/btn">
                      <Link href={project.demo} target="_blank">
                        Live Demo
                        <ExternalLink className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
