import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Compass } from 'lucide-react'

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
    },
  }

  const scrollTo = (id) => {
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
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-espresso"
    >
      {/* Background Editorial Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')`,
        }}
      />

      {/* Dark Overlay with custom warm espresso tint */}
      <div
        className="absolute inset-0 bg-[#302A27]/75 backdrop-blur-[1px] mix-blend-multiply"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#302A27] via-transparent to-[#302A27]/60"
        aria-hidden="true"
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 sm:py-36 w-full flex flex-col items-center lg:items-end text-center lg:text-right">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Small Caps Label */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center lg:justify-end gap-3 mb-4"
          >
            <span className="w-8 sm:w-12 h-px bg-gold/70" />
            <span className="text-gold uppercase tracking-[0.35em] text-xs sm:text-sm font-sans font-medium">
              Mangalatha
            </span>
            <span className="w-8 sm:w-12 h-px bg-gold/70 lg:hidden" />
          </motion.div>

          {/* Large Serif Title */}
          <motion.h1
            variants={itemVariants}
            className="font-serif italic text-5xl sm:text-7xl lg:text-8xl text-ivory tracking-wide leading-[1.05] mb-6 drop-shadow-sm font-normal"
          >
            Luxury Aesthetics
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-beige/95 text-lg sm:text-xl md:text-2xl font-light tracking-wide max-w-2xl ml-auto mb-10 leading-relaxed font-serif italic"
          >
            "Where Personal Style Meets Timeless Care."
          </motion.p>

          {/* Studio Description Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-ivory/80 text-sm sm:text-base font-sans font-light tracking-wider max-w-xl ml-auto mb-12 leading-relaxed"
          >
            A dedicated sanctuary in bespoke men’s & women’s tailoring and revitalizing facial aesthetics — created for those who cherish artisanal craft and quiet luxury.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-4 sm:gap-6"
          >
            <button
              onClick={() => scrollTo('#connect')}
              className="w-full sm:w-auto bg-ivory text-espresso hover:bg-beige px-8 py-4 font-sans text-xs tracking-[0.22em] uppercase font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 group"
            >
              <span>Book Your Appointment</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-espresso" />
            </button>

            <button
              onClick={() => scrollTo('#experience')}
              className="w-full sm:w-auto border border-gold text-gold hover:bg-gold hover:text-espresso px-8 py-4 font-sans text-xs tracking-[0.22em] uppercase font-semibold transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <Compass className="w-4 h-4 transition-transform group-hover:rotate-45" />
              <span>Explore Our Studio</span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center pointer-events-none"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-gold/80 mb-2 font-sans">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  )
}
