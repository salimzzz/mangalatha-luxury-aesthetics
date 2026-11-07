import React from 'react'
import Hero from '../components/Hero'
import Experience from '../components/Experience'
import Philosophy from '../components/Philosophy'
import Highlights from '../components/Highlights'
import OurStory from '../components/OurStory'
import Journal from '../components/Journal'
import Appointment from '../components/Appointment'

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Experience />
      <Philosophy />
      <Highlights />
      <OurStory />
      <Journal />
      <Appointment />
    </main>
  )
}
