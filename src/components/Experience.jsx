import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Scissors, Sparkles } from 'lucide-react'

export default function Experience() {
  const shouldReduceMotion = useReducedMotion()

  const scrollToConnect = (serviceName) => {
    const el = document.querySelector('#connect')
    if (el) {
      const navOffset = 80
      const elementPosition = el.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })

      // If there's a service select input, set it
      const select = document.getElementById('preferred-service')
      if (select && serviceName) {
        select.value = serviceName
      }
    }
  }

  const cards = [
    {
      id: 'the-atelier',
      label: 'THE ATELIER',
      title: 'Bespoke Tailoring',
      icon: Scissors,
      serviceValue: "Men's Tailoring",
      description:
        'Personal style begins with the perfect fit. Thoughtfully tailored experiences for men and women, cut from the finest textiles.',
      image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80',
      highlights: ['Custom Suits & Blousons', 'Made-to-Measure Eveningwear', 'Artisanal Alterations & Fit Refinement'],
    },
    {
      id: 'beauty-room',
      label: 'THE BEAUTY ROOM',
      title: 'Facials & Aesthetics',
      icon: Sparkles,
      serviceValue: 'Facial Treatment',
      description:
        'A moment to pause, refresh and rediscover your natural glow through clinical precision and deeply restorative botanicals.',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
      highlights: ['Customized Radiance Facials', 'Skin Rejuvenation & Hydration', 'Sculpting & Lymphatic Facial Massage'],
    },
  ]

  return (
    <section id="experience" className="py-24 sm:py-32 bg-ivory text-espresso relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-12 sm:w-16 h-px bg-gold" />
            <span className="section-label">Two Distinct Disciplines</span>
            <span className="w-12 sm:w-16 h-px bg-gold" />
          </div>

          <h2 className="section-heading mb-6 font-serif">
            The Mangalatha Experience
          </h2>

          <p className="text-espresso/75 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            A space for timeless tailoring, thoughtful styling and personalised beauty care. Every detail is calibrated around your individuality.
          </p>
        </motion.div>

        {/* Two Large Experience Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {cards.map((card, idx) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.id}
                id={card.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                onClick={() => scrollToConnect(card.serviceValue)}
                className="group relative bg-[#FAF6F0] border border-beige/80 rounded-none overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col justify-between"
              >
                {/* Image Container with zoom on hover */}
                <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-espresso/10">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                  {/* Top Badge */}
                  <div className="absolute top-6 left-6 z-10">
                    <span className="inline-flex items-center gap-2 bg-[#302A27]/85 backdrop-blur-sm border border-gold/40 text-gold px-3.5 py-1.5 text-[10px] font-sans tracking-[0.25em] uppercase font-medium">
                      <Icon className="w-3 h-3 text-gold" />
                      {card.label}
                    </span>
                  </div>

                  {/* Title overlay at bottom of image */}
                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <h3 className="font-serif text-3xl sm:text-4xl text-ivory tracking-wide font-normal drop-shadow-sm">
                      {card.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content & Details */}
                <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between bg-ivory/50">
                  <p className="text-espresso/80 text-sm sm:text-base leading-relaxed mb-6 font-light">
                    {card.description}
                  </p>

                  <ul className="space-y-2.5 mb-8 border-t border-beige/60 pt-6">
                    {card.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-center text-xs tracking-wider text-espresso/80 uppercase font-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mr-3 shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Bottom Action Footer with Circular Arrow */}
                  <div className="flex items-center justify-between pt-4 border-t border-beige/60">
                    <span className="text-xs uppercase tracking-[0.25em] text-espresso font-semibold group-hover:text-gold transition-colors duration-300">
                      Reserve Session
                    </span>
                    <div className="w-11 h-11 rounded-full border border-gold/60 flex items-center justify-center text-espresso group-hover:bg-gold group-hover:text-espresso group-hover:border-gold transition-all duration-300 transform group-hover:translate-x-1 shadow-sm">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
