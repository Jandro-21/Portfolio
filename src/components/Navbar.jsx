import { useState, useEffect } from 'react'
import { GoArrowUpRight } from 'react-icons/go'

const NAV_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const CARD_ITEMS = [
  {
    label: 'Projects',
    bgColor: '#2F293A',
    textColor: '#fff',
    links: [
      { label: 'View Projects', href: '#projects' },
    ]
  },
  {
    label: 'Experience',
    bgColor: '#1B1722',
    textColor: '#fff',
    links: [
      { label: 'Skills & Experience', href: '#experience' },
    ]
  },
  {
    label: 'Contact',
    bgColor: '#2F293A',
    textColor: '#fff',
    links: [
      { label: 'Get in Touch', href: '#contact' },
    ]
  },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (!mobileOpen) return
    const handleEsc = e => { if (e.key === 'Escape') setMobileOpen(false) }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [mobileOpen])

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/70 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="text-lg font-bold text-indigo-400">
              Alejandro
            </a>

            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-neutral-400 hover:text-indigo-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-neutral-800 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5 text-neutral-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex flex-col items-center justify-start pt-20 px-4 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)}>
          <div className="w-full max-w-sm flex flex-col gap-4" onClick={e => e.stopPropagation()}>
            {CARD_ITEMS.map(item => (
              <a
                key={item.label}
                href={item.links[0].href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between p-5 rounded-xl transition-transform hover:scale-[1.02] active:scale-95"
                style={{ backgroundColor: item.bgColor, color: item.textColor }}
              >
                <span className="text-xl font-medium">{item.label}</span>
                <GoArrowUpRight className="text-lg opacity-60" />
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
