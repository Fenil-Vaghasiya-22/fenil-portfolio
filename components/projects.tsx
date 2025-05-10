"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Operating-System-Scheduler-Simulator",
    description: "Developed a web-based application using HTML, CSS, and Javascript to simulate various scheduling algorithms commonly used in operating systems. Implemented algorithms such as First Come First Serve (FCFS), Shortest Job First (SJF), Round Robin (RR),Shortest Remaining Time Next (SRTN) and Priority Scheduling.",
    image: "/image4.png",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://schedulingal.netlify.app",
    sourceUrl: "https://github.com/Fenil-Vaghasiya-22/Operating-System-Scheduler-Simulator",
  },
  {
    title: "Smart Crop Prediction",
    description:
      "Created a machine learning-based web app that predicts the most suitable crop to grow based on soil and environmental conditions like nitrogen, phosphorus, potassium, temperature, humidity, pH, and rainfall. Built with Python, Flask, and scikit-learn and deployed using Render.",
    image: "/crop-predict.png", 
    tech: ["Python", "Flask", "scikit-learn", "HTML", "CSS"],
    liveUrl: "https://smart-crop-prediction-ejcu.onrender.com", 
    sourceUrl: "https://github.com/Fenil-Vaghasiya-22/Smart-Crop-Prediction",
  },
]

export default function Projects() {
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
    <section id="projects" className="section-padding bg-muted/30 py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          My Projects
        </motion.h2>
        <motion.p variants={itemVariants} className="section-subtitle">
          Here are some of my recent projects that showcase my skills and experience
        </motion.p>

        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="h-full"
            >
              <Card className="h-full overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <div className="overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500"
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" /> Source
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
