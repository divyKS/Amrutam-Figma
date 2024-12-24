import React from 'react'
import './BookConsultation.css'
import {mirror} from '../../assets/index'

const BookConsultation = () => {
  return (
    <div className="book-wrapper" style={{backgroundImage: `url(${mirror})`}}>
      <div className='book-container'>
        <div>Ready to restore harmony in your mind, body and spirit?</div>
        <a href="#">Book a Consultation</a>
      </div>
    </div>
  )
}

export default BookConsultation