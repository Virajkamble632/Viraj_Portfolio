import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa'
import { link } from 'framer-motion/client'

const contacts = [
  { label: 'Email', value: 'virajkamble0706@gmail.com', icon: FaEnvelope, link:"mailto:virajkamble0706@gmail.com" },
  { label: 'LinkedIn', value: 'https://www.linkedin.com/in/virajkamble0706', icon: FaLinkedin, link:"https://www.linkedin.com/in/virajkamble0706"},
  { label: 'GitHub', value: 'https://github.com/Virajkamble632', icon: FaGithub, link: "https://github.com/Virajkamble632" },
  { label: 'Phone', value: '+91 8591205036', icon: FaPhone },
]

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in your name, email, and a message before sending.')
      return
    }

    const mailtoLink = `mailto:virajkamble0706@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Website Contact')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`

    window.location.href = mailtoLink
    setStatus('Redirecting to email...')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="relative px-4 py-20 sm:px-6 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <span className="text-sm uppercase tracking-[0.4em] text-primary">Contact</span>
          <h2 className="mt-4 text-3xl font-semibold text-text sm:text-4xl">Let’s connect and build something great.</h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="rounded-[2rem] border border-white/10 bg-surface/80 p-8 shadow-soft backdrop-blur-xl">
            <h3 className="text-xl font-semibold text-text">Contact Details</h3>
            <p className="mt-3 text-sm leading-7 text-textSecondary">Reach out via email or LinkedIn, or send a message using the form. I typically respond within one business day.</p>
            <div className="mt-8 space-y-4 cursor-pointer">
              {contacts.map((item) => (
                <div key={item.label} className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-5">
                  <div className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text">{item.label}</p>
                    <a href={item.link} target={item.label !== "Email" && item.label !== "Phone" ? "_blank" : undefined}rel="noopener noreferrer" className="mt-1 block text-sm text-textSecondary transition-colors duration-300 hover:text-primary hover:underline">
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="rounded-[2rem] border border-white/10 bg-surface/80 p-8 shadow-soft backdrop-blur-xl">
            <div className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-textSecondary">
                  <span>Name</span>
                  <input name="name" value={formData.name} onChange={handleChange} className="w-full rounded-3xl border border-white/10 bg-background/70 px-4 py-3 text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" type="text" placeholder="Your name" required />
                </label>
                <label className="space-y-2 text-sm text-textSecondary">
                  <span>Email</span>
                  <input name="email" value={formData.email} onChange={handleChange} className="w-full rounded-3xl border border-white/10 bg-background/70 px-4 py-3 text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" type="email" placeholder="you@example.com" required />
                </label>
              </div>
              <label className="space-y-2 text-sm text-textSecondary">
                <span>Subject</span>
                <input name="subject" value={formData.subject} onChange={handleChange} className="w-full rounded-3xl border border-white/10 bg-background/70 px-4 py-3 text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" type="text" placeholder="Project inquiry" />
              </label>
              <label className="space-y-2 text-sm text-textSecondary">
                <span>Message</span>
                <textarea name="message" value={formData.message} onChange={handleChange} className="h-40 w-full rounded-3xl border border-white/10 bg-background/70 px-4 py-3 text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="Tell me about your project..." required />
              </label>
              {status ? <p className="text-sm text-primary">{status}</p> : null}
              <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-background transition hover:bg-primary/90">
                Send Your Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
