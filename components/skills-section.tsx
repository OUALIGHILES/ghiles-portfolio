import { Card } from "@/components/ui/card"
import { 
  Code2, Database, Lock, Smartphone, Globe, Server, Sparkles,
  Shield, TerminalSquare, Wrench, Network, Bug, Layers, GitBranch, Github,
  Search, Cpu
} from "lucide-react"

const skills = [
  {
    icon: Smartphone,
    title: "Swift",
    description: "iOS app development with modern Swift and SwiftUI",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Server,
    title: "Django",
    description: "Backend development with Python and Django REST Framework",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Code2,
    title: "React",
    description: "Modern frontend development with React and Next.js",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Layers,
    title: "Next.js",
    description: "Full-stack web applications using Next.js and modern web practices",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Database,
    title: "Supabase",
    description: "Database management and real-time applications",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Wrench,
    title: "DevOps",
    description: "Automation, CI/CD pipelines, and infrastructure management",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: TerminalSquare,
    title: "Docker & Kubernetes",
    description: "Containerization, orchestration, and cloud-native deployment",
    color: "from-sky-500 to-blue-600",
  },
  {
    icon: Network,
    title: "Network Configuration",
    description: "Configuring routers, switches, and securing network infrastructure",
    color: "from-cyan-500 to-sky-500",
  },
  {
    icon: Bug,
    title: "Penetration Testing",
    description: "Identifying and exploiting security flaws in applications and networks",
    color: "from-red-500 to-rose-500",
  },
  {
    icon: Shield,
    title: "Web Security Testing",
    description: "Assessing web applications for vulnerabilities and security risks",
    color: "from-pink-500 to-purple-500",
  },
  {
    icon: GitBranch,
    title: "Git",
    description: "Version control and collaboration for efficient code management",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: Github,
    title: "GitHub",
    description: "Code hosting, collaboration, and project version management",
    color: "from-gray-600 to-black",
  },
  {
    icon: Globe,
    title: "API Development",
    description: "RESTful APIs and GraphQL implementation",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: Lock,
    title: "Cybersecurity",
    description: "Security best practices and vulnerability assessment",
    color: "from-red-500 to-pink-500",
  },

  // 🆕 Added skills
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Improving website visibility and performance on search engines",
    color: "from-green-400 to-emerald-600",
  },
  {
    icon: Cpu,
    title: "Linux Kernel",
    description: "Deep understanding of Linux systems, drivers, and kernel-level operations",
    color: "from-gray-700 to-slate-500",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div 
          className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium">What I do best</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">Skills</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full mb-6" />

          <p className="text-muted-foreground text-lg mb-2 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, secure applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="relative p-6 bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 group overflow-hidden hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute inset-[-1px] bg-gradient-to-br ${skill.color} rounded-lg blur-sm`} />
              </div>

              <div className="relative z-10">
                <div className="mb-4 inline-flex relative group/icon">
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-xl blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative p-3 bg-background/80 backdrop-blur-sm rounded-xl border border-border/50 group-hover:border-primary/50 transition-all duration-300 group-hover:scale-110">
                    <skill.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {skill.description}
                </p>

                <div className="absolute top-4 right-4 w-20 h-20 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <div className={`w-full h-full bg-gradient-to-br ${skill.color} rounded-full blur-2xl`} />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            And always learning more... 🚀
          </p>
        </div>
      </div>
    </section>
  )
}
