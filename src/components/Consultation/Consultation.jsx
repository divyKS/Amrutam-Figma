import React from 'react'
import './Consultation.css'
import {rectangle4144, rectangle4146, rectangle4148} from '../../assets'

const Consultation = () => {
    return (
        <div className="consult-wrapper">

            <h2 className="consult-title">What sets Ayurvedic consultations apart?</h2>
        
            <div className="consult-card-container">
                
                <div className="first-row">
                    <div className="card sanskrit-card">
                        <div className="sanskrit-text">स्वस्थस्य स्वास्थ्य रक्षणं,<br />आतुरस्य विकार प्रशमनं ।"</div>
                        <div className="sanskrit-meaning">[ Meaning: The Goal of Ayurveda is to maintain the health of a healthy person and to cure the disease of a diseased person. ]</div>
                    </div>

                    <div className="card image-card">
                        <img src={rectangle4144} alt="Ayurvedic consultation" />
                    </div>

                    <div className="card text-card">
                        <div>Precise Diagnosis</div>
                        <p className="description">Ayurveda's core principles revolve around Vata, Pitta, and Kapha doshas, guiding you with precise diagnosis and treatment.</p>
                    </div>       
                </div>

                <div className="second-row">
                
                    <div className="card text-card">
                        <div>Zero side-effects</div>
                        <p className="description">
                            Ayurvedic treatments are devoid of chemicals, and are based completely on natural herbs
                        </p>
                    </div>

                    <div className="card image-card">
                        <img src={rectangle4146} alt="Ayurvedic herbs and treatments" />
                    </div>

                    <div className="card text-card">
                        <div>Individual Treatment</div>
                        <p className="description">
                            All treatments are personalized based on a person's unique constitution and health concerns.
                        </p>
                    </div>

                    <div className="card image-card">
                        <img src={rectangle4148} alt="Person using Ayurvedic product" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Consultation