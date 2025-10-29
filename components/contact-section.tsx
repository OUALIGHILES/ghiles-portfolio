"use client"

import type React from "react"

import { useState } from "react"
import { toast } from "sonner"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Linkedin, Github, Send, Sparkles, MessageCircle, Phone } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/40 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.15),transparent_70%)]" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div 
        className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6">
            <MessageCircle className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium">Let's connect</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full mb-6" />
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="relative p-8 bg-background/80 backdrop-blur-xl border-border/50 hover:border-primary/50 transition-all duration-500 group overflow-hidden">
            {/* Gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Animated border gradient */}
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-[-1px] bg-gradient-to-br from-primary to-purple-500 rounded-lg blur-sm opacity-30" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-primary to-purple-500 rounded-lg">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Send me a message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-foreground font-medium mb-2 block">
                    Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background/50 border-border/50 focus:border-primary transition-all duration-300 text-foreground"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground font-medium mb-2 block">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background/50 border-border/50 focus:border-primary transition-all duration-300 text-foreground"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground font-medium mb-2 block">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-32 bg-background/50 border-border/50 focus:border-primary transition-all duration-300 text-foreground resize-none"
                    required
                  />
                </div>

                <Button type="submit" className="w-full group relative overflow-hidden bg-gradient-to-r from-primary to-purple-600 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 text-base py-6">
                  <span className="relative z-10">Send Message</span>
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:rotate-12 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </form>
            </div>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card 
              className="relative p-6 bg-background/80 backdrop-blur-xl border-border/50 hover:border-primary/50 transition-all duration-500 group overflow-hidden hover:-translate-y-1 cursor-pointer"
              onClick={() => {
                window.location.href = 'mailto:g_ouali@estin.dz';
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  window.location.href = 'mailto:g_ouali@estin.dz';
                }
              }}
              aria-label="Envoyer un email"
            >
              {/* Gradient glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative p-3 bg-background/80 backdrop-blur-sm rounded-xl border border-border/50 group-hover:border-primary/50 transition-all duration-300">
                    <Mail className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">Email</h3>
                  <span className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    g_ouali@estin.dz
                  </span>
                </div>
              </div>
            </Card>

            <Card 
              className="relative p-6 bg-background/80 backdrop-blur-xl border-border/50 hover:border-primary/50 transition-all duration-500 group overflow-hidden hover:-translate-y-1 cursor-pointer"
              onClick={() => window.open('https://www.linkedin.com/in/OUALIGHILES/', '_blank')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  window.open('https://www.linkedin.com/in/OUALIGHILES/', '_blank');
                }
              }}
              aria-label="Visiter mon profil LinkedIn"
            >
              {/* Gradient glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative p-3 bg-background/80 backdrop-blur-sm rounded-xl border border-border/50 group-hover:border-primary/50 transition-all duration-300">
                    <Linkedin className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">LinkedIn</h3>
                  <span className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    linkedin.com/in/OUALIGHILES
                  </span>
                </div>
              </div>
            </Card>

            <Card 
              className="relative p-6 bg-background/80 backdrop-blur-xl border-border/50 hover:border-primary/50 transition-all duration-500 group overflow-hidden hover:-translate-y-1 cursor-pointer"
              onClick={() => window.open('https://github.com/OUALIGHILES', '_blank')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  window.open('https://github.com/OUALIGHILESi', '_blank');
                }
              }}
              aria-label="Visiter mon profil GitHub"
            >
              {/* Gradient glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative p-3 bg-background/80 backdrop-blur-sm rounded-xl border border-border/50 group-hover:border-primary/50 transition-all duration-300">
                    <Github className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">GitHub</h3>
                  <span className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    github.com/OUALIGHILES
                  </span>
                </div>
              </div>
            </Card>

            {/* WhatsApp Card */}
            <Card 
              className="relative p-6 bg-background/80 backdrop-blur-xl border-border/50 hover:border-primary/50 transition-all duration-500 group overflow-hidden hover:-translate-y-1 cursor-pointer"
              onClick={() => window.open('https://wa.me/213672810933', '_blank')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  window.open('https://wa.me/213672810933', '_blank');
                }
              }}
              aria-label="Me contacter sur WhatsApp"
            >
              {/* Gradient glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative p-3 bg-background/80 backdrop-blur-sm rounded-xl border border-border/50 group-hover:border-primary/50 transition-all duration-300">
                    <svg viewBox="0 0 24 24" className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300 fill-current">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">WhatsApp</h3>
                  <span className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    +213 672 810 933
                  </span>
                </div>
              </div>
            </Card>

            {/* Call to action card */}
            <div className="relative p-6 bg-gradient-to-br from-primary/20 to-purple-500/20 backdrop-blur-xl rounded-2xl border border-primary/30 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.2),transparent_70%)]" />
              <div className="relative z-10 text-center">
                <Sparkles className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-bold text-foreground mb-2">Let's build something amazing together!</h4>
                <p className="text-sm text-muted-foreground">I'm always excited to work on new projects and ideas.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border/50 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="text-muted-foreground">
              <p className="text-sm">© 2025 Ghiles Ouali. Built with <span className="text-primary font-semibold">Next.js</span> and <span className="text-primary font-semibold">Tailwind CSS</span>.</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground/60">
              <span>Made with</span>
              <span className="text-red-500 animate-pulse">❤️</span>
              <span>in Algeria</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}