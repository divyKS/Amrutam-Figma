import React from 'react'
import './Experts.css'
import { expert } from '../../assets'

const Experts = () => {
  return (
    <div className="experts-container">
      <h1 className="experts-title">Meet Our Ayurveda Experts</h1>
      
      <div className='complete-content'>
        <button className="nav-button prev">←</button>
        
        <div className="experts-cards">
          {[1, 2, 3].map((item) => (
            <div key={item} className="expert-card">
              <div className="expert-image-container">
                <img 
                  src={expert}
                  alt="Dr. Vaishali Sharma"
                  className="expert-image"
                />
                <div className="expert-rating">
                  4.5 <span>★</span>
                </div>
              </div>
              
              <h2 className="expert-name">Dr. Vaishali Sharma</h2>
              <p className="expert-title">Ayurveda Practitioner (BAMS, MD)</p>
              
              <div className="experience-container">
                <span className="experience-icon">🌿</span>
                <span>25 years of experience</span>
              </div>
              
              <div className="specialty-container">
                <span className="specialty-icon">💆</span>
                <span>Skin Specialist</span>
              </div>
              
              <button className="book-session">Book a session</button>
            </div>
          ))}
        </div>        

        <button className="nav-button next">→</button>
      </div>
      
      <div className="carousel-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      
      <button className="find-more">
        Find more experts →
      </button>
    </div>
  )
}

export default Experts
