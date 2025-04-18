"use client"

import { useState, useEffect } from "react"
import { ModeToggle } from "./mode-toggle"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      // Find the active section based on scroll position
      const sections = navItems.map((item) => item.name.toLowerCase())
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (!element) return false

        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold">
          <span className="text-primary">Fenil</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                activeSection === item.name.toLowerCase()
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground",
              )}
              onClick={(e) => {
                e.preventDefault()
                document.querySelector(item.href)?.scrollIntoView({
                  behavior: "smooth",
                })
              }}
            >
              {item.name}
            </a>
          ))}
          <div className="ml-4">
            <ModeToggle />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <ModeToggle />
          <Button variant="ghost" size="icon" className="ml-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md"
          >
            <nav className="flex flex-col px-4 py-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-3 py-3 rounded-md text-sm font-medium transition-colors",
                    activeSection === item.name.toLowerCase()
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector(item.href)?.scrollIntoView({
                      behavior: "smooth",
                    })
                    setMobileMenuOpen(false)
                  }}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
