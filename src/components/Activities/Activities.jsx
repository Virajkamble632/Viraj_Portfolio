import { motion } from 'framer-motion'
import { FaUsers, FaTrophy, FaCertificate, FaHandsHelping, FaBrain, FaChalkboardTeacher } from 'react-icons/fa'

const activities = [
  {
    title: 'Mumbai Hacks',
    description: 'Participated in a high-impact hackathon, collaborating on a time-constrained build with a cross-functional team.',
    icon: FaTrophy,
  },
  {
    title: 'Web Dev Certification',
    description: 'Completed a full-stack web development course covering MERN fundamentals, modern tooling, and deployment workflows.',
    icon: FaCertificate,
  },
  {
    title: 'Engineering Workshop',
    description: 'Attended hands-on engineering and developer workshops focused on emerging technologies.',
    icon: FaBrain,
  },
  {
    title: 'GDG Workshop',
    description: 'Joined Google Developer Group events to learn modern web and cloud development best practices.',
    icon: FaChalkboardTeacher,
  },
]

const Activities = () => (
  <section id="activities" className="relative px-4 py-20 sm:px-6 sm:py-24 lg:px-10">
    <div className="mx-auto max-w-7xl">
      <div className="mb-14 max-w-2xl">
        <span className="text-sm uppercase tracking-[0.4em] text-primary">Extracurricular</span>
        <h2 className="mt-4 text-3xl font-semibold text-text sm:text-4xl">Meaningful activities beyond the codebase.</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {activities.map((activity, index) => (
          <motion.article
            key={activity.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
            className="group rounded-[2rem] border border-white/10 bg-surface/80 p-7 shadow-soft backdrop-blur-xl transition hover:-translate-y-1 hover:border-accent/30"
          >
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-accent/10 text-accent">
              <activity.icon className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-semibold text-text">{activity.title}</h3>
            <p className="mt-3 text-sm leading-7 text-textSecondary">{activity.description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
)

export default Activities
