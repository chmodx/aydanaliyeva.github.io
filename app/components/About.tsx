"use client"

import { motion } from "framer-motion"
import { Palette, Feather, Eye, Sparkles } from "lucide-react"
import Image from "next/image"

export default function About() {
  const artisticFocus = [
    {
      icon: <Palette className="w-8 h-8 text-blue-500" />,
      title: "Mixed Media",
      description: "Blending various materials and techniques",
    },
    {
      icon: <Feather className="w-8 h-8 text-green-500" />,
      title: "Expressionism",
      description: "Conveying emotions and inner experiences",
    },
    {
      icon: <Eye className="w-8 h-8 text-purple-500" />,
      title: "Cultural Narratives",
      description: "Exploring personal and societal stories",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-yellow-500" />,
      title: "Nature & Shamanism",
      description: "Connecting with spiritual and natural elements",
    },
  ]

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              As a passionate visual artist, I explore the intricate connections between nature, human experiences, and
              cultural narratives. My work is a journey through the realms of expressionism, blending various media to
              create pieces that resonate with both personal and universal themes.
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Drawing inspiration from shamanic traditions and the natural world, I strive to create art that not only
              captivates the eye but also stirs the soul. Each piece is a window into a world where reality and
              imagination intertwine, inviting viewers to explore their own connections to the themes I present.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2 grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {artisticFocus.map((focus, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                {focus.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2 dark:text-white">{focus.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{focus.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}

