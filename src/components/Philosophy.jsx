import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Heart, Sparkles, Feather } from 'lucide-react'

export default function Philosophy() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-24 sm:py-32 bg-[#F2ECE1] text-espresso relative overflow-hidden border-t border-b border-beige/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Decorative Artistic Botanical/Floral SVG */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.215, 0.61, 0.355, 1] }}
            className="lg:col-span-5 flex items-center justify-center relative"
          >
            <div className="relative w-full max-w-md aspect-square bg-ivory/60 border border-gold/30 p-8 sm:p-12 flex items-center justify-center shadow-lg">
              {/* Outer decorative gold frame */}
              <div className="absolute inset-3 border border-gold/20 pointer-events-none" />
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-burgundy" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-burgundy" />

              {/* Elegant Botanical Illustration SVG in Burgundy & Gold */}
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full text-burgundy transition-transform duration-700 hover:scale-105"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Central delicate stem */}
                <path
                  d="M200 360 C190 280, 210 200, 195 60"
                  stroke="#4A1F1E"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                
                {/* Golden sun/aura ring */}
                <circle
                  cx="200"
                  cy="170"
                  r="75"
                  stroke="#C4A165"
                  strokeWidth="1.2"
                  strokeDasharray="4 6"
                  opacity="0.8"
                />
                <circle
                  cx="200"
                  cy="170"
                  r="95"
                  stroke="#C4A165"
                  strokeWidth="0.8"
                  opacity="0.4"
                />

                {/* Left Branch Leaves */}
                <path
                  d="M198 300 C150 290, 130 260, 125 240 C145 250, 180 270, 196 280"
                  fill="#4A1F1E"
                  fillOpacity="0.15"
                  stroke="#4A1F1E"
                  strokeWidth="1.8"
                />
                <path
                  d="M197 220 C140 200, 120 160, 115 130 C145 150, 175 180, 195 200"
                  fill="#C4A165"
                  fillOpacity="0.25"
                  stroke="#C4A165"
                  strokeWidth="1.8"
                />

                {/* Right Branch Leaves */}
                <path
                  d="M202 260 C250 250, 275 220, 280 190 C260 210, 225 235, 201 245"
                  fill="#4A1F1E"
                  fillOpacity="0.15"
                  stroke="#4A1F1E"
                  strokeWidth="1.8"
                />
                <path
                  d="M200 170 C260 150, 285 110, 290 80 C265 105, 225 135, 198 150"
                  fill="#C4A165"
                  fillOpacity="0.25"
                  stroke="#C4A165"
                  strokeWidth="1.8"
                />

                {/* Blossom buds at top */}
                <path
                  d="M195 60 C175 40, 185 20, 195 15 C205 20, 215 40, 195 60 Z"
                  fill="#4A1F1E"
                  stroke="#C4A165"
                  strokeWidth="1.5"
                />
                <circle cx="195" cy="15" r="3" fill="#C4A165" />
                <circle cx="125" cy="240" r="2.5" fill="#C4A165" />
                <circle cx="280" cy="190" r="2.5" fill="#C4A165" />
                <circle cx="115" cy="130" r="2.5" fill="#4A1F1E" />
                <circle cx="290" cy="80" r="2.5" fill="#4A1F1E" />
              </svg>

              {/* Watermark brand emblem */}
              <div className="absolute bottom-4 text-center">
                <span className="font-serif italic text-xs tracking-widest text-gold font-light">
                  Est. Atelier & Beauty Sanctuary
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative Content */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.215, 0.61, 0.355, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-gold" />
              <span className="section-label">Our Philosophy</span>
            </div>

            <h2 className="section-heading mb-8 font-serif">
              Crafted for Real People.
            </h2>

            <p className="text-lg sm:text-xl text-espresso/90 font-serif italic leading-relaxed mb-6 font-normal">
              "At Mangalatha, we believe in enhancing what's already you — through well-fitted styles, thoughtful designs and personalised beauty care. Luxury experiences, made accessible."
            </p>

            <p className="text-espresso/75 font-sans text-sm sm:text-base leading-relaxed mb-8 font-light">
              We reject the transient rush of mass fashion and generic skin regimens. True sophistication is found in the quiet confidence of clothes cut precisely to your frame and skin nourished with attentive care. Our atelier and treatment rooms were conceived as sanctuaries where traditional mastery meets modern individuality.
            </p>

            {/* Philosophy Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-gold/30">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-burgundy mb-2">
                  <Feather className="w-4 h-4 text-gold" />
                  <span className="font-serif text-base text-espresso font-medium">Individual Form</span>
                </div>
                <p className="text-xs text-espresso/70 leading-relaxed font-sans">
                  Honoring the unique contour and demeanor of every client.
                </p>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-burgundy mb-2">
                  <Sparkles className="w-4 h-4 text-gold" />
                  <span className="font-serif text-base text-espresso font-medium">Timeless Touch</span>
                </div>
                <p className="text-xs text-espresso/70 leading-relaxed font-sans">
                  Heirloom tailoring and lasting skin vitality over fleeting trends.
                </p>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-burgundy mb-2">
                  <Heart className="w-4 h-4 text-gold" />
                  <span className="font-serif text-base text-espresso font-medium">Heartfelt Care</span>
                </div>
                <p className="text-xs text-espresso/70 leading-relaxed font-sans">
                  A gracious, warm atmosphere where your comfort comes first.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
