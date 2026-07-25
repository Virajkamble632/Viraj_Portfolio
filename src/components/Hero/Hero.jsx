import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import profilePic from '../../assets/viraj.png'

const socialLinks = [
  { icon: FaGithub, label: 'GitHub', url: 'https://github.com/Virajkamble632' },
  { icon: FaLinkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/virajkamble0706/' },
  { icon: FaEnvelope, label: 'Email', url: 'mailto:virajkamble0706@gmail.com' },
]

const Hero = () => (
  <section id="home" className="relative overflow-hidden bg-white px-4 pb-20 pt-20 sm:px-6 sm:pt-24 lg:px-10">
    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.99),rgba(239,246,255,0.9),rgba(224,242,254,0.85))]" />
    <div className="absolute inset-0 pointer-events-none z-0">
      <div className="hero-scan absolute left-[-12%] top-[18%] h-40 w-[125%] rounded-full blur-3xl" />
    </div>
    <div className="absolute left-[-4rem] top-16 h-44 w-44 rounded-full bg-sky-400/10 blur-3xl" />
    <div className="absolute right-[-3rem] top-28 h-32 w-32 rounded-full bg-cyan-300/20 blur-3xl" />
    <div className="absolute right-0 top-[50%] h-28 w-28 rounded-full border border-sky-900/10 bg-white/70 blur-xl" />
    <div className="relative z-10 mx-auto max-w-7xl">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="space-y-8"
        >
          <div className="max-w-2xl space-y-4">
            <p className="text-sm uppercase tracking-[0.4em] text-primary">
              Hi, I’m <span className="transition-colors duration-300 hover:text-secondary">Viraj Kamble</span>
            </p>
            <h1 className="text-4xl font-semibold leading-[1.05] text-text sm:text-5xl lg:text-6xl">
              Full Stack Web Developer building MERN applications.
            </h1>
            <p className="max-w-xl text-base text-textSecondary sm:text-lg">
              I build responsive MERN apps with secure APIs, real-time features, and reusable UI components.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#contact" className="inline-flex w-full items-center justify-center rounded-full border border-sky-900/10 bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-sky-500 sm:w-auto">
              GET IN TOUCH
            </a>
            <a
              href="#about"
              className="inline-flex w-full items-center justify-center rounded-full border border-sky-900/10 bg-white/80 px-6 py-3 text-sm font-semibold text-sky-950 transition duration-300 hover:-translate-y-0.5 hover:border-sky-900/20 hover:text-sky-700 sm:w-auto"
            >
              LEARN MORE ABOUT ME
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
            {socialLinks.map((item) => (
              <motion.a
                key={item.label}
                whileHover={{ y: -3 }}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-sky-900/10 bg-white/80 text-sky-950 transition hover:border-cyan-400 hover:text-cyan-700"
                aria-label={item.label}
              >
                <item.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative mx-auto max-w-md"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-sky-900/10 bg-white/80 p-8 shadow-soft backdrop-blur-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.16),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_35%)]" />
            <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-sky-400/15 blur-3xl" />
            <div className="absolute -right-6 bottom-6 h-28 w-28 rounded-full bg-cyan-300/20 blur-3xl" />
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-transparent via-sky-100/70 to-transparent opacity-70 blur-2xl" />
            <div className="absolute left-[-20%] top-[10%] h-40 w-[140%] rounded-full border border-sky-200/40" />
            <div className="absolute left-[10%] top-[20%] h-20 w-[80%] rounded-full border border-sky-100/60" />
            <div className="absolute bottom-[-10%] left-[-10%] h-28 w-[120%] rounded-full border border-sky-100/50" />
            <div className="relative rounded-[1.75rem] border border-sky-900/10 bg-gradient-to-br from-white/80 to-sky-50/80 p-6">
              <div className="flex h-full flex-col items-center justify-center rounded-[1.5rem] bg-white/85 p-6 text-center shadow-soft">
                <img src={profilePic} alt="Viraj Kamble" className="mb-6 h-48 w-48 rounded-full object-cover border border-white/10 shadow-xl sm:h-56 sm:w-56" />
                <h2 className="text-2xl font-semibold text-text">Viraj Kamble</h2>
                <p className="text-sm text-textSecondary">MERN Stack Web Developer</p>
                <p className="mt-4 text-sm leading-6 text-textSecondary">
                  Building responsive, maintainable applications with React, Node.js, Express, MongoDB, and Tailwind CSS.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
)

export default Hero
