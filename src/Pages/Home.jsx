import React from 'react';
import './Home.css';

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="home-content">
          <div className="home-text">
            <div className="greeting-wrapper">
              <span className="greeting-line"></span>
              <span className="greeting-text">Hello, I'm</span>
            </div>
            
            <h1 className="name-title">
              <span className="name-first">Your</span>
              <span className="name-last">Name</span>
            </h1>
            
            <div className="role-wrapper">
              <div className="typing-container">
                <span className="static-text">I'm a </span>
                <span className="dynamic-text">
                  <span>Full Stack Developer</span>
                  <span>UI/UX Designer</span>
                  <span>Problem Solver</span>
                </span>
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
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Years Exp</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">30+</span>
                  <span className="stat-label">Clients</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="home-visual">
            <div className="profile-container">
              <div className="profile-shape">
                <div className="profile-image-placeholder">
                  <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                    <circle cx="100" cy="80" r="40" fill="#E5E7EB"/>
                    <ellipse cx="100" cy="170" rx="60" ry="50" fill="#E5E7EB"/>
                  </svg>
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
                <div className="card-icon">⭐</div>
                <div className="card-text">
                  <small>Top Rated</small>
                  <strong>Developer</strong>
                </div>
              </div>
              <div className="blob-shape blob-1"></div>
              <div className="blob-shape blob-2"></div>
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
      
      <div className="background-decoration">
        <div className="grid-pattern"></div>
        <div className="gradient-orb gradient-orb-1"></div>
        <div className="gradient-orb gradient-orb-2"></div>
        <div className="gradient-orb gradient-orb-3"></div>
      </div>
    </section>
  );
}

export default Home;