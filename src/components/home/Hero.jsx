import React, { Suspense, lazy } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

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
        <div className="hero-visual"><Suspense fallback={<div className="spline-loading">Loading 3D preview...</div>}><Spline scene="https://prod.spline.design/ABrQHVpts78MTmiH/scene.splinecode" /></Suspense></div>
      </div>
    </section>
  );
}
