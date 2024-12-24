import React from "react";
import "./Download.css";
import { group, as, gp } from '../../assets'

const Download = () => {
  return (
    <div className="app-landing">
      <div className="content-section">
        <h1 className="app-title">Amrutam Home App</h1>

        <p className="app-description">
          The Amrutam Home App is your one-stop app for all things Ayurveda!
          Apart from mimicking the significant characteristics of our website,
          this app offers a wide range of additional features.
        </p>

        <h2 className="consultation-title">
          Get A Diet & Lifestyle Consultation With Ayurvedic Experts Across The
          Globe
        </h2>

        <div className="download-section">
          <h2 className="download-title">Get The App Now</h2>
          <div className="store-buttons">
            <a href="#" className="store-link">
              <img
                src={gp}
                alt="Get it on Google Play"
                className="store-button"
              />
            </a>
            <a href="#" className="store-link">
              <img
                src={as}
                alt="Download on the App Store"
                className="store-button"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="phone-section">
        <img
          src={group}
          alt="Amrutam App Interface"
          className="phone-mockup"
        />
      </div>
    </div>
  );
};

export default Download;
