import { motion } from 'framer-motion'
import internshipCertificate from '../../assets/Internship_Certificate.jpeg'

const experiences = [
  {
    title: 'Full Stack Web Developer Intern',
    company: 'Codolog',
    period: 'Jan 2026 – May 2026',
    location: 'Remote',
    points: [
      'Developed a dynamic FAQ / Help Center with React and Tailwind CSS to reduce repetitive support queries.',
      'Built a protected admin panel with collapsible sidebar navigation and secure routing for internal workflows.',
      'Integrated REST APIs for real-time data handling across frontend modules, improving accuracy and update speed.',
      'Created reusable responsive UI components adopted across multiple pages to accelerate delivery and reduce duplication.',
    ],
    certificate: internshipCertificate,
  },
]

const Experience = () => (
  <section id="experience" className="relative px-4 py-20 sm:px-6 sm:py-24 lg:px-10">
    <div className="mx-auto max-w-7xl">
      <div className="mb-14 max-w-2xl">
        <span className="text-sm uppercase tracking-[0.4em] text-primary">Experience</span>
        <h2 className="mt-4 text-3xl font-semibold text-text sm:text-4xl">Professional experience and practical work.</h2>
      </div>

      <div className="grid gap-6">
        {experiences.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
            className="rounded-[2rem] border border-white/10 bg-surface/80 p-8 shadow-soft backdrop-blur-xl"
          >
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-text">{item.title}</h3>
                  <p className="text-sm font-medium text-textSecondary">
                    {item.company} · {item.location}
                  </p>
                </div>
                <span className="text-sm uppercase tracking-[0.3em] text-primary">{item.period}</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-textSecondary">
                {item.points.map((point) => (
                  <li key={point} className="list-disc pl-5 leading-7">
                    {point}
                  </li>
                ))}
              </ul>

              {item.certificate ? (
                <a
                  href={item.certificate}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center justify-center self-end rounded-full border border-sky-600/20 bg-sky-500/10 px-5 py-3 text-sm font-semibold text-sky-700 backdrop-blur-sm transition hover:bg-sky-500/20"
                >
                  View Internship Certificate
                </a>
              ) : null}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
)

export default Experience
