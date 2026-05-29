import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

function Skills() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = [
    {
      id: 1,
      title: 'React',
      description: 'Modern UI development with hooks & state management',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1a11 11 0 0 1 0 22 11 11 0 0 1 0-22"/>
          <path d="M12 1a11 11 0 0 0 0 22 11 11 0 0 0 0-22"/>
        </svg>
      ),
      color: '#61dafb',
      level: 85
    },
    {
      id: 2,
      title: 'JavaScript',
      description: 'ES6+, async programming & DOM manipulation',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="2"/>
          <path d="M8 18l2-7-2-2h2l1 3 1-3h2l-2 2 2 7" stroke="white" strokeWidth="1" fill="white"/>
        </svg>
      ),
      color: '#f7df1e',
      level: 90
    },
    {
      id: 3,
      title: 'Python',
      description: 'Data analysis, automation & scripting solutions',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/>
          <path d="M11 16c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/>
          <path d="M13 8c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/>
        </svg>
      ),
      color: '#3776ab',
      level: 80
    },
    {
      id: 4,
      title: 'Cyber Security',
      description: 'Network security, ethical hacking & forensics',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      ),
      color: '#10b981',
      level: 88
    },
    {
      id: 5,
      title: 'UI/UX Design',
      description: 'Figma, prototyping & user-centered design',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <line x1="3" y1="9" x2="21" y2="9"/>
          <line x1="9" y1="21" x2="9" y2="9"/>
        </svg>
      ),
      color: '#8b5cf6',
      level: 82
    },
    {
      id: 6,
      title: 'Problem Solving',
      description: 'Algorithms, debugging & optimization skills',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z"/>
        </svg>
      ),
      color: '#ef4444',
      level: 92
    },
    {
      id: 7,
      title: 'Git & GitHub',
      description: 'Version control, collaboration & CI/CD',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="4"/>
          <circle cx="6" cy="6" r="2"/>
          <circle cx="18" cy="6" r="2"/>
          <circle cx="6" cy="18" r="2"/>
          <circle cx="18" cy="18" r="2"/>
          <line x1="8" y1="8" x2="10" y2="10"/>
          <line x1="14" y1="10" x2="16" y2="8"/>
          <line x1="8" y1="16" x2="10" y2="14"/>
          <line x1="14" y1="14" x2="16" y2="16"/>
        </svg>
      ),
      color: '#f05032',
      level: 86
    },
    {
      id: 8,
      title: 'Adaptability',
      description: 'Quick learning & flexible approach to new tech',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      ),
      color: '#f59e0b',
      level: 94
    }
  ];

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      {/* Cursor Glow */}
      <div 
        className="cursor-follow"
        style={{
          '--mouse-x': `${mousePosition.x}px`,
          '--mouse-y': `${mousePosition.y}px`
        }}
      ></div>

      <div className="container">
        <div className="section-header">
          <div className="header-label">
            <span className="label-dot"></span>
            <span className="label-text">My Skills</span>
            <span className="label-dot"></span>
          </div>
          <h2 className="section-title">
            <span className="title-line-1">Technologies &</span>
            <span className="title-line-2">
              <span className="highlight">Expertise</span>
            </span>
          </h2>
          <p className="section-subtitle">
            Tools and technologies I've mastered through hands-on projects and continuous learning.
          </p>
        </div>

        <div className="skills-container">
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div 
                key={skill.id} 
                className="skill-card"
                style={{ '--animation-delay': `${index * 0.08}s` }}
              >
                <div className="skill-card-inner">
                  <div className="skill-header">
                    <div className="skill-icon-wrapper" style={{ background: `${skill.color}15` }}>
                      <div className="skill-icon" style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                      <div className="icon-glow" style={{ background: skill.color }}></div>
                    </div>
                    <div className="skill-level-badge" style={{ background: skill.color, color: '#fff' }}>
                      {skill.level}%
                    </div>
                  </div>
                  
                  <div className="skill-info">
                    <h3 className="skill-title">{skill.title}</h3>
                    <p className="skill-description">{skill.description}</p>
                  </div>
                  
                  <div className="skill-progress-wrapper">
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ 
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}cc)`
                        }}
                      >
                        <div className="progress-shine"></div>
                      </div>
                    </div>
                  </div>

                  <div className="card-hover-effect" style={{ background: `linear-gradient(135deg, ${skill.color}08, ${skill.color}03)` }}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Skill Categories */}
          <div className="skill-categories">
            <div className="category-card">
              <div className="category-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <h4>Frontend</h4>
              <p>React, JavaScript, HTML/CSS, UI/UX</p>
            </div>
            
            {/* <div className="category-card">
              <div className="category-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h4>Backend</h4>
              <p>Python, Node.js, APIs, Databases</p>
            </div>
            
            <div className="category-card">
              <div className="category-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h4>Security</h4>
              <p>Cyber Security, Forensics, Ethical Hacking</p>
            </div> */}
            
            <div className="category-card">
              <div className="category-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h4>Tools</h4>
              <p>Git, VS Code, Figma, Terminal</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="background-decoration">
        <div className="grid-pattern"></div>
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              '--x': `${Math.random() * 100}%`,
              '--y': `${Math.random() * 100}%`,
              '--size': `${Math.random() * 3 + 1}px`,
              '--duration': `${Math.random() * 10 + 10}s`,
              '--delay': `${Math.random() * 5}s`
            }}></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;