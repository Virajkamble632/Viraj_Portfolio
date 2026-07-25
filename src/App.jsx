import { lazy, Suspense, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Education from './components/Education/Education'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Activities from './components/Activities/Activities'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ScrollProgress from './components/Navbar/ScrollProgress'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background text-text font-sans">
      <ScrollProgress />
      {isLoading ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col items-center gap-4"
          >
            <div className="h-20 w-20 rounded-full border border-primary/30 bg-gradient-to-br from-primary/20 to-secondary/20 shadow-soft backdrop-blur-xl" />
            <div className="text-center text-sm uppercase tracking-[0.34em] text-textSecondary">Loading portfolio…</div>
          </motion.div>
        </div>
      ) : null}

      <div className={isLoading ? 'pointer-events-none opacity-50' : ''}>
        <Navbar />
        <main className="relative overflow-hidden">
          <Hero />
          <About />
          <Education />
          <Experience />
          <Skills />
          <Projects />
          <Activities />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
