import React, { useEffect, useRef } from 'react';
import './Experience.css';

function Experience() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        const scrolled = window.innerHeight - rect.top;
        const progress = Math.min(Math.max(scrolled / rect.height, 0), 1);
        const line = timelineRef.current.querySelector('.timeline-line-fill');
        if (line) line.style.height = `${progress * 100}%`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      description: 'Completed a hands-on internship focused on web development, learning industry best practices, modern development workflows, and building production-ready interfaces.',
      achievements: [
        'Built responsive web applications with React',
        'Collaborated with a senior development team',
        'Learned Agile methodologies & sprints',
        'Gained real-world project experience',
      ],
      tags: ['React', 'JavaScript', 'Git', 'Agile'],
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
      description: 'Participated in 4 hackathons, developing innovative solutions under time pressure and collaborating with diverse teams to solve real-world challenges.',
      achievements: [
        'Built AI-powered solutions in 24 hours',
        'Led team strategy & technical planning',
        'Delivered working prototypes under pressure',
      ],
      tags: ['Problem Solving', 'Innovation', 'Teamwork', 'Rapid Prototyping'],
    },
    {
      id: '03',
      title: 'Certifications',
      organization: '8+ Certifications',
      role: 'Continuous Learner',
      color: '#f59e0b',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        </svg>
      ),
      description: 'Earned 8+ professional certifications in cybersecurity, web development, and emerging technologies to continuously sharpen my skill set.',
      achievements: [
        'Internship Certificate in React (TechWingsys)',
        'NASA Space Apps Certification',
        'IIT JavaScript Certification',
        'Microsoft Word Certification',
      ],
      tags: ['React', 'JavaScript', 'Cybersecurity', 'Professional'],
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
      description: 'Pursuing a Bachelor\'s degree in Cyber Forensics with a strong focus on digital investigation, security analysis, and forensic technologies. Built SentinelX IDPS as a major project.',
      achievements: [
        'Specialized in Cyber Forensics & IDPS',
        'Network Security research & projects',
        'Malware analysis & digital forensics',
      ],
      tags: ['Digital Forensics', 'Security', 'IDPS', 'Research'],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <div className="header-label">
            <span className="label-dot"></span>
            <span className="label-text">My Journey</span>
            <span className="label-dot"></span>
          </div>
          <h2 className="section-title">
            Experience &amp; <span className="highlight">Achievements</span>
          </h2>
          <p className="section-subtitle">
            A timeline of my academic journey, certifications, hackathons, and hands-on learning experiences.
          </p>
        </div>

        <div className="experience-timeline" ref={timelineRef}>
          <div className="timeline-line">
            <div className="timeline-line-fill"></div>
          </div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="experience-card"
              style={{ '--animation-delay': `${index * 0.15}s` }}
            >
              <div className="card-marker" style={{ background: exp.color }}>
                <div className="marker-pulse" style={{ borderColor: exp.color }}></div>
                <span className="marker-number">{exp.id}</span>
              </div>

              <div className="card-content" style={{ '--card-color': exp.color }}>
                <div className="card-header">
                  <div className="company-info">
                    <div className="company-logo" style={{ background: `${exp.color}15`, color: exp.color }}>
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="company-name" style={{ color: exp.color }}>{exp.organization}</h3>
                      <p className="role-title">{exp.role}</p>
                    </div>
                  </div>
                  <span className="duration-badge" style={{ background: `${exp.color}15`, color: exp.color }}>
                    {exp.title}
                  </span>
                </div>

                <p className="card-description">{exp.description}</p>

                <div className="achievements-list">
                  {exp.achievements.map((a, i) => (
                    <div key={i} className="achievement-item">
                      <svg className="achievement-icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>{a}</span>
                    </div>
                  ))}
                </div>

                <div className="tech-tags">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>

                <div className="decoration-line" style={{ background: exp.color }}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="exp-cta">
          <a href="#contact" className="btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
            Let's Connect
          </a>
        </div>
      </div>

      <div className="exp-bg-deco">
        <div className="exp-blob b1"></div>
        <div className="exp-blob b2"></div>
      </div>
    </section>
  );
}

export default Experience;