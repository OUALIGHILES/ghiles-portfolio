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
            
            {/* Main content - split layout: portrait (left) and details (right) */}
            <div className="relative bg-background/80 backdrop-blur-xl rounded-3xl p-6 md:p-10 border border-border/50 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Portrait card */}
                <div className="col-span-12 md:col-span-5">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    {/* soft background to blend the portrait */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-gray-100/20 to-transparent pointer-events-none" />
                    {/* lighting highlight */}
                    <div className="absolute -right-8 -top-12 w-56 h-56 bg-gradient-to-tr from-white/30 via-white/10 to-transparent rounded-full filter blur-3xl opacity-80 pointer-events-none" />

                    {/* Image - place your portrait at /public/portrait.jpg */}
                    <img
                      src="/portrait.jpg"
                      alt="Portrait of Ghiles Ouali"
                      className="w-full h-[420px] md:h-[520px] object-cover rounded-2xl relative z-10"
                      style={{ boxShadow: '0 30px 60px rgba(16,24,40,0.35)', transform: 'translateZ(0)' }}
                    />

                    {/* subtle vignette to blend with background */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,0.06),transparent_40%)]" />
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="col-span-12 md:col-span-7">
                  <div className="flex flex-col h-full justify-center gap-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">Ghiles Ouali</h3>
                      <p className="text-sm text-primary font-medium mt-1">Full‑Stack Developer • Security Enthusiast</p>
                      <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">I build secure, scalable web applications and enjoy turning complex problems into elegant solutions. Currently studying at <span className="text-primary font-semibold">ESTIN</span> and working on projects that intersect web development and cybersecurity.</p>
                    </div>

                    <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                      <div className="relative pl-8 border-l-2 border-primary/20">
                        <Code2 className="absolute -left-3 top-1 w-5 h-5 text-primary bg-background rounded-full p-0.5" />
                        <p className="text-foreground/90">I'm a passionate software developer with a strong focus on cybersecurity and modern web technologies. I combine academic knowledge with practical experience to build secure, efficient applications.</p>
                      </div>

                      <div className="relative pl-8 border-l-2 border-primary/20">
                        <Shield className="absolute -left-3 top-1 w-5 h-5 text-primary bg-background rounded-full p-0.5" />
                        <p className="text-foreground/90">I work with frameworks and tools like Swift, Django and React for full-stack projects. My interests include API development, database architecture and security engineering.</p>
                      </div>

                      <div className="relative pl-8 border-l-2 border-primary/20">
                        <Rocket className="absolute -left-3 top-1 w-5 h-5 text-primary bg-background rounded-full p-0.5" />
                        <p className="text-foreground/90">Outside of coding, I explore cybersecurity trends, contribute to open-source projects, and focus on writing clean, maintainable code that delivers great user experiences.</p>
                      </div>
                    </div>

                    {/* Stats or highlights */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                      <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent mb-1">ESTIN</div>
                        <div className="text-sm text-muted-foreground">Student</div>
                      </div>

                      <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent mb-1">Full‑Stack</div>
                        <div className="text-sm text-muted-foreground">Developer</div>
                      </div>

                      <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent mb-1">Security</div>
                        <div className="text-sm text-muted-foreground">Focused</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}