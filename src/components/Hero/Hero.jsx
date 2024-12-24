import React from 'react'
import './Hero.css'
import {framehero1, framehero2, framehero3, framehero4, rectangle3464760, hero2} from '../../assets'

const Hero = () => {
    return (
        <div className='wrapper'>
            
            <div className='bg-boxes'>
                <div className="bgLeft"></div>
                <img className="hero-img" src={rectangle3464760}/>
            </div>

            <div className="hero">
                <h2>Namaste, Welcome to Amrutam</h2>
                <h1>Step into Holistic Healing with <span>Ayurveda</span> Book Consulation With Certified Experts.</h1>
                <div>Dive into the world of ayurveda and experience personalized health solutions and holistic guidance from trusted ayurvedic doctors anytime, anywhere.</div>
                <a href="#">BOOK AN APPOINTMENT</a>
            </div>

           <div className="benefits">
                <div className='benefit' style={{maxWidth: "310px", width:"100%"}}>
                    <div>
                        <img src={framehero4}/>
                        <div>Convinient Online & In-Clinic Consultations</div>
                    </div>
                </div>
                <div className='benefit' style={{maxWidth: "292px", width:"100%"}}>
                    <div>
                        <img src={framehero3}/>
                        <div>Safe and Effective Treatment</div>
                    </div>
                </div>
                <div className='benefit' style={{maxWidth: "319px", width:"100%"}}>
                    <div>
                        <img src={framehero2}/>
                        <div>Experienced Ayurvedic Practitioners</div>
                    </div>
                </div>
                <div className='benefit' style={{maxWidth: "310px", width:"100%"}}>
                    <div>
                        <img src={framehero1}/>
                        <div>Personalised Treatment Plans & Guidance</div>
                    </div>
                </div>
                
           </div>

        </div>
    )
}

export default Hero