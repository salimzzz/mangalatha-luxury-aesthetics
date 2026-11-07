import React, { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { MapPin, Clock, Phone, Mail, MessageSquare, CheckCircle, Send, Instagram, Facebook } from 'lucide-react'

export default function Appointment() {
  const shouldReduceMotion = useReducedMotion()

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: "Men's Tailoring",
    date: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.'
    }

    // Phone validation: at least 10 digits
    const cleanedPhone = formData.phone.replace(/[^0-9]/g, '')
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your contact phone number.'
    } else if (cleanedPhone.length < 10) {
      newErrors.phone = 'Please provide a valid phone number (at least 10 digits).'
    }

    if (!formData.service) {
      newErrors.service = 'Please select a preferred service.'
    }

    if (!formData.date) {
      newErrors.date = 'Please select your preferred appointment date.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validate()) {
      setSubmitted(true)

      // Format WhatsApp pre-filled message
      const text = encodeURIComponent(
        `Hello Mangalatha Luxury Aesthetics,\n\nI would like to book an appointment.\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nPreferred Date: ${formData.date}\nNotes: ${formData.message || 'None'}`
      )
      const whatsappUrl = `https://wa.me/919037864939?text=${text}`

      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank')
    }
  }

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }))
    }
  }

  return (
    <section id="connect" className="py-24 sm:py-32 bg-[#F7F3EC] text-espresso relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-12 sm:w-16 h-px bg-gold" />
            <span className="section-label">Reserve Your Experience</span>
            <span className="w-12 sm:w-16 h-px bg-gold" />
          </div>

          <h2 className="section-heading mb-6 font-serif">
            Book Your Appointment
          </h2>

          <p className="text-espresso/75 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Step into our private studio for bespoke tailoring or revitalizing aesthetic skin care. Let us craft a session tailored to your schedule.
          </p>
        </div>

        {/* Split Layout: Form Left / Contact Info Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-ivory border border-gold/40 p-8 sm:p-12 shadow-xl relative"
          >
            {/* Top decorative accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-burgundy to-gold" />

            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-gold/20 text-gold border border-gold mx-auto flex items-center justify-center">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl text-espresso font-normal">
                  Thank You, {formData.name}
                </h3>
                <p className="text-espresso/80 text-sm leading-relaxed max-w-md mx-auto font-light">
                  Your appointment request has been prepared. WhatsApp should have opened with your reservation details. Our concierge will review your date and confirm your booking promptly.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={`https://wa.me/919037864939?text=${encodeURIComponent(
                      `Hello Mangalatha,\nI am following up on my booking request for ${formData.name} (${formData.service}).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-[#20ba5a] transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Open WhatsApp Directly
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({
                        name: '',
                        phone: '',
                        service: "Men's Tailoring",
                        date: '',
                        message: '',
                      })
                    }}
                    className="btn-outline-gold text-xs py-3 px-6"
                  >
                    Book Another Session
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="client-name" className="block text-xs uppercase tracking-[0.2em] font-sans font-medium text-espresso/90 mb-2">
                    Full Name <span className="text-burgundy">*</span>
                  </label>
                  <input
                    id="client-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="e.g. Eleanor Vance"
                    className={`w-full bg-[#FAF7F2] border ${
                      errors.name ? 'border-red-500' : 'border-beige'
                    } focus:border-gold px-4 py-3 text-sm text-espresso placeholder-espresso/40 outline-none transition-colors duration-200 font-sans`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-600 font-sans">{errors.name}</p>
                  )}
                </div>

                {/* Phone & Service Fields (2 Columns) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="client-phone" className="block text-xs uppercase tracking-[0.2em] font-sans font-medium text-espresso/90 mb-2">
                      Phone Number <span className="text-burgundy">*</span>
                    </label>
                    <input
                      id="client-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+91 98765 43210"
                      className={`w-full bg-[#FAF7F2] border ${
                        errors.phone ? 'border-red-500' : 'border-beige'
                      } focus:border-gold px-4 py-3 text-sm text-espresso placeholder-espresso/40 outline-none transition-colors duration-200 font-sans`}
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-red-600 font-sans">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="preferred-service" className="block text-xs uppercase tracking-[0.2em] font-sans font-medium text-espresso/90 mb-2">
                      Preferred Service <span className="text-burgundy">*</span>
                    </label>
                    <select
                      id="preferred-service"
                      required
                      value={formData.service}
                      onChange={(e) => handleInputChange('service', e.target.value)}
                      className={`w-full bg-[#FAF7F2] border ${
                        errors.service ? 'border-red-500' : 'border-beige'
                      } focus:border-gold px-4 py-3 text-sm text-espresso outline-none transition-colors duration-200 font-sans cursor-pointer`}
                    >
                      <option value="Men's Tailoring">Men's Tailoring</option>
                      <option value="Women's Tailoring">Women's Tailoring</option>
                      <option value="Facial Treatment">Facial Treatment</option>
                      <option value="Beauty Services">Beauty Services</option>
                      <option value="Other">Other Bespoke Request</option>
                    </select>
                    {errors.service && (
                      <p className="mt-1.5 text-xs text-red-600 font-sans">{errors.service}</p>
                    )}
                  </div>
                </div>

                {/* Preferred Date Field */}
                <div>
                  <label htmlFor="appointment-date" className="block text-xs uppercase tracking-[0.2em] font-sans font-medium text-espresso/90 mb-2">
                    Preferred Date <span className="text-burgundy">*</span>
                  </label>
                  <input
                    id="appointment-date"
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    className={`w-full bg-[#FAF7F2] border ${
                      errors.date ? 'border-red-500' : 'border-beige'
                    } focus:border-gold px-4 py-3 text-sm text-espresso outline-none transition-colors duration-200 font-sans`}
                  />
                  {errors.date && (
                    <p className="mt-1.5 text-xs text-red-600 font-sans">{errors.date}</p>
                  )}
                </div>

                {/* Message / Special Requests */}
                <div>
                  <label htmlFor="client-message" className="block text-xs uppercase tracking-[0.2em] font-sans font-medium text-espresso/90 mb-2">
                    Special Requests or Notes (Optional)
                  </label>
                  <textarea
                    id="client-message"
                    rows="4"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us about the occasion, fabric preferences, or specific aesthetic focus..."
                    className="w-full bg-[#FAF7F2] border border-beige focus:border-gold px-4 py-3 text-sm text-espresso placeholder-espresso/40 outline-none transition-colors duration-200 font-sans resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-burgundy hover:bg-[#391716] text-ivory py-4 px-8 font-sans text-xs uppercase tracking-[0.22em] font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                >
                  <span>Confirm & Send via WhatsApp</span>
                  <Send className="w-4 h-4 transform group-hover:translate-x-1 text-gold transition-transform duration-300" />
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Column: Contact Details, Hours & Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col space-y-8"
          >
            {/* Studio Address & Direct Inquiries */}
            <div className="bg-ivory border border-beige p-8 shadow-sm">
              <h3 className="font-serif text-2xl text-espresso mb-6 font-normal">
                Studio & Atelier
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-espresso/60 font-sans mb-1">
                      Location
                    </span>
                    <p className="text-sm font-sans text-espresso font-medium">
                      Mangalatha Luxury Aesthetics Studio
                    </p>
                    <p className="text-xs text-espresso/70 font-light mt-0.5">
                      NH 744, opposite Sana Auditorium,<br />
                      Kallumthazham, Kollam,<br />
                      Keralam — 691004
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3 border-t border-beige/60">
                  <Phone className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-espresso/60 font-sans mb-1">
                      Direct Concierge
                    </span>
                    <a
                      href="tel:+919037864939"
                      className="text-sm font-sans text-espresso hover:text-gold transition-colors"
                    >
                      +91 90378 64939
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3 border-t border-beige/60">
                  <Mail className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-espresso/60 font-sans mb-1">
                      Inquiries & Press
                    </span>
                    <a
                      href="mailto:concierge@mangalatha.com"
                      className="text-sm font-sans text-espresso hover:text-gold transition-colors"
                    >
                      concierge@mangalatha.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours Table */}
            <div className="bg-ivory border border-beige p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <Clock className="w-5 h-5 text-gold" />
                <h3 className="font-serif text-2xl text-espresso font-normal">
                  Opening Hours
                </h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left font-sans text-xs sm:text-sm">
                  <tbody className="divide-y divide-beige/60">
                    <tr>
                      <td className="py-2.5 text-espresso/75 font-medium">Monday — Friday</td>
                      <td className="py-2.5 text-right font-medium text-espresso">10:00 AM – 7:00 PM</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 text-espresso/75 font-medium">Saturday</td>
                      <td className="py-2.5 text-right font-medium text-espresso">10:00 AM – 7:00 PM</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 text-espresso/75 font-medium">Sunday</td>
                      <td className="py-2.5 text-right text-gold font-semibold uppercase tracking-wider text-xs">By Appointment</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Google Maps / Studio Location Placeholder */}
            <div className="bg-espresso/5 border border-dashed border-gold/60 p-8 flex flex-col items-center justify-center text-center aspect-[16/9] relative overflow-hidden group">
              <div className="w-12 h-12 rounded-full bg-gold/15 border border-gold flex items-center justify-center text-gold mb-3 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg text-espresso mb-1">Find Us Here</h4>
              <p className="text-xs text-espresso/70 font-sans max-w-xs font-light">
                NH 744, opposite Sana Auditorium, Kallumthazham, Kollam, Keralam 691004
              </p>
              <a
                href="https://maps.google.com/?q=NH+744+opposite+Sana+Auditorium+Kallumthazham+Kollam+Kerala+691004"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-xs font-sans uppercase tracking-widest text-gold hover:text-espresso border-b border-gold/50 transition-colors"
              >
                Open in Google Maps →
              </a>
            </div>

            {/* WhatsApp Direct Chat Banner */}
            <a
              href="https://wa.me/919037864939"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-[#25D366]/10 border border-[#25D366]/40 hover:bg-[#25D366]/20 transition-colors text-[#128C7E]"
            >
              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-[#25D366]" />
                <span className="text-xs font-sans uppercase tracking-wider font-semibold">
                  Quick Consultation via WhatsApp
                </span>
              </div>
              <span className="text-xs font-serif italic text-espresso/80">Connect Now →</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
