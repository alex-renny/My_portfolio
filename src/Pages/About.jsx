import React, { useEffect, useRef } from 'react';
import './About.css';

function About() {
  const parallaxRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleParallax = (e) => {
      if (parallaxRef.current) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        const moveX = (clientX - innerWidth / 2) / innerWidth * 20;
        const moveY = (clientY - innerHeight / 2) / innerHeight * 20;
        
        parallaxRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };

    const handleScroll = () => {
      if (imageRef.current) {
        const scrolled = window.scrollY;
        const rate = scrolled * 0.05;
        imageRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('mousemove', handleParallax);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleParallax);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-visual">
            <div className="image-wrapper" ref={imageRef}>
              <div className="image-container">
                <img
                  src="/WhatsApp Image 2024-08-26 at 1.40.39 PM.jpeg"
                  alt="Alex - Web Developer"
                  className="profile-image"
                />
                <div className="image-overlay"></div>
                <div className="image-border"></div>
              </div>
              
              <div className="experience-badge">
                <div className="badge-pulse"></div>
                <div className="badge-content">
                  <span className="badge-number">5+</span>
                  <span className="badge-label">Projects</span>
                </div>
              </div>
              
              <div className="floating-shapes" ref={parallaxRef}>
                <div className="shape shape-circle"></div>
                <div className="shape shape-triangle"></div>
                <div className="shape shape-square"></div>
                <div className="shape shape-dots"></div>
              </div>
            </div>
          </div>
          
          <div className="about-text">
            <div className="section-label reveal-text">
              <span className="label-dot"></span>
              <span className="label-text">About Me</span>
              <span className="label-line"></span>
            </div>
            
            <h2 className="about-heading reveal-text">
              <span className="heading-line-1">Crafting Digital</span>
              <span className="heading-line-2">
                <span className="highlight">Experiences</span> That Matter
              </span>
            </h2>
            
            <div className="about-description reveal-text">
              <p className="description-text">
                I'm a passionate web developer and 
                <span className="text-highlight"> Cyber Forensics student </span> 
                with a keen eye for design. Based in India, I specialize in building modern, 
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

            
            <div className="cta-group reveal-text">
              <a href="#projects" className="btn-primary ripple-btn">
                <span>View Projects</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="btn-shine"></div>
              </a>
              <a href="#contact" className="btn-secondary ripple-btn">
                <span>Let's Talk</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M2.5 5.83333L10 10.4167L17.5 5.83333M2.5 14.1667L10 10.4167L17.5 14.1667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="btn-shine"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="background-elements">
        <div className="grid-overlay"></div>
        <div className="accent-circle circle-1"></div>
        <div className="accent-circle circle-2"></div>
        <div className="accent-circle circle-3"></div>
        <div className="floating-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              '--x': `${Math.random() * 100}%`,
              '--y': `${Math.random() * 100}%`,
              '--size': `${Math.random() * 4 + 2}px`,
              '--duration': `${Math.random() * 10 + 10}s`,
              '--delay': `${Math.random() * 5}s`
            }}></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;