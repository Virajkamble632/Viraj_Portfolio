import { motion } from 'framer-motion'
import { FaBriefcase, FaLightbulb, FaRocket } from 'react-icons/fa'

// const stats = [
//   { label: 'Projects Completed', value: '18+' },
//   { label: 'Technologies Learned', value: '14+' },
//   { label: 'Internship Experience', value: '2+' },
// ]

const facts = [
  { title: 'Industry Focus', description: 'Web Applications, SaaS platforms, and UI systems' },
  { title: 'Favorite Stack', description: 'React, Node.js, Express, MongoDB' },
  { title: 'Approach', description: 'Driven by clarity, speed, and polished interaction design' },
]

const About = () => (
  <section id="about" className="relative px-4 py-20 sm:px-6 sm:py-24 lg:px-10">
    <div className="mx-auto max-w-7xl">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-14 max-w-2xl">
        <span className="text-sm uppercase tracking-[0.4em] text-primary">About Me</span>
        <h2 className="mt-4 text-3xl font-semibold text-text sm:text-4xl">Full Stack Web Developer with MERN expertise.</h2>
      </motion.div>

      <div className="grid gap-10 lg:grid-cols-[1.4fr_0.9fr] lg:items-start">
        <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-6 rounded-[2rem] border border-white/10 bg-surface/80 p-8 shadow-soft backdrop-blur-xl">
          <p className="text-base leading-8 text-textSecondary">
            Full Stack Web Developer with hands-on experience building responsive, scalable web applications on the MERN stack. Skilled in REST API design, JWT authentication, real-time communication systems, and reusable UI component architecture.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <FaBriefcase className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold text-text">Industry Focus</h3>
              <p className="mt-2 text-sm text-textSecondary">Healthcare management, admin platforms, and responsive web applications.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                <FaLightbulb className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold text-text">Technology Stack</h3>
              <p className="mt-2 text-sm text-textSecondary">React, Node.js, Express, MongoDB, Tailwind CSS, WebRTC, Socket.io.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <FaRocket className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold text-text">Approach</h3>
              <p className="mt-2 text-sm text-textSecondary">Building reusable UI components and secure backend systems for reliable user experiences.</p>
            </div>
          </div>
        </motion.div>

        {/* <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="grid gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-[2rem] border border-white/10 bg-card p-6 shadow-soft backdrop-blur-xl">
              <p className="text-3xl font-semibold text-text">{stat.value}</p>
              <p className="mt-2 text-sm text-textSecondary">{stat.label}</p>
            </div>
          ))}
        </motion.div> */}
      </div>

      <div className="mt-16 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {facts.map((item) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[2rem] border border-white/10 bg-surface/80 p-6 shadow-soft backdrop-blur-xl"
          >
            <h3 className="text-lg font-semibold text-text">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-textSecondary">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
)

export default About
