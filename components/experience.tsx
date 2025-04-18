"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap } from "lucide-react"

const experiences = [
  {
    title: "B.Tech Computer Science & Engineering",
    company: "Nirma University",
    period: "2022 - Present",
    description:
      "Currently pursuing a comprehensive curriculum in core computer science subjects including Data Structures, Algorithms, Operating Systems, Computer Networks, Databases, and Software Engineering. ",
    type: "education",
    skills: ["Data Structures & Algorithms", "Machine Learning", "Databases", "Web Development","OOP","Computer Networks","Operating Systems","Software Engineering","Cloud Computing","UI/UX","Data Analytics & Visualization"],
  },
  {
    title: "Minor Degree : Accounting and Finance",
    company: "Nirma University",
    period: "2024 - Present",
    description: "Gained foundational knowledge in financial principles, accounting practices, and personal wealth strategies. Developed skills in financial analysis, budgeting, cost control, and investment planning.",
    type: "education",
    skills: [" Introduction to Accounting", "Cost and Management Accounting", "Fundamentals of Finance", "Personal Wealth Management"],
  },
  {
    title: "H.S.C & S.S.C",
    company: "Sahajanand Vidyalaya",
    period: "2019 - 2022",
    description:
      "Completed foundational education with a strong academic performance across core subjects.",
    type: "education",
    skills: [""],
  },
]

export default function Experience() {
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
    <section id="experience" className="section-padding bg-muted/30 py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          Experience & Education
        </motion.h2>
        <motion.p variants={itemVariants} className="section-subtitle">
          My professional journey and educational background
        </motion.p>

        <div className="relative mt-12 max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative mb-12 md:w-1/2 ${index % 2 === 0 ? "md:pr-8 md:ml-auto" : "md:pl-8"}`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-6 w-4 h-4 rounded-full bg-primary z-10 ${
                  index % 2 === 0 ? "left-0 md:-left-2" : "left-0 md:-left-2"
                }`}
              />

              <Card className="border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <CardHeader className="pb-2">
                  <div className="flex items-center mb-1">
                    {exp.type === "work" ? (
                      <Briefcase className="h-4 w-4 mr-2 text-primary" />
                    ) : (
                      <GraduationCap className="h-4 w-4 mr-2 text-primary" />
                    )}
                    <Badge variant="outline">{exp.period}</Badge>
                  </div>
                  <CardTitle className="text-xl">{exp.title}</CardTitle>
                  <CardDescription className="text-base font-medium">{exp.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
