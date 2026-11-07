import React, { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ArrowRight, BookOpen, X, Clock, Calendar } from 'lucide-react'

export default function Journal() {
  const shouldReduceMotion = useReducedMotion()
  const [activeArticle, setActiveArticle] = useState(null)

  const articles = [
    {
      id: 1,
      category: 'ATELIER & STYLE',
      date: 'Autumn Collection',
      readTime: '4 min read',
      title: 'The Art of Personal Style',
      excerpt:
        'Cultivating a wardrobe that outlives the trend cycle begins with self-knowledge, refined silhouettes, and bespoke proportioning.',
      fullContent:
        'Personal style is not merely an assemblage of clothing; it is a profound visual statement of identity and confidence. In an era dominated by rapid fashion cycles, timeless style emerges through restraint and exacting tailor craft. At Mangalatha, we encourage our clients to build a personal capsule: garments hand-cut to drape flawlessly, textiles that age gracefully, and subtle customizations that evoke quiet elegance.',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80',
    },
    {
      id: 2,
      category: 'CRAFT & TAILORING',
      date: 'Bespoke Insights',
      readTime: '5 min read',
      title: 'Understanding the Perfect Fit',
      excerpt:
        'Why true luxury is measured in fractions of an inch: the artisanal balance between shoulder slope, chest drape, and posture.',
      fullContent:
        'A truly magnificent garment cannot be purchased off a rack — it must be coaxed from raw cloth in harmony with your natural stance. The secret of bespoke tailoring resides in the shoulder and sleeve pitch, the balanced rise of the trouser, and the drape across the spine. When a garment is tailored precisely to your unique anatomy, it ceases to feel like fabric and becomes a natural extension of your poise.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    },
    {
      id: 3,
      category: 'AESTHETICS & CARE',
      date: 'Skincare Journal',
      readTime: '3 min read',
      title: 'Everyday Beauty Rituals',
      excerpt:
        'Nourishing the skin barrier through mindful touch, restorative hydration, and targeted aesthetic botanical serums.',
      fullContent:
        'Radiant skin is an ongoing dialogue with your lifestyle, hydration, and restorative rituals. Rather than abrasive treatments, modern dermal care prioritizes barrier preservation, deep lymphatic activation, and nourishing botanicals. In this feature, our aesthetician outlines how regular professional facials combined with mindful daily rituals foster long-term resilience and a dewy, youthful glow.',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
    },
  ]

  return (
    <section id="journal" className="py-24 sm:py-32 bg-ivory text-espresso relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Magazine-style Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-12 sm:w-16 h-px bg-gold" />
            <span className="section-label">Editorial & Insights</span>
            <span className="w-12 sm:w-16 h-px bg-gold" />
          </div>

          <h2 className="section-heading mb-6 font-serif">
            The Journal
          </h2>

          <p className="text-espresso/75 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Essays on bespoke sartorial craft, mindful aesthetics, and the philosophy of timeless living.
          </p>
        </div>

        {/* 3 Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {articles.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              onClick={() => setActiveArticle(article)}
              className="group bg-[#FAF6F0] border border-beige/70 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
            >
              {/* Image Container with zoom */}
              <div className="relative aspect-[4/3] overflow-hidden bg-espresso/10">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-espresso/20 group-hover:bg-espresso/10 transition-colors duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#302A27]/90 text-gold text-[10px] font-sans tracking-[0.25em] uppercase font-semibold px-3 py-1.5 backdrop-blur-sm border border-gold/30">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-[11px] text-espresso/60 uppercase font-sans tracking-wider mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-gold" />
                      {article.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-gold" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-espresso font-normal leading-snug mb-3 group-hover:text-burgundy transition-colors duration-300">
                    {article.title}
                  </h3>

                  <p className="text-espresso/70 text-xs sm:text-sm font-light leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>

                {/* Read More Link */}
                <div className="pt-4 border-t border-beige/60 flex items-center justify-between text-xs font-sans uppercase tracking-[0.2em] font-semibold text-espresso group-hover:text-gold transition-colors duration-300">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Article Detail Modal */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-espresso/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-ivory max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gold shadow-2xl relative p-6 sm:p-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-5 right-5 text-espresso/60 hover:text-espresso p-2 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-4">
                <span className="text-gold text-xs font-sans tracking-[0.25em] uppercase font-semibold">
                  {activeArticle.category}
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-espresso mb-4 leading-tight font-normal">
                {activeArticle.title}
              </h3>

              <div className="flex items-center gap-4 text-xs text-espresso/60 mb-6 font-sans">
                <span>{activeArticle.date}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
              </div>

              <div className="aspect-[16/9] w-full overflow-hidden mb-6 bg-espresso/5">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="font-serif italic text-lg text-burgundy mb-4 leading-relaxed">
                "{activeArticle.excerpt}"
              </p>

              <p className="font-sans text-sm text-espresso/80 leading-relaxed font-light mb-8 whitespace-pre-line">
                {activeArticle.fullContent}
              </p>

              <div className="border-t border-gold/30 pt-6 flex justify-between items-center">
                <span className="font-serif italic text-xs text-espresso/70">
                  Mangalatha Luxury Aesthetics Editorial
                </span>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="btn-outline-gold text-xs py-2 px-5"
                >
                  Close Article
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
