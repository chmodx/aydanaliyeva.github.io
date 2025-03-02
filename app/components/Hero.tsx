"use client"

import Image from "next/image"
import { Instagram, Mail, Phone, ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const artworks = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AsP2g5qbHIl1gbXDohDybak9PDNXty.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p4oz6l6I2GvNppt0hT3O85KPxZXYjx.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-13eaQnsesUQNFEyIudRV6WyujNesg3.png",
]

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % artworks.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900"
    >
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 leading-tight"
              style={{ letterSpacing: "-0.025em" }}
            >
              Aydan Aliyeva
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300">Visual Artist</h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
              Hi, I'm Aydan Aliyeva, a visual artist exploring themes of nature, shamanism, and human connection through
              mixed media. My works often blend expressionist techniques with personal and cultural narratives.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4 mb-8">
              <a
                href="https://www.instagram.com/aydan_gome/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="mailto:aydan.a.ali@gmail.com"
                className="p-3 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="Email Contact"
              >
                <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="tel:+994519806637"
                className="p-3 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="Phone Contact"
              >
                <Phone className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
            </div>
            <motion.button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Work
              <ArrowDown className="w-4 h-4" />
            </motion.button>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600 rounded-3xl transform rotate-6 opacity-50"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 dark:from-purple-600 dark:to-blue-600 rounded-3xl transform -rotate-6 opacity-50"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-black/20 z-10"></div>
                {artworks.map((src, index) => (
                  <Image
                    key={index}
                    src={src || "/placeholder.svg"}
                    alt={`Artwork ${index + 1}`}
                    fill
                    className={`object-cover transition-opacity duration-1000 ${
                      index === currentImage ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="w-1 h-12 bg-gradient-to-b from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full animate-pulse"></div>
      </motion.div>
    </section>
  )
}

