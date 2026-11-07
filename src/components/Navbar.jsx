import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'The Atelier', href: '#the-atelier' },
    { name: 'The Beauty Room', href: '#beauty-room' },
    { name: 'Our Story', href: '#our-story' },
    { name: 'Journal', href: '#journal' },
    { name: 'Connect', href: '#connect' },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const targetElement = document.querySelector(href)
    if (targetElement) {
      const navOffset = 80
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#302A27]/95 backdrop-blur-md py-4 shadow-xl border-b border-gold/20'
          : 'bg-gradient-to-b from-[#302A27]/80 via-[#302A27]/40 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="group flex flex-col text-left transition-opacity hover:opacity-90"
        >
          <span className="font-serif tracking-[0.22em] text-xl sm:text-2xl text-ivory font-medium group-hover:text-gold transition-colors duration-300">
            MANGALATHA
          </span>
          <span className="font-serif italic text-gold text-[10px] sm:text-xs tracking-[0.35em] uppercase font-light -mt-0.5">
            Luxury Aesthetics
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-ivory/90 hover:text-gold text-xs font-sans tracking-[0.18em] uppercase transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gold hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden lg:flex items-center">
          <a
            href="#connect"
            onClick={(e) => handleNavClick(e, '#connect')}
            className="border border-gold text-gold hover:bg-gold hover:text-espresso px-5 py-2.5 text-xs font-sans uppercase tracking-[0.2em] font-semibold transition-all duration-300 flex items-center gap-1.5 shadow-sm"
          >
            <span>Book Appointment</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-ivory hover:text-gold p-2 transition-colors focus:outline-none"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-[#302A27] border-b border-gold/30 px-6 py-6 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-ivory hover:text-gold text-sm font-sans tracking-[0.2em] uppercase py-2 border-b border-ivory/10 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="#connect"
                  onClick={(e) => handleNavClick(e, '#connect')}
                  className="w-full inline-flex items-center justify-center border border-gold text-gold hover:bg-gold hover:text-espresso px-5 py-3 text-xs uppercase tracking-[0.2em] font-semibold transition-colors"
                >
                  <span>Book Appointment</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-2" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
