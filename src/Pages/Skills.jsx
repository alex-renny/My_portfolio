import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

function Skills() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const skills = [
    {
      id: 1, title: 'Cyber Security', color: '#10b981', level: 88,
      description: 'Network security, ethical hacking & forensics',
      icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>),
    },
    {
      id: 2, title: 'React', color: '#61dafb', level: 85,
      description: 'Modern UI development with hooks & state management',
      icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/></svg>),
    },
    {
      id: 3, title: 'JavaScript', color: '#f7df1e', level: 90,
      description: 'ES6+, async programming & DOM manipulation',
      icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="2"/><path d="M7 17c0 1.7 1.3 2 2 2s2-.3 2-2v-6M14 11h4M16 11v6"/></svg>),
    },
    {
      id: 4, title: 'Python', color: '#3776ab', level: 80,
      description: 'Scripting, automation, ML & security tools',
      icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C8 2 7 4 7 6v2h5v1H5c-2 0-3 1-3 3s1 3 3 3h1v-2H5c-.6 0-1-.4-1-1s.4-1 1-1h7v-1h2V7h3c2 0 3-1 3-3s-1-2-3-2h-5z"/><circle cx="10" cy="5" r="1"/><path d="M12 22c4 0 5-2 5-4v-2h-5v-1h7c2 0 3-1 3-3s-1-3-3-3h-1v2h1c.6 0 1 .4 1 1s-.4 1-1 1H12v1h-2v5h3z"/><circle cx="14" cy="19" r="1"/></svg>),
    },
    {
      id: 5, title: 'UI/UX Design', color: '#8b5cf6', level: 82,
      description: 'Figma, prototyping & user-centered design',
      icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>),
    },
    {
      id: 6, title: 'Git & GitHub', color: '#f05032', level: 86,
      description: 'Version control, branching & collaboration',
      icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M6 9v6"/><path d="M9 6h6a3 3 0 0 1 3 3v6"/></svg>),
    },
    {
      id: 7, title: 'Problem Solving', color: '#ef4444', level: 92,
      description: 'Algorithms, debugging & optimization',
      icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14H12L11 22L21 10H12L13 2Z"/></svg>),
    },
    {
      id: 8, title: 'IDPS / Network', color: '#00d4ff', level: 78,
      description: 'Intrusion detection, packet analysis & network monitoring',
      icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>),
    },
  ];

  const categories = [
    {
      icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>),
      title: 'Frontend',
      desc: 'React, JavaScript, HTML/CSS, UI/UX',
    },
    {
      icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>),
      title: 'Security',
      desc: 'Cyber Forensics, IDPS, Ethical Hacking',
    },
    {
      icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>),
      title: 'Tools',
      desc: 'Git, VS Code, Figma, Wireshark',
    },
    {
      icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>),
      title: 'Backend',
      desc: 'Python, Node.js, APIs, Django',
    },
  ];

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <div className="header-label">
            <span className="label-dot"></span>
            <span className="label-text">My Skills</span>
            <span className="label-dot"></span>
          </div>
          <h2 className="section-title">
            Technologies &amp; <span className="highlight">Expertise</span>
          </h2>
          <p className="section-subtitle">
            Tools and technologies I've mastered through hands-on projects and continuous learning.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={skill.id}
              className={`skill-card ${isVisible ? '' : ''}`}
              style={{
                '--animation-delay': `${index * 0.08}s`,
                '--skill-color': skill.color,
              }}
            >
              <div className="skill-header">
                <div className="skill-icon-wrapper" style={{ background: `${skill.color}15` }}>
                  <div className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                </div>
                <div className="skill-level-badge" style={{ background: `${skill.color}20`, color: skill.color }}>
                  {skill.level}%
                </div>
              </div>

              <div className="skill-info">
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </div>

              <div className="skill-progress-wrapper">
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}aa)`,
                      transition: `width 1s ${index * 0.08}s ease`,
                    }}
                  >
                    <div className="progress-shine"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="skill-categories">
          {categories.map((cat, i) => (
            <div className="category-card" key={i}>
              <div className="category-icon">{cat.icon}</div>
              <div>
                <h4>{cat.title}</h4>
                <p>{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-bg-deco">
        <div className="sk-circle c1"></div>
        <div className="sk-circle c2"></div>
      </div>
    </section>
  );
}

export default Skills;