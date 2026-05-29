import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    {
      id: 1,
      title: 'React Development',
      description: 'Building scalable and performant user interfaces with React, Redux, and modern hooks architecture.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1a11 11 0 0 1 0 22 11 11 0 0 1 0-22"/>
          <path d="M12 1a11 11 0 0 0 0 22 11 11 0 0 0 0-22"/>
        </svg>
      ),
      color: '#61dafb',
      level: 95
    },
    {
      id: 2,
      title: 'Adaptability',
      description: 'Quickly adapting to new technologies, frameworks, and changing project requirements with ease.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      ),
      color: '#10b981',
      level: 90
    },
    {
      id: 3,
      title: 'Internet Technologies',
      description: 'Deep understanding of web protocols, APIs, cloud services, and modern internet infrastructure.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      ),
      color: '#3b82f6',
      level: 88
    },
    {
      id: 4,
      title: 'English Communication',
      description: 'Excellent written and verbal English communication skills for effective collaboration and documentation.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      ),
      color: '#f59e0b',
      level: 92
    },
    {
      id: 5,
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing user interfaces with a focus on user experience.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <line x1="3" y1="9" x2="21" y2="9"/>
          <line x1="9" y1="21" x2="9" y2="9"/>
        </svg>
      ),
      color: '#8b5cf6',
      level: 87
    },
    {
      id: 6,
      title: 'Problem Solving',
      description: 'Analytical approach to debugging and solving complex technical challenges efficiently.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      ),
      color: '#ef4444',
      level: 93
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <div className="header-label">
            <span className="label-line"></span>
            <span className="label-text">My Skills</span>
          </div>
          <h2 className="section-title">
            <span className="title-line-1">Technologies &</span>
            <span className="title-line-2">
              <span className="highlight">Expertise</span>
            </span>
          </h2>
          <p className="section-subtitle">
            With expertise across multiple domains, I bring comprehensive solutions to every project.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div 
              key={skill.id} 
              className="skill-card"
              style={{ '--animation-delay': `${index * 0.1}s` }}
            >
              <div className="skill-card-inner">
                <div className="skill-icon-wrapper" style={{ background: `${skill.color}15` }}>
                  <div className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <div className="skill-level-ring" style={{ 
                    background: `conic-gradient(${skill.color} ${skill.level * 3.6}deg, #f1f5f9 ${skill.level * 3.6}deg)` 
                  }}>
                    <div className="ring-inner">
                      <span className="level-text">{skill.level}%</span>
                    </div>
                  </div>
                </div>
                
                <div className="skill-content">
                  <h3 className="skill-title">{skill.title}</h3>
                  <p className="skill-description">{skill.description}</p>
                  
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ 
                        width: `${skill.level}%`,
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}cc)`
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="additional-info">
          <div className="info-card">
            <div className="info-icon">🚀</div>
            <h4>Always Learning</h4>
            <p>Constantly updating my skills with the latest technologies and best practices</p>
          </div>
          <div className="info-card">
            <div className="info-icon">💡</div>
            <h4>Creative Solutions</h4>
            <p>Finding innovative approaches to complex problems with elegant solutions</p>
          </div>
          <div className="info-card">
            <div className="info-icon">🤝</div>
            <h4>Team Player</h4>
            <p>Collaborating effectively with cross-functional teams worldwide</p>
          </div>
        </div>
      </div>
      
      <div className="background-decoration">
        <div className="grid-pattern"></div>
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>
    </section>
  );
}

export default Skills;