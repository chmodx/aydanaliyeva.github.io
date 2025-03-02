import Hero from "./components/Hero"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Skills from "./components/Skills"
import Achievements from "./components/Achievements"
import Education from "./components/Education"
import Contact from "./components/Contact"
import FloatingNav from "./components/floating-nav"

export default function Home() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <FloatingNav />
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Achievements />
      <Education />
      <Contact />
    </main>
  )
}

