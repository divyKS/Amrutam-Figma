import React, { useEffect, useRef, useState } from "react";
import "./Reviews.css";

const Reviews = () => {
    const testimonials = [
        {
            type: 'Skin',
            name: 'Sophie Moore',
            location: 'Chennai',
            date: '17/02/24',
            rating: 5,
            title: 'One of a kind service',
            review: 'Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.'
        },
        {
            type: 'hair',
            name: 'Sophie Moore',
            location: 'Mumbai',
            date: '17/02/24',
            rating: 5,
            title: 'One of a kind service',
            review: 'Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.'
        },
        {
            type: 'hair',
            name: 'Sophie Moore',
            location: 'Chennai',
            date: '17/02/24',
            rating: 5,
            title: 'One of a kind service',
            review: 'Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.'
        }
    ];

    return (
        <div className="testimonials-container">
            <h2 className="testimonials-title">Stories from our valued customers!</h2>
            
            <div className="testimonials-slider">
                <div className="testimonials-track">   
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <div className={`consultation-type ${testimonial.type.toLowerCase()}`}>
                                Consulted for {testimonial.type}
                            </div>

                            <div className="card-content">

                                <div className="user-info">
                                    <div className="user-avatar"></div>
                                    <div className="user-details">
                                        <div className="user-name">{testimonial.name}</div>
                                        <div className="user-location">{testimonial.location}</div>
                                    </div>
                                    <div className="user-date">{testimonial.date}</div>
                                </div>

                                <div className="rating">
                                    {'★'.repeat(testimonial.rating)}
                                    {'☆'.repeat(5 - testimonial.rating)}
                                </div>

                                <h3 className="review-title">"{testimonial.title}"</h3>
                                <p className="review-text">{testimonial.review}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="dots">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        className='dot'
                    />
                ))}
            </div>
        </div>
    )
};

export default Reviews;
