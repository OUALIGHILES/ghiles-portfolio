"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-background/95 backdrop-blur-xl border-b border-primary/20 shadow-lg shadow-primary/10" 
          : "bg-background/40 backdrop-blur-md border-b border-primary/10"
      } before:absolute before:inset-0 before:z-[-1] before:bg-gradient-to-r before:from-primary/10 before:via-transparent before:to-primary/10 before:opacity-100`}
    >
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo with gradient effect */}
          <Link 
            href="#hero" 
            className="group relative text-2xl font-bold bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent hover:scale-105 transition-all duration-300"
          >
            Ghiles Ouali
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary/30 via-purple-500/30 to-primary/30"></span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary via-purple-500 to-primary transition-all duration-300 group-hover:w-full"></span>
            <span className="absolute -inset-x-2 -inset-y-1 border border-primary/10 rounded-lg"></span>
            <span className="absolute -inset-x-2 -inset-y-1 border border-primary/0 rounded-lg group-hover:border-primary/30 transition-colors duration-300"></span>
          </Link>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center gap-1 backdrop-blur-md rounded-full px-2 py-2 border shadow-lg transition-all duration-500 ${
            scrolled
              ? "bg-background/70 border-primary/30 shadow-primary/10"
              : "bg-background/60 border-primary/20 shadow-primary/5"
          }`}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-5 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-all duration-300 rounded-full hover:bg-primary/10 group overflow-hidden"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary/40 via-purple-500/40 to-primary/40"></span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary via-purple-500 to-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                <span className="absolute inset-0 rounded-full border border-primary/10 group-hover:border-primary/30 transition-colors duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            mobileMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className={`flex flex-col gap-2 py-4 px-2 backdrop-blur-xl rounded-2xl border shadow-lg transition-all duration-500 ${
            scrolled
              ? "bg-background/90 border-primary/30 shadow-primary/15"
              : "bg-background/80 border-primary/20 shadow-primary/10"
          }`}>
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="group relative px-6 py-3 text-sm font-medium text-foreground/80 hover:text-foreground transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute inset-0 border-l-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent rounded-xl"></span>
                <span className="absolute inset-0 border-l-2 border-primary opacity-0 bg-gradient-to-r from-primary/20 to-transparent rounded-xl group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1/3 bg-primary rounded-full opacity-30"></span>
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-primary rounded-full opacity-100 group-hover:h-2/3 transition-all duration-300"></span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}