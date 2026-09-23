import { motion } from 'framer-motion'
import mediqueueImage from '../../assets/mediqueue.png'
import adminPageImage from '../../assets/clientflow.png'
import Reezo from '../../assets/reezo.png';

const projects = [
  {
    title: 'MediQueue',
    description: 'Healthcare appointment management system with patient, doctor, and admin roles.',
    features: ['Appointment booking', 'Prescription management', 'Admin doctor/patient controls'],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/Virajkamble632/mediqueue.git',
    demo: 'https://mediqueue-iyui.onrender.com/',
    image: mediqueueImage,
  },
  {
    title: 'Reezo',
    description: 'Real-time video communication app built with WebRTC and Socket.io for browser-based conferencing.',
    features: ['Mute/unmute', 'Camera toggle', 'Dynamic room creation'],
    stack: ['React', 'Node.js', 'WebRTC', 'Socket.io'],
    github: 'https://github.com/Virajkamble632/Reezo.git',
    demo: 'https://reezo-9si4.onrender.com',
    image: Reezo,
  },
  {
    title: 'Admin Navigation Panel',
    description: 'Responsive admin page with collapsible sidebar navigation and reusable UI components.',
    features: ['Collapsible sidebar', 'Protected routing', 'Active-route state'],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'React Router'],
    github: 'https://github.com/codolog-Workspace/CODOLOG_ADMIN.git',
    demo: null,
    image: adminPageImage,
  },
]

const Projects = () => (
  <section id="projects" className="relative px-4 py-20 sm:px-6 sm:py-24 lg:px-10">
    <div className="mx-auto max-w-7xl">
      <div className="mb-14 max-w-2xl">
        <span className="text-sm uppercase tracking-[0.4em] text-primary">Projects</span>
        <h2 className="mt-4 text-3xl font-semibold text-text sm:text-4xl">Selected projects built for scale and polish.</h2>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-surface/80 p-6 shadow-soft backdrop-blur-xl"
          >
            {project.image && (
              <img src={project.image} alt={`${project.title} screenshot`} className="mb-6 h-44 w-full rounded-[0.75rem] object-cover sm:h-48 md:h-52" />
            )}
            <h3 className="text-2xl font-semibold text-text">{project.title}</h3>
            <p className="mt-4 text-sm leading-7 text-textSecondary">{project.description}</p>
            <div className="mt-6 space-y-2">
              {project.features.map((feature) => (
                <p key={feature} className="text-sm text-textSecondary">• {feature}</p>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-textSecondary">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-text transition hover:bg-primary/10 hover:text-primary">
                GitHub
              </a>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-text transition hover:bg-secondary/10 hover:text-secondary">
                  Live Demo
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
)

export default Projects
