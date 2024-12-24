import React from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Discover from './components/Discover/Discover'
import Consultation from './components/Consultation/Consultation'
import BookConsultation from './components/BookConsultation/BookConsultation'
import Approach from './components/Approach/Approach'
import Reviews from './components/Reviews/Reviews'
import Experts from './components/Experts/Experts'
import Download from './components/Download/Download'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Hero />
      <Discover />
      <Consultation />
      <BookConsultation />
      <Approach />
      <Reviews />
      <Experts />
      <Download />
      <Footer />
    </>
  )
}

export default App
