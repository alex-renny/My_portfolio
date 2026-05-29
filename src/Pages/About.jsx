import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-visual">
            <div className="image-wrapper">
              <div className="image-container">
                <img
                  src="/WhatsApp Image 2024-08-26 at 1.40.39 PM.jpeg"
                  alt="Alex - Web Developer"
                  className="profile-image"
                />
                <div className="image-border"></div>
              </div>
              
              <div className="experience-badge">
                <div className="badge-content">
                  <span className="badge-number">5+</span>
                  <span className="badge-label">Years of<br/>Experience</span>
                </div>
              </div>
              
              <div className="tech-stack-float">
                <div className="tech-icons">
                  <span className="tech-icon" title="React">⚛️</span>
                  <span className="tech-icon" title="Node.js">🟢</span>
                  <span className="tech-icon" title="JavaScript">💛</span>
                  <span className="tech-icon" title="TypeScript">💙</span>
                </div>
              </div>
              
              <div className="shape-decoration shape-1"></div>
              <div className="shape-decoration shape-2"></div>
            </div>
          </div>
          
          <div className="about-text">
            <div className="section-label">
              <span className="label-line"></span>
              <span className="label-text">About Me</span>
            </div>
            
            <h2 className="about-heading">
              <span className="heading-line-1">Crafting Digital</span>
              <span className="heading-line-2">
                <span className="highlight">Experiences</span> That Matter
              </span>
            </h2>
            
            <div className="about-description">
              <p className="description-text">
                I'm a passionate web developer with a keen eye for design and a love for creating 
                seamless digital experiences. Based in India, I specialize in building modern, 
                responsive web applications that solve real-world problems.
              </p>
              <p className="description-text secondary">
                With expertise in both frontend and backend technologies, I bring ideas to life 
                through clean code and intuitive design. Every project is an opportunity to create 
                something extraordinary.
              </p>
            </div>
            
            <div className="skills-highlight">
              <div className="skill-item">
                <div className="skill-icon-wrapper">
                  <svg className="skill-icon" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="skill-info">
                  <h4>Full Stack Development</h4>
                  <p>End-to-end web solutions with modern tech stack</p>
                </div>
              </div>
              
              <div className="skill-item">
                <div className="skill-icon-wrapper">
                  <svg className="skill-icon" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2"/>
                    <path d="M3 9H21" stroke="currentColor" strokeWidth="2"/>
                    <path d="M9 21V9" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="skill-info">
                  <h4>UI/UX Design</h4>
                  <p>Creating intuitive and beautiful user interfaces</p>
                </div>
              </div>
              
              <div className="skill-item">
                <div className="skill-icon-wrapper">
                  <svg className="skill-icon" viewBox="0 0 24 24" fill="none">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="skill-info">
                  <h4>Performance Optimization</h4>
                  <p>Lightning-fast, optimized web applications</p>
                </div>
              </div>
            </div>
            
            <div className="cta-group">
              <a href="#projects" className="btn-primary">
                <span>View Projects</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#contact" className="btn-secondary">
                <span>Let's Talk</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M2.5 5.83333L10 10.4167L17.5 5.83333M2.5 14.1667L10 10.4167L17.5 14.1667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="background-elements">
        <div className="grid-overlay"></div>
        <div className="accent-circle circle-1"></div>
        <div className="accent-circle circle-2"></div>
        <div className="dot-pattern"></div>
      </div>
    </section>
  );
}

export default About;