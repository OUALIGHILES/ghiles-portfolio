import { Card } from "@/components/ui/card"
import { GraduationCap, Briefcase, Sparkles, Calendar } from "lucide-react"

const experiences = [
  {
    type: "education",
    title: "Computer Science Engineering",
    organization: "ESTIN",
    period: "2023 - Present",
    description:
      "Specialized in cybersecurity. Coursework includes advanced algorithms, network security, and full-stack development.",
  },
  {
    type: "work",
    title: "Web Testing Intern",
    organization: "Sonatrach",
    period: "Summer 2024",
    description:
      "Conducted comprehensive testing of web applications, identified security vulnerabilities, and collaborated with development teams to implement fixes.",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(120,119,198,0.1),transparent_50%)]" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div 
        className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium">My journey so far</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Experience & <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">Education</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full mb-6" />
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My academic journey and professional experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Enhanced Timeline line with gradient */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 via-primary to-primary/50 rounded-full" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className="relative pl-20 group"
                  style={{ 
                    animationDelay: `${index * 200}ms`,
                  }}
                >
                  {/* Enhanced Timeline dot with glow */}
                  <div className="absolute left-4 top-8 z-10">
                    <div className="absolute inset-0 w-9 h-9 rounded-full bg-primary/30 blur-md animate-pulse" />
                    <div className="relative w-9 h-9 rounded-full bg-gradient-to-br from-primary to-purple-500 border-4 border-background shadow-lg flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                      {exp.type === "education" ? (
                        <GraduationCap className="h-4 w-4 text-background" />
                      ) : (
                        <Briefcase className="h-4 w-4 text-background" />
                      )}
                    </div>
                  </div>

                  <Card className="relative p-8 bg-background/80 backdrop-blur-xl border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 group-hover:-translate-y-1 overflow-hidden">
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${
                      exp.type === "education" 
                        ? "from-blue-500/5 to-purple-500/5" 
                        : "from-green-500/5 to-emerald-500/5"
                    } opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Animated border gradient */}
                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className={`absolute inset-[-1px] bg-gradient-to-br ${
                        exp.type === "education" 
                          ? "from-blue-500 to-purple-500" 
                          : "from-green-500 to-emerald-500"
                      } rounded-lg blur-sm opacity-30`} />
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-start gap-4 mb-4">
                        {/* Icon container with gradient */}
                        <div className="relative group/icon">
                          <div className={`absolute inset-0 bg-gradient-to-br ${
                            exp.type === "education" 
                              ? "from-blue-500 to-purple-500" 
                              : "from-green-500 to-emerald-500"
                          } rounded-xl blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />
                          <div className="relative p-3 bg-background/80 backdrop-blur-sm rounded-xl border border-border/50 group-hover:border-primary/50 transition-all duration-300">
                            {exp.type === "education" ? (
                              <GraduationCap className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                            ) : (
                              <Briefcase className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                            )}
                          </div>
                        </div>

                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                            {exp.title}
                          </h3>
                          <p className="text-lg font-semibold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                            {exp.organization}
                          </p>
                          
                          {/* Period badge */}
                          <div className="inline-flex items-center gap-2 mt-3 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                            <Calendar className="w-3.5 h-3.5 text-primary" />
                            <span className="text-sm font-medium text-primary">{exp.period}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed pl-16">
                        {exp.description}
                      </p>

                      {/* Decorative corner element */}
                      <div className="absolute top-4 right-4 w-24 h-24 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                        <div className={`w-full h-full bg-gradient-to-br ${
                          exp.type === "education" 
                            ? "from-blue-500 to-purple-500" 
                            : "from-green-500 to-emerald-500"
                        } rounded-full blur-2xl`} />
                      </div>
                    </div>

                    {/* Bottom shine effect */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </Card>
                </div>
              ))}
            </div>

            {/* Timeline end indicator */}
            <div className="absolute left-4 bottom-0 w-9 h-9 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 border-2 border-primary/30 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            </div>
          </div>
        </div>

        {/* Additional message */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            More exciting experiences to come... 🚀
          </p>
        </div>
      </div>
    </section>
  )
}