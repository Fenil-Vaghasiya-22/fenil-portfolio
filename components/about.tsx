"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Coffee, Gamepad2, Headphones, Heart, Laptop, Plane, BookOpen, Camera, Palette, Github, Circle } from "lucide-react"

const techStack = [
  { name: "HTML5", icon: "html5" },
  { name: "CSS3", icon: "css3" },
  { name: "JavaScript", icon: "javascript" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Python", icon: "python" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "AWS", icon: "aws" },
  { name: "Git", icon: "git" },
]

const interests = [
  { name: "Coding", icon: <Code className="h-4 w-4 mr-1" /> },
  { name: "Photography", icon: <Camera className="h-4 w-4 mr-1" /> },
  { name: "Music", icon: <Headphones className="h-4 w-4 mr-1" /> },
  { name: "Fitness", icon: <Heart className="h-4 w-4 mr-1" /> },
  { name: "Gaming", icon: <Gamepad2 className="h-4 w-4 mr-1" /> },
  { name: "Travel", icon: <Plane className="h-4 w-4 mr-1" /> },
]

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="about" className="section-padding py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          About Me
        </motion.h2>
        <motion.p variants={itemVariants} className="section-subtitle">
          Get to know me a little better
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <motion.div variants={itemVariants}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-lg blur opacity-25"></div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <img src="/image.jpeg?height=500&width=500" alt="Fenil" className="w-full  object-cover" />
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">
              Hi there! I&apos;m <span className="text-primary">Fenil</span>
            </h3>
            <p className="text-muted-foreground mb-6">
            I'm a final year Computer Science student at Nirma University with a strong interest in  data analysis, machine learning, and web development. I enjoy building interactive, data-driven solutions and turning ideas into practical applications.
            </p>
            <p className="text-muted-foreground mb-6">
            I focus on writing clean, efficient code and continuously learning new technologies. I'm passionate about solving real-world problems through tech and collaborating on impactful projects.Currently, I’m actively looking for internship and job opportunities where I can apply my skills, gain industry experience, and grow as a person.
            </p>

            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <Badge key={tech.name} variant="outline" className="px-3 py-1">
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-3">Interests & Fun Facts</h4>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <Badge key={interest.name} className="px-3 py-1 flex items-center">
                      {interest.icon}
                      {interest.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
