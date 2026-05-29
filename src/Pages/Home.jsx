import React from 'react';
import './Home.css';

function Home() {
  return (
    <section id="home" className="home-section">
      {/* Video Background */}
      <div className="video-background">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="background-video"
        >
          <source src="/Bg_looping_vid.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>

      <div className="container">
        <div className="home-content">
          <div className="home-text">
            <div className="greeting-wrapper">
              <span className="greeting-line"></span>
              <span className="greeting-text">Hello, I'm</span>
            </div>
            
            <h1 className="name-title">
              <span className="name-first">Alex</span>
              <span className="name-last">Renny</span>
            </h1>
            
            <div className="role-wrapper">
              <div className="typing-container">
                <span className="static-text">I'm a </span>
                <div className="dynamic-text-wrapper">
                  <span className="dynamic-text">
                    {/* Cyber Forensics Student */}
                  </span>
                </div>
              </div>
            </div>
            
            <p className="description">
              Crafting innovative digital experiences with clean code and creative design. 
              Passionate about building solutions that make a difference.
            </p>
            
            <div className="cta-buttons">
              <a href="#projects" className="btn btn-primary">
                <span>View My Work</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#contact" className="btn btn-secondary">
                <span>Get In Touch</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M2.5 5.83333L10 10.4167L17.5 5.83333M2.5 14.1667L10 10.4167L17.5 14.1667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
            
            <div className="social-proof">
              <div className="stats">
                <div className="stat-item">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Project Build</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">2</span>
                  <span className="stat-label">Internships</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">8+</span>
                  <span className="stat-label">Certificates</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="home-visual">
            <div className="profile-container">
              <div className="profile-shape">
                <div className="profile-image-wrapper">
                  <img
                    src="/WhatsApp Image 2024-08-26 at 1.40.39 PM.jpeg"
                    alt="Alex Renny - Portfolio"
                    className="profile-image"
                  />
                  <div className="image-glow"></div>
                </div>
              </div>
              <div className="floating-card card-1">
                <div className="card-icon">💻</div>
                <div className="card-text">
                  <small>Available for</small>
                  <strong>Freelance</strong>
                </div>
              </div>
              <div className="floating-card card-2">
                <div className="card-text">
                  <small>Cyber Forensics</small>
                  <strong>Student</strong>
                </div>
              </div>
              <div className="particle particle-1"></div>
              <div className="particle particle-2"></div>
              <div className="particle particle-3"></div>
              <div className="particle particle-4"></div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;