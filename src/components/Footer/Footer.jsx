import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa'

const Footer = () => (
  <footer className="border-t border-primary/10 bg-background/90 px-6 py-8 sm:px-8 lg:px-10">
    <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-sm text-textSecondary">© 2026 Viraj Kamble. </p>
        <p className="text-sm text-textSecondary">Built with React, Tailwind, and motion.</p>
      </div>
      <div className="flex items-center gap-4">
        <a href="https://github.com/Virajkamble632" target="_blank" rel="noreferrer" className="text-textSecondary transition hover:text-primary">
          <FaGithub className="h-5 w-5" />
        </a>
        <a href="https://www.linkedin.com/in/virajkamble0706/" target="_blank" rel="noreferrer" className="text-textSecondary transition hover:text-secondary">
          <FaLinkedin className="h-5 w-5" />
        </a>
        <a href="#home" className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-surface/95 px-4 py-2 text-sm text-text transition hover:bg-primary/10 hover:text-primary">
          <FaArrowUp className="h-4 w-4" /> Back to top
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
