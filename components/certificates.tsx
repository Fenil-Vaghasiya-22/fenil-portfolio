"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const certificates = [
  {
    title: "Participation in “Frontend Fury”",
    issuer: "CSI",
    date: "2024",
    description: "For participating in “Frontend Fury”: A part of CUBIX’24 conducted by The Computer Society of India, Nirma University",
    image: "/image5.png",
    credentialUrl: "/Frontend Fury-Vaghasiya Fenil Pankajbhai.pdf",
    skills: ["CSS"],
  },
  {
    "title": "Participation in \"Applications of Machine Learning and Deep Learning in Various Domains\"",
    "issuer": "Department of Computer Science and Engineering, Nirma University",
    "date": "August 12, 2024",
    "description": "For participating in the National Seminar under Fulbright Program on \"Applications of Machine Learning and Deep Learning in Various Domains\" organized by the Department of Computer Science and Engineering, Nirma University",
    "image": "/image6.png",
    "credentialUrl": "/c4ba0d11-48cc-4a91-b573-d819d73e770b (1).pdf",
    "skills": ["Machine Learning", "Deep Learning"]
},
]

export default function Certificates() {
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
    <section id="certificates" className="section-padding py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          Certificates
        </motion.h2>
        <motion.p variants={itemVariants} className="section-subtitle">
          Professional certifications and courses I've completed
        </motion.p>

        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="h-full"
            >
              <Card className="h-full overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <div className="overflow-hidden">
                  <motion.img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-48 object-cover transition-transform duration-500"
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
                <CardHeader>
                  <CardTitle>{certificate.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center justify-between">
                      <span>{certificate.issuer}</span>
                      <Badge variant="outline">{certificate.date}</Badge>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{certificate.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {certificate.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="sm" asChild className="w-full">
                    <a href={certificate.credentialUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" /> View Credential
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
