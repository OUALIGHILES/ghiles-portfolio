import { Code2, Shield, Sparkles, Rocket } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-secondary/50 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div 
        className="absolute bottom-20 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header with icon */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Get to know me</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              About <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">Me</span>
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
          </div>

          {/* Content card with glass effect */}
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-primary rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-1000" />
            
            {/* Main content */}
            <div className="relative bg-background/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-border/50 shadow-2xl">
              <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                <div className="relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-colors duration-300">
                  <Code2 className="absolute -left-3 top-1 w-5 h-5 text-primary bg-background rounded-full p-0.5" />
                  <p className="text-foreground/90">
                    I'm a passionate software developer with a strong focus on cybersecurity and modern web technologies.
                    Currently studying at <span className="text-primary font-semibold">ESTIN</span>, I combine academic knowledge with practical experience to build secure,
                    efficient applications.
                  </p>
                </div>

                <div className="relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-colors duration-300">
                  <Shield className="absolute -left-3 top-1 w-5 h-5 text-primary bg-background rounded-full p-0.5" />
                  <p className="text-foreground/90">
                    My journey in tech has led me to work with cutting-edge frameworks and tools, from <span className="font-semibold text-primary">Swift</span> for iOS
                    development to <span className="font-semibold text-primary">Django</span> and <span className="font-semibold text-primary">React</span> for full-stack web applications. I'm particularly interested in API
                    development, database architecture, and implementing robust security measures.
                  </p>
                </div>

                <div className="relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-colors duration-300">
                  <Rocket className="absolute -left-3 top-1 w-5 h-5 text-primary bg-background rounded-full p-0.5" />
                  <p className="text-foreground/90">
                    When I'm not coding, I'm exploring the latest cybersecurity trends, contributing to open-source projects,
                    or learning new technologies to expand my skill set. I believe in writing <span className="font-semibold text-primary">clean, maintainable code</span> and
                    creating user experiences that are both beautiful and functional.
                  </p>
                </div>
              </div>

              {/* Stats or highlights */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 pt-10 border-t border-border/50">
                <div className="text-center group/stat hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent mb-2">
                    ESTIN
                  </div>
                  <div className="text-sm text-muted-foreground">Student</div>
                </div>
                
                <div className="text-center group/stat hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent mb-2">
                    Full-Stack
                  </div>
                  <div className="text-sm text-muted-foreground">Developer</div>
                </div>
                
                <div className="text-center group/stat hover:scale-105 transition-transform duration-300 col-span-2 md:col-span-1">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent mb-2">
                    Security
                  </div>
                  <div className="text-sm text-muted-foreground">Focused</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}