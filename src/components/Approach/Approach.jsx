import React from 'react'
import './Approach.css'

const Approach = () => {
    const steps = [
        {
            number: 1,
            title: "Make Appointment",
            description: "You must make an appointment in advance, to choose the service and date."
        },
        {
            number: 2,
            title: "Consultations",
            description: "The next stage involves a thorough consultation with an Ayurveda practitioner."
        },
        {
            number: 3,
            title: "Treatment Planning",
            description: "The Ayurvedic practitioner creates a personalized treatment plan for you"
        },
        {
            number: 4,
            title: "Maintenance",
            description: "These visits allow for assessment of progress, adjustments to the treatment."
        }
    ];

    return (
        <div className="approach-wrapper">

            <div className="approach-header">
                <h1 className="approach-title">Our Ayurvedic Approach</h1>
                <p className="approach-description">
                    At Amrutam we follow a unique and personalized approach to healing. 
                    Our expert practitioners begin each treatment process by conducting 
                    a thorough analysis of the patient's body type, medical history, 
                    and current health conditions.
                </p>
            </div>

            <div className="approach-desktop-cards">
                {steps.map((step, index) => (
                    <div key={index} className="approach-card">
                        <div className='number'>{step.number}</div>
                        <div className='approach-content'>
                            <div>{step.title}</div>
                            <p>{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Approach