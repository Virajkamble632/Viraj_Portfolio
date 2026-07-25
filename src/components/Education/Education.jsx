import { motion } from 'framer-motion'

const educationItems = [
  {
    title: 'Bachelor of Technology in Electronics & Computer Science',
    institution: 'Pillai College of Engineering',
    board: 'University of Mumbai',
    year: '2022 - 2026',
    // score: 'CGPA: 6.9',
    description: 'Focused on full-stack web development, MERN stack applications, and project-based software engineering.',
  },
  {
    title: 'Higher Secondary Certificate',
    institution: 'Karmaveer Bhaurao Patil College, Vashi',
    board: 'Maharashtra State Board',
    year: '2022',
    // score: '54%',
    description: 'Completed advanced coursework in mathematics, physics, and computer science with practical coding assignments.',
  },
  {
    title: 'Secondary School Certificate',
    institution: 'IES Navi Mumbai High School, Vashi',
    board: 'Maharashtra State Board',
    year: '2020',
    // score: '73.40%',
    description: 'Built strong analytical foundations across science and mathematics during early technical education.',
  },
]

const Education = () => (
  <section id="education" className="relative px-4 py-20 sm:px-6 sm:py-24 lg:px-10">
    <div className="mx-auto max-w-7xl">
      <div className="mb-14 max-w-2xl">
        <span className="text-sm uppercase tracking-[0.4em] text-primary">Education</span>
        <h2 className="mt-4 text-3xl font-semibold text-text sm:text-4xl">A modern timeline of academic milestones.</h2>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1 bg-primary/20 lg:block" />
        {educationItems.map((item, index) => {
          const isEven = index % 2 === 0
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: isEven ? -70 : 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`relative mb-16 lg:flex lg:items-start ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}
            >
              <div className={`w-full lg:w-[45%] ${isEven ? 'lg:mr-auto lg:text-right' : 'lg:ml-auto lg:text-left'}`}>
                <article className="rounded-[2rem] border border-white/10 bg-surface/80 p-8 shadow-soft backdrop-blur-xl">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-wrap items-center justify-between gap-3 text-textSecondary lg:justify-end">
                      <span className="text-sm uppercase tracking-[0.3em] text-primary">{item.year}</span>
                      <span className="h-1 w-1 rounded-full bg-white/20" />
                      <span className="text-sm">{item.score}</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-text">{item.title}</h3>
                    <p className="text-sm font-medium text-textSecondary">
                      {item.institution} · {item.board}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-textSecondary">{item.description}</p>
                  </div>
                </article>
              </div>

              <div className="absolute left-1/2 top-12 hidden h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-primary/40 bg-background text-primary lg:flex">
                {index + 1}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  </section>
)

export default Education
