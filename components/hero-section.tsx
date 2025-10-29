import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-purple-500/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      </div>

      {/* Floating animated orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-3xl animate-float opacity-60" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-primary/15 to-blue-500/15 rounded-full blur-3xl animate-float opacity-50"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-tr from-purple-500/10 to-primary/10 rounded-full blur-3xl animate-float opacity-40"
        style={{ animationDelay: "4s" }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile image with glow effect */}
          <div className="mb-8 inline-block relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary via-purple-500 to-primary rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse" />
            <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-primary via-purple-500 to-primary flex items-center justify-center text-4xl font-bold border-4 border-background shadow-2xl group-hover:scale-110 transition-transform duration-500">
              GO
              <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-primary animate-pulse" />
            </div>
          </div>

          {/* Greeting badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6 hover:scale-105 transition-transform duration-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium">Available for opportunities</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Ghiles Ouali
            </span>
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground/90 mb-4 tracking-tight">
            Software Developer & Cybersecurity Enthusiast
          </p>

          <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty leading-relaxed">
            Building secure, scalable applications with modern technologies. Passionate about creating elegant solutions
            to complex problems.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button asChild size="lg" className="group relative overflow-hidden bg-gradient-to-r from-primary to-purple-600 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300">
              <Link href="#contact">
                <span className="relative z-10">Get In Touch</span>
                <Mail className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="group border-2 hover:border-primary hover:bg-primary/5 transition-all duration-300">
              <Link href="#projects">
                <span>View Projects</span>
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Social links with hover effects */}
          <div className="flex items-center justify-center gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              className="group relative p-3 rounded-full bg-background/50 border border-border hover:border-primary backdrop-blur-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
            >
              <Github className="h-5 w-5" />
              <span className="absolute -inset-1 bg-primary/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="group relative p-3 rounded-full bg-background/50 border border-border hover:border-primary backdrop-blur-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
            >
              <Linkedin className="h-5 w-5" />
              <span className="absolute -inset-1 bg-primary/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </Link>
            <Link
              href="mailto:ghiles@example.com"
              className="group relative p-3 rounded-full bg-background/50 border border-border hover:border-primary backdrop-blur-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
            >
              <Mail className="h-5 w-5" />
              <span className="absolute -inset-1 bg-primary/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <Link
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 group"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
          <div className="relative">
            <ArrowDown className="h-6 w-6 animate-bounce" />
            <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </Link>
    </section>
  )
}