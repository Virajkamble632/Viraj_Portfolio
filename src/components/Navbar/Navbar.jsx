import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { motion } from 'framer-motion'

const navigation = [
  { label: 'Home', target: 'home' },
  { label: 'About', target: 'about' },
  { label: 'Education', target: 'education' },
  { label: 'Experience', target: 'experience' },
  { label: 'Skills', target: 'skills' },
  { label: 'Projects', target: 'projects' },
  { label: 'Extracurricular', target: 'activities' },
  { label: 'Contact', target: 'contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map((item) => document.getElementById(item.target))
      const offset = window.scrollY + 180

      const current = sections.reduce((closestSection, section) => {
        if (!section) return closestSection
        if (section.offsetTop <= offset) {
          return section
        }
        return closestSection
      }, null)

      setActive(current?.id ?? 'home')
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (target) => {
    const section = document.getElementById(target)

    if (!section) return

    const headerOffset = 88
    const elementPosition = section.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - headerOffset

    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
  }

  const handleNavigate = (event, target) => {
    event.preventDefault()
    scrollToSection(target)
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-primary/10 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex-1 lg:flex-none" />
        <a
          href="#home"
          onClick={(event) => handleNavigate(event, 'home')}
          className="flex-1 text-center text-lg font-semibold uppercase tracking-[0.18em] text-text lg:flex-none lg:text-left"
        >
          Portfolio
        </a>
        <div className="flex-1 lg:flex-none" />
        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.target}
              href={`#${item.target}`}
              onClick={(event) => handleNavigate(event, item.target)}
              className={`rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                active === item.target
                  ? 'bg-primary/15 text-primary'
                  : 'text-textSecondary hover:bg-primary/10 hover:text-text'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        {/* <button
          type="button"
          aria-label="Toggle mobile menu"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-surface/70 text-text transition hover:border-primary/40 hover:text-primary lg:hidden"
        >
          {isOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
        </button> */}
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden lg:hidden"
      >
        <div className="space-y-2 border-t border-primary/10 bg-surface/95 px-6 py-5 backdrop-blur-xl">
          {navigation.map((item) => (
            <a
              key={item.target}
              href={`#${item.target}`}
              onClick={(event) => handleNavigate(event, item.target)}
              className={`block rounded-2xl px-4 py-3 text-sm transition ${
                active === item.target ? 'bg-primary/10 text-primary' : 'text-textSecondary hover:bg-primary/10 hover:text-text'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </motion.div>
    </header>
  )
}

export default Navbar
