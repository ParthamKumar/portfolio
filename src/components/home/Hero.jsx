import React from 'react';
import ResponsiveSpline from '../common/ResponsiveSpline';

export default function Hero({ typedRole }) {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-tagline">{typedRole}</span>
          <h1 className="hero-title">Hello, I'm<br />Partham Kumar</h1>
          <div className="profile-section"><p className="bio-text">AI Engineer and Full-Stack Developer passionate about building intelligent solutions that solve real-world problems.</p></div>
          <div className="hero-buttons">
            <a className="btn-primary" href="#projects">View My Work</a>
            <a className="btn-secondary" href="#contact">Get In Touch</a>
          </div>
        </div>
        <ResponsiveSpline
          className="hero-visual"
          scene="https://prod.spline.design/ABrQHVpts78MTmiH/scene.splinecode"
          fallbackImage="/images/me.png"
          alt="Partham Kumar portfolio portrait"
        />
      </div>
    </section>
  );
}
