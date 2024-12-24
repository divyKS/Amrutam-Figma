import React from 'react'
import './Discover.css'
import {frame2, frame3, frame4, frame5, frame6, frame7, lady} from '../../assets'

const Discover = () => {
    return (
        <div className="wrapper-discover">

            <div className='heading'>
                <h2 className="title">Discover Ayurveda's Magic With Us</h2>
                <p className="subtitle">
                    Ayurvedic treatment aims to balance your body and mind, bringing harmony and vitality. It's like a journey to better health using ancient wisdom, a totally effective approach for a better life.
                </p>
            </div>

            <div className="discover-container">
                <div className="center-content">
                    <img src={lady} alt="Woman meditating" className="center-image" />
                </div>
                
                <div className="info-block personalized-wellness">
                    <div>
                        <h3>Personalized Wellness</h3>
                        <p>Get treatments made just for you based on your individual doshas (body type)</p>
                    </div>
                    <img src={frame3} alt="Personalized Wellness" className="info-icon" />
                </div>
                
                <div className="info-block focus-prevention">
                    <div>
                        <h3>Focus on prevention</h3>
                        <p>Stop problems even before they start</p>
                    </div>
                    <img src={frame4} alt="Focus on prevention" className="info-icon" />
                </div>
                
                <div className="info-block mind-body">
                    <div>
                        <h3>Mind-Body Connection</h3>
                        <p>Keep your mind and body in sync for a happy life</p>
                    </div>
                    <img src={frame5} alt="Mind-Body Connection" className="info-icon" />
                </div>
                
                <div className="info-block holistic-healing">
                    <img src={frame2} alt="Holistic Healing" className="info-icon" />
                    <div>
                        <h3>Holistic Healing</h3>                        
                        <p>Fix the root problem for long-lasting health</p>
                    </div>
                </div>
                
                <div className="info-block natural-remedies">
                    <img src={frame7} alt="Natural Remedies" className="info-icon" />
                    <div>
                        <h3>Natural Remedies</h3>
                        <p>Using herbs and natural therapies for healing</p>
                    </div>
                </div>
                
                <div className="info-block boosting-immunity">
                    <img src={frame6} alt="Boosting immunity" className="info-icon" />
                    <div>
                        <h3>Boosting immunity</h3>
                        <p>Stay strong and healthy for life, not just for today</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Discover