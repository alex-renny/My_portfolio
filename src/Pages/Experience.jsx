import React, { useEffect, useRef, useState } from 'react';
import './Experience.css';

function Experience() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const timelineRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Tilt effect for cards
      cardsRef.current.forEach((card, index) => {
        if (card) {
          const rect = card.getBoundingClientRect();
          const cardCenterX = rect.left + rect.width / 2;
          const cardCenterY = rect.top + rect.height / 2;
          const deltaX = (e.clientX - cardCenterX) / rect.width;
          const deltaY = (e.clientY - cardCenterY) / rect.height;
          
          const tiltX = deltaY * -5;
          const tiltY = deltaX * 5;
          
          card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(10px)`;
        }
      });
    };

    const handleScroll = () => {
      if (timelineRef.current) {
        const timelineRect = timelineRef.current.getBoundingClientRect();
        const timelineHeight = timelineRect.height;
        const scrolled = window.scrollY - timelineRect.top + window.innerHeight;
        const progress = Math.min(Math.max(scrolled / (timelineHeight + window.innerHeight), 0), 1);
        
        const line = timelineRef.current.querySelector('.timeline-line-fill');
        if (line) {
          line.style.height = `${progress * 100}%`;
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const experiences = [
    {
      id: '01',
      title: 'Internship Experience',
      organization: 'TechWingsys',
      role: 'Web Designing Intern',
      color: '#10b981',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      ),
      description: 'Completed a hands-on internship focused on web development, learning industry best practices and modern development workflows.',
      achievements: [
        'Built responsive web applications',
        'Collaborated with development team',
        'Learned Agile methodologies',
        'Gained real-world project experience'
      ],
      tags: ['React', 'JavaScript', 'Git', 'Agile']
    },
    {
      id: '02',
      title: 'Hackathon Achievements',
      organization: '4 Hackathons',
      role: 'Problem Solver & Developer',
      color: '#3b82f6',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      ),
      description: 'Participated in 4 hackathons, developing innovative solutions under pressure and collaborating with diverse teams to solve real-world challenges.',
      achievements: [
        'Built AI-powered solutions',
        '24-hour coding challenges',
        'Team leadership experience'
      ],
      tags: ['Problem Solving', 'Innovation', 'Teamwork', 'Rapid Prototyping']
    },
    {
      id: '03',
      title: 'Certifications',
      organization: '5+ Certifications',
      role: 'Continuous Learner',
      color: '#f59e0b',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        </svg>
      ),
      description: 'Earned multiple professional certifications in cybersecurity, web development, and emerging technologies to enhance my skill set.',
      achievements: [
        'Internship Certificate in React',
        'Nasa Space Apps Certification',
        'IIT JavaScript Certification',
        'Microsoft Word Certification'
      ],
      tags: ['React', 'Javascript', 'Web Dev', 'Professional']
    },
    {
      id: '04',
      title: 'Academic Excellence',
      organization: 'BSc Cyber Forensics',
      role: '3rd Year | 5th Semester',
      color: '#8b5cf6',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5"/>
        </svg>
      ),
      description: 'Pursuing a Bachelor\'s degree in Cyber Forensics with a strong focus on digital investigation, security analysis, and forensic technologies.',
      achievements: [
        // 'CGPA: 8.5/10',
        'Specialized in Cyber Forensics',
        'Network Security Projects',
        'Malware Analysis Research'
      ],
      tags: ['Digital Forensics', 'Security', 'Research', 'Academics']
    }
  ];

  return (
    <section id="experience" className="experience-section">
      {/* Cursor Follow Effect */}
      <div 
        className="cursor-glow"
        style={{
          '--mouse-x': `${mousePosition.x}px`,
          '--mouse-y': `${mousePosition.y}px`
        }}
      ></div>

      <div className="container">
        <div className="section-header">
          <div className="header-label">
            <span className="label-dot"></span>
            <span className="label-text">My Journey</span>
            <span className="label-dot"></span>
          </div>
          <h2 className="section-title">
            <span className="title-line-1">Experience &</span>
            <span className="title-line-2">
              <span className="highlight">Achievements</span>
            </span>
          </h2>
          <p className="section-subtitle">
            A showcase of my academic journey, certifications, hackathons, and hands-on learning experiences.
          </p>
        </div>

        <div className="experience-timeline" ref={timelineRef}>
          <div className="timeline-line">
            <div className="timeline-line-fill"></div>
            <div className="timeline-dots">
              <div className="timeline-dot"></div>
              <div className="timeline-dot"></div>
              <div className="timeline-dot"></div>
              <div className="timeline-dot"></div>
            </div>
          </div>
          
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className="experience-card"
              ref={el => cardsRef.current[index] = el}
              style={{ '--animation-delay': `${index * 0.15}s` }}
            >
              <div className="card-marker" style={{ background: exp.color }}>
                <div className="marker-pulse"></div>
                <span className="marker-number">{exp.id}</span>
              </div>
              
              <div className="card-content">
                <div className="card-glow" style={{ background: `${exp.color}10` }}></div>
                
                <div className="card-header">
                  <div className="company-info">
                    <div className="company-logo" style={{ background: `${exp.color}15`, color: exp.color }}>
                      <div className="logo-icon">{exp.icon}</div>
                    </div>
                    <div>
                      <h3 className="company-name" style={{ color: exp.color }}>
                        {exp.organization}
                      </h3>
                      <p className="role-title">{exp.role}</p>
                    </div>
                  </div>
                  <span className="duration-badge" style={{ background: `${exp.color}15`, color: exp.color }}>
                    {exp.title}
                  </span>
                </div>
                
                <p className="card-description">{exp.description}</p>
                
                <div className="achievements-list">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="achievement-item">
                      <svg className="achievement-icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
                
                <div className="card-footer">
                  <div className="tech-tags">
                    {exp.tags.map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="card-decoration">
                  <div className="decoration-line" style={{ background: exp.color }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="cta-wrapper">
          <a href="#contact" className="cta-button">
            <span>Let's Connect</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="btn-shine"></div>
          </a>
        </div>
      </div>
      
      <div className="background-decoration">
        <div className="grid-pattern"></div>
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
        <div className="gradient-blob blob-3"></div>
        <div className="floating-particles">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="floating-particle" style={{
              '--x': `${Math.random() * 100}%`,
              '--y': `${Math.random() * 100}%`,
              '--size': `${Math.random() * 3 + 1}px`,
              '--duration': `${Math.random() * 8 + 8}s`,
              '--delay': `${Math.random() * 5}s`
            }}></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;