"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"

export default function Contact() {
  const { toast } = useToast()

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
    <section id="contact" className="section-padding py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="section-title text-center">
          Get In Touch
        </motion.h2>
        <motion.p variants={itemVariants} className="section-subtitle text-center max-w-xl mx-auto">
          Have a project in mind or want to chat? Feel free to reach out!
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mt-12 max-w-2xl mx-auto">
          <motion.div variants={itemVariants}>
            <Card className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <a
                        href="mailto:fenilvaghasiya22@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        fenilvaghasiya22@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <a href="tel:+917226017188" className="text-muted-foreground hover:text-primary transition-colors">
                        +91 7226017188
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-muted-foreground">Ahmedabad, Gujarat, India</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/fenil-vaghasiya-050a07267/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-muted p-3 rounded-full hover:bg-primary/10 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/Fenil-Vaghasiya-22"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-muted p-3 rounded-full hover:bg-primary/10 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
