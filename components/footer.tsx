"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowUp, Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-muted/30 py-12 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">
              <span className="text-primary">Fenil Vaghasiya</span>
            </h2>
            <p className="text-muted-foreground mt-2 max-w-md">
            I build exceptional digital experiences with modern technologies. Let&apos;s create something amazing
            together.
            </p>
          </div>

          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/Fenil-Vaghasiya-22" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/fenil-vaghasiya-050a07267/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>

          <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
            <Button variant="outline" size="icon" className="rounded-full" onClick={scrollToTop}>
              <ArrowUp className="h-5 w-5" />
              <span className="sr-only">Back to top</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
