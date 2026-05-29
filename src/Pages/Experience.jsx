import React from 'react';
import './Experience.css';

function Experience() {
  const experiences = [
    {
      id: '01',
      company: 'Google',
      role: 'Interaction Designer',
      color: '#10b981',
      description: 'I currently am the lead designer on the interaction design team for Google Play.',
      achievements: ['Led redesign of Google Play Store', 'Improved user engagement by 40%', 'Managed team of 5 designers']
    },
    {
      id: '02',
      company: 'Facebook',
      role: 'Product Designer',
      color: '#3b82f6',
      description: 'I\'ve worked on a wide variety of internal tools for Facebook over the past 6 years.',
      achievements: ['Designed internal analytics dashboard', 'Created design system components', 'Collaborated with cross-functional teams']
    },
    {
      id: '03',
      company: 'Dribbble',
      role: 'Graphic Designer',
      color: '#ec4899',
      description: 'I started my design career with Dribbble. I was in charge of creating illustrations for the platform.',
      achievements: ['Created 200+ custom illustrations', 'Featured in Dribbble\'s top designs', 'Built brand identity guidelines']
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <div className="header-label">
            <span className="label-line"></span>
            <span className="label-text">Work Experience</span>
          </div>
          <h2 className="section-title">
            <span className="title-line-1">Companies I've</span>
            <span className="title-line-2">
              <span className="highlight">Worked</span> With
            </span>
          </h2>
          <p className="section-subtitle">
            A journey through my professional career and the amazing teams I've been part of.
          </p>
        </div>

        <div className="experience-timeline">
          <div className="timeline-line"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className="experience-card"
              style={{ '--animation-delay': `${index * 0.2}s` }}
            >
              <div className="card-marker" style={{ background: exp.color }}>
                <span className="marker-number">{exp.id}</span>
              </div>
              
              <div className="card-content">
                <div className="card-header">
                  <div className="company-info">
                    <div className="company-logo" style={{ background: `${exp.color}15`, color: exp.color }}>
                      {exp.company.charAt(0)}
                    </div>
                    <div>
                      <h3 className="company-name" style={{ color: exp.color }}>
                        {exp.company}
                      </h3>
                      <p className="role-title">{exp.role}</p>
                    </div>
                  </div>
                  <span className="duration-badge">Present</span>
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
                    <span className="tag">Design Systems</span>
                    <span className="tag">User Research</span>
                    <span className="tag">Prototyping</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="cta-wrapper">
          <a href="#contact" className="cta-button">
            <span>Work With Me</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
      
      <div className="background-decoration">
        <div className="dot-grid"></div>
        <div className="gradient-blob blob-left"></div>
        <div className="gradient-blob blob-right"></div>
      </div>
    </section>
  );
}

export default Experience;