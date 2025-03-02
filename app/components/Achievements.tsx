"use client"

import { motion } from "framer-motion"
import { Award, BookOpen, Users } from "lucide-react"
import Image from "next/image"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

const achievements = [
  {
    icon: <Award className="w-12 h-12 text-blue-500" />,
    title: "Winner of the Mobility Grant Program for Art Residency, 2024",
    description: "Recognized for artistic excellence and awarded a grant for an international art residency program.",
  },
  {
    icon: <BookOpen className="w-12 h-12 text-green-500" />,
    title: "Published in the local journal AzObserver, 2024",
    description: "Featured artist in a prominent local publication, showcasing recent works and artistic journey.",
  },
  {
    icon: <Users className="w-12 h-12 text-purple-500" />,
    title: "Winner and participant in ESN CreARTivity Training for Young Talents, 2024",
    description: "Selected for and successfully completed the Erasmus Student Network's program for emerging artists.",
  },
]

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-20 bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Achievements & Awards" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                {achievement.icon}
                <h3 className="text-xl font-semibold ml-4 dark:text-white">{achievement.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-64 h-64 -mt-32 -ml-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}

