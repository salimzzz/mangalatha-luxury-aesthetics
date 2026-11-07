import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Check, Sparkles } from 'lucide-react'

export default function OurStory() {
  const shouldReduceMotion = useReducedMotion()

  const brandValues = [
    {
      title: 'Precision Tailoring & Bespoke Fit',
      description: 'Hand-drafted patterns tailored specifically to your body proportions, ensuring natural grace and movement.',
    },
    {
      title: 'Restorative Skincare & Holistic Facials',
      description: 'Science-backed aesthetic techniques paired with gentle botanical infusions for genuine dermal vitality.',
    },
    {
      title: 'Private, Dedicated Consultation Hours',
      description: 'A relaxed, unrushed environment where our artisans listen closely to your vision and aesthetic needs.',
    },
    {
      title: 'Artisanal Craftsmanship & Ethical Materials',
      description: 'Sourcing breathable silks, wools, linens, and pure aesthetic serums with uncompromising standards.',
    },
  ]

  return (
    <section id="our-story" className="py-24 sm:py-32 bg-ivory text-espresso relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Studio Interior Image with Luxury Matting */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative z-10 p-2 sm:p-3 bg-beige/40 border border-gold/40 shadow-xl">
              <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-espresso/5">
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80"
                  alt="Mangalatha Studio Interior"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-espresso/15 pointer-events-none" />
              </div>

              {/* Floating aesthetic stamp */}
              <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-2.5 bg-burgundy text-ivory px-5 py-4 border border-gold/50 shadow-2xl">
                <Sparkles className="w-5 h-5 text-gold shrink-0" />
                <div className="text-left">
                  <div className="text-[10px] tracking-[0.25em] uppercase text-gold font-sans">Heritage & Grace</div>
                  <div className="font-serif text-sm font-medium text-ivory">Mangalatha Atelier</div>
                </div>
              </div>
            </div>

            {/* Back decorative geometry */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-gold/30 -z-0 pointer-events-none" />
          </motion.div>

          {/* Right Column: Story Text & Brand Values */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-gold" />
              <span className="section-label">Our Story</span>
            </div>

            <h2 className="section-heading mb-6 font-serif">
              A Studio Built on Craft & Care.
            </h2>

            <p className="text-espresso/80 font-sans text-base sm:text-lg leading-relaxed mb-6 font-light">
              Mangalatha Luxury Aesthetics was born from a simple belief — that everyone deserves to feel beautiful, confident and truly themselves. What began as a passion for traditional dressmaking and skin wellness has flourished into a sanctuary combining tailored craftsmanship with restorative aesthetic care.
            </p>

            <p className="text-espresso/75 font-sans text-sm sm:text-base leading-relaxed mb-10 font-light">
              We look beyond ephemeral trends to focus on fit, form, and texture. Whether drafting a tailored garment that moves effortlessly with your rhythm or delivering a rejuvenating facial that refreshes your complexion, our dedication to precision is unwavering.
            </p>

            {/* Brand Values List with Gold Bullet Markers */}
            <div className="space-y-5 border-t border-gold/25 pt-8">
              {brandValues.map((value, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-gold/15 border border-gold flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-espresso font-medium mb-1">
                      {value.title}
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-espresso/70 leading-relaxed font-light">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
