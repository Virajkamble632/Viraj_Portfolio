import { useEffect, useState } from 'react'

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(window.scrollY / total)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-1 overflow-hidden bg-white/5">
      <div className="h-full bg-gradient-to-r from-primary via-accent to-secondary transition-[width] duration-150" style={{ width: `${Math.min(Math.max(progress * 100, 0), 100)}%` }} />
    </div>
  )
}

export default ScrollProgress
