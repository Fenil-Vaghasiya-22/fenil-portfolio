"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown, Download, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background dark:from-primary/5 dark:via-background dark:to-background -z-10" />

      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10 dark:bg-primary/5"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
        <motion.div
          className="flex-1 md:pr-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
            <h2 className="text-xl md:text-2xl font-medium text-primary mb-2">Hi, I&apos;m</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">Fenil Vaghasiya</h1>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.5 }}>
            <h3 className="text-xl md:text-2xl text-muted-foreground mb-6">Tech Enthusiast</h3>
          </motion.div>

          <motion.p
            className="text-muted-foreground max-w-md mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            I build exceptional digital experiences with modern technologies. Let&apos;s create something amazing
            together.
          </motion.p>

          <motion.div
            className="flex items-center gap-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <Link href="https://github.com/Fenil-Vaghasiya-22" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/fenil-vaghasiya-050a07267/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Button 
              size="lg" 
              className="rounded-full"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full"
              onClick={() => window.open('/22BCE366-Fenil Pankajbhai Vaghasiya.pdf', '_blank')}
            >
              Download Resume <Download className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-1 mt-12 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="relative w-full max-w-md mx-auto">
            <div className="aspect-square rounded-full bg-gradient-to-br from-primary via-purple-500 to-blue-500 p-1">
              <div className="rounded-full overflow-hidden bg-background aspect-square">
                <img
                  src="/image3.png?height=450&width=450"
                  alt="Fenil's avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-blue-500/20 dark:bg-blue-500/10"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-purple-500/20 dark:bg-purple-500/10"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
