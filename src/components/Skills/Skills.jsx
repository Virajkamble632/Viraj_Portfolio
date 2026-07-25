import { motion } from 'framer-motion'
import { FaCode, FaDatabase, FaCloud, FaTools } from 'react-icons/fa'
import { SiReact, SiNodedotjs, SiMongodb, SiJavascript, SiTailwindcss, SiGit, SiDocker } from 'react-icons/si'

const skillCategories = [
  {
    title: 'Languages',
    icon: SiJavascript,
    items: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frontend',
    icon: FaCode,
    items: ['React.js', 'Redux', 'Tailwind CSS', 'React Router', 'Bootstrap', 'Material UI'],
  },
  {
    title: 'Backend',
    icon: SiNodedotjs,
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'Socket.io', 'WebRTC'],
  },
  {
    title: 'Databases',
    icon: FaDatabase,
    items: ['MongoDB', 'Mongoose'],
  },
  {
    title: 'Tools',
    icon: FaTools,
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Thunder Client', 'Render'],
  },
]

const Skills = () => (
  <section id="skills" className="relative px-4 py-20 sm:px-6 sm:py-24 lg:px-10">
    <div className="mx-auto max-w-7xl">
      <div className="mb-14 max-w-2xl">
        <span className="text-sm uppercase tracking-[0.4em] text-primary">Skills</span>
        <h2 className="mt-4 text-3xl font-semibold text-text sm:text-4xl">Core capabilities and technical strengths.</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((category, index) => (
          <motion.article
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
            className="rounded-[2rem] border border-white/10 bg-surface/80 p-7 shadow-soft backdrop-blur-xl"
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                <category.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-text">{category.title}</h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-3 text-sm">
              {category.items.map((skill) => (
                <span key={skill} className="rounded-full bg-white/10 px-4 py-2 text-textSecondary">
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
)

export default Skills
