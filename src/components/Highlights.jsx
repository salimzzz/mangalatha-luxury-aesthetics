import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Scissors, Sparkles, UserCheck, ShieldCheck } from 'lucide-react'

export default function Highlights() {
  const shouldReduceMotion = useReducedMotion()

  const items = [
    {
      icon: Scissors,
      title: "Tailoring for Men & Women",
      subtitle: "Bespoke suits, dresses, everyday tailoring & custom silhouette engineering."
    },
    {
      icon: Sparkles,
      title: "Skin & Beauty Care",
      subtitle: "Therapeutic facials, gentle aesthetic rituals & skin health nourishment."
    },
    {
      icon: UserCheck,
      title: "Personal Consultation",
      subtitle: "One-on-one measurement, textile curation & custom beauty profiling."
    },
    {
      icon: ShieldCheck,
      title: "Trusted by Our Community",
      subtitle: "Dedicated to artisanal craftsmanship, uncompromised fit, and genuine care."
    }
  ]

  return (
    <section className="bg-burgundy text-ivory py-16 sm:py-20 border-t border-b border-gold/30 relative">
      {/* Background subtle gold glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {items.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className={`flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 ${
                  index !== items.length - 1
                    ? 'lg:border-r lg:border-gold/30'
                    : ''
                }`}
              >
                {/* Icon with Gold Accent */}
                <div className="w-12 h-12 rounded-full bg-ivory/10 border border-gold/40 flex items-center justify-center mb-5 text-gold">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Cormorant Garamond Heading */}
                <h3 className="font-serif text-2xl sm:text-2xl lg:text-2xl text-ivory tracking-wide mb-3 leading-snug font-normal">
                  {item.title}
                </h3>

                {/* Inter Subtitle */}
                <p className="font-sans text-xs sm:text-sm text-beige/85 font-light leading-relaxed max-w-xs">
                  {item.subtitle}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
