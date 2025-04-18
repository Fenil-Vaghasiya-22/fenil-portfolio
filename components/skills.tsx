"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skills = [
  "HTML5/CSS3",
  "JavaScript ",
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "Python",
  "REST APIs",
  "JWT Authentication",
  "MongoDB",
  "MySQL",
  "Firebase",
  "Git & GitHub",
  "AWS",
  "Figma",
  "C",
  "C++",
  "Java",
  "SQL",
  "Tableau",
]

export default function Skills() {
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
    <section id="skills" className="section-padding py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          My Skills
        </motion.h2>
        <motion.p variants={itemVariants} className="section-subtitle">
          Here are the technologies and tools I work with
        </motion.p>

        <motion.div variants={itemVariants} className="mt-12">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-2 justify-center">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1 text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}
