import React from 'react'
import { Instagram, Facebook, ArrowUp, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const scrollTo = (e, id) => {
    e.preventDefault()
    const el = document.querySelector(id)
    if (el) {
      const navOffset = 80
      const elementPosition = el.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <footer className="bg-espresso text-ivory border-t border-gold/40 relative">
      {/* Top Gold Border Accent Line */}
      <div className="h-1 bg-gradient-to-r from-espresso via-gold to-espresso" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-12">
        {/* Centered Brand Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 pb-12 border-b border-ivory/10">
          <a
            href="#hero"
            onClick={(e) => scrollTo(e, '#hero')}
            className="inline-block group mb-3"
          >
            <span className="block font-serif text-3xl sm:text-4xl tracking-[0.25em] text-ivory group-hover:text-gold transition-colors duration-300">
              MANGALATHA
            </span>
            <span className="block font-serif italic text-gold text-xs sm:text-sm tracking-[0.4em] uppercase font-light mt-1">
              Luxury Aesthetics
            </span>
          </a>

          <p className="font-serif italic text-beige/85 text-base sm:text-lg mt-3">
            "Where Personal Style Meets Timeless Care."
          </p>
        </div>

        {/* 3 Columns Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16 text-left">
          {/* Col 1: Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-gold tracking-widest uppercase mb-6 font-medium">
              Navigation
            </h4>
            <ul className="space-y-3 font-sans text-xs tracking-[0.18em] uppercase text-ivory/80">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => scrollTo(e, '#hero')}
                  className="hover:text-gold transition-colors inline-block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  onClick={(e) => scrollTo(e, '#experience')}
                  className="hover:text-gold transition-colors inline-block"
                >
                  The Atelier
                </a>
              </li>
              <li>
                <a
                  href="#beauty-room"
                  onClick={(e) => scrollTo(e, '#beauty-room')}
                  className="hover:text-gold transition-colors inline-block"
                >
                  The Beauty Room
                </a>
              </li>
              <li>
                <a
                  href="#our-story"
                  onClick={(e) => scrollTo(e, '#our-story')}
                  className="hover:text-gold transition-colors inline-block"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#journal"
                  onClick={(e) => scrollTo(e, '#journal')}
                  className="hover:text-gold transition-colors inline-block"
                >
                  The Journal
                </a>
              </li>
              <li>
                <a
                  href="#connect"
                  onClick={(e) => scrollTo(e, '#connect')}
                  className="hover:text-gold transition-colors inline-block"
                >
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="font-serif text-lg text-gold tracking-widest uppercase mb-6 font-medium">
              Sanctuary Services
            </h4>
            <ul className="space-y-3 font-sans text-xs tracking-wider text-ivory/75">
              <li>Bespoke Men's Tailoring & Suiting</li>
              <li>Made-to-Measure Women's Silhouette Craft</li>
              <li>Artisanal Garment Alterations & Restyling</li>
              <li>Hydration & Radiance Rejuvenating Facials</li>
              <li>Sculpting Dermal Massage & Treatments</li>
              <li>Private Consultations & Styling Audits</li>
            </ul>
          </div>

          {/* Col 3: Connect */}
          <div>
            <h4 className="font-serif text-lg text-gold tracking-widest uppercase mb-6 font-medium">
              Connect With Us
            </h4>
            <p className="text-xs text-ivory/70 font-sans leading-relaxed mb-4">
              Mangalatha Luxury Aesthetics Studio<br />
              [Business Address — Coming Soon]
            </p>
            <p className="text-xs text-ivory/70 font-sans mb-2">
              <span className="text-gold">T:</span> +91 (0) 98765 43210
            </p>
            <p className="text-xs text-ivory/70 font-sans mb-6">
              <span className="text-gold">E:</span> concierge@mangalatha.com
            </p>

            <div className="flex items-center space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gold/40 flex items-center justify-center text-ivory hover:text-gold hover:border-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gold/40 flex items-center justify-center text-ivory hover:text-gold hover:border-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="mailto:concierge@mangalatha.com"
                className="w-9 h-9 rounded-full border border-gold/40 flex items-center justify-center text-ivory hover:text-gold hover:border-gold transition-colors"
                aria-label="Email Concierge"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="border-t border-ivory/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-ivory/60">
          <p className="text-center sm:text-left">
            © 2024 Mangalatha Luxury Aesthetics. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gold hover:text-ivory transition-colors uppercase tracking-widest text-[11px]"
          >
            <span>Return to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
