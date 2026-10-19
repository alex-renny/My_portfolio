import React from 'react';
import './Home.css';

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="home-text">
          <div className="home-badge"><span className="badge-dot" /> Available for opportunities</div>
          <p className="home-greeting">CYBER FORENSICS · SOFTWARE DEVELOPMENT</p>
          <h1 className="home-name">Alex <span className="name-gradient">Renny</span></h1>
          <p className="home-role">Building useful products with a security-first mindset.</p>
          <p className="home-description">I’m a Cyber Forensics student and developer focused on secure digital experiences, thoughtful interfaces, and practical tools. Currently building <strong>SentinelX IDPS</strong>.</p>
          <div className="home-cta">
            <a href="#projects" className="btn-primary">Explore my work <span aria-hidden="true">↗</span></a>
            <a href="#apps" className="btn-secondary">Apps &amp; downloads <span aria-hidden="true">↓</span></a>
          </div>
          <div className="home-stats">
            <div className="stat-item"><span className="stat-value">7+</span><span className="stat-label">Projects</span></div>
            <div className="stat-divider" />
            <div className="stat-item"><span className="stat-value">4</span><span className="stat-label">Hackathons</span></div>
            <div className="stat-divider" />
            <div className="stat-item"><span className="stat-value">8+</span><span className="stat-label">Certifications</span></div>
          </div>
        </div>
        <div className="home-visual">
          <div className="hero-photo-wrap"><img src="/1780137331105-Photoroom.png" alt="Alex Renny" className="hero-photo" /></div>
          <div className="hero-note"><span className="hero-note-mark">✳</span><span><strong>Curious by nature.</strong><br/>Builder by practice.</span></div>
          <div className="hero-index">PORTFOLIO <span>2026</span></div>
        </div>
      </div>
      <a href="#about" className="scroll-indicator"><span>SCROLL TO EXPLORE</span><i aria-hidden="true">↓</i></a>
    </section>
  );
}

export default Home;
