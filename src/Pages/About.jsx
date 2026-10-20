import React from 'react';
import './About.css';

function About() {
  const highlights = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      ),
      title: 'Cyber Security',
      desc: 'Forensics, ethical hacking & IDPS development'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
      title: 'Web Development',
      desc: 'React, full-stack & responsive interfaces'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <line x1="3" y1="9" x2="21" y2="9"/>
          <line x1="9" y1="21" x2="9" y2="9"/>
        </svg>
      ),
      title: 'UI/UX Design',
      desc: 'Intuitive, beautiful user experiences'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      ),
      title: 'App Development',
      desc: 'Building tools & APKs for real users'
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          {/* Visual */}
          <div className="about-visual">
            <div className="about-image-wrapper">
              <div className="about-image-frame">
                <img
                  src="/alex-about-cutout.png"
                  alt="Alex Renny, seated and gesturing with his hands"
                  className="about-image"
                />
                <div className="corner-br"></div>
              </div>

              <div className="about-badge">
                <div className="about-badge-pulse"></div>
                <div className="about-badge-text">
                  <strong>7+</strong>
                  <span>Projects Built</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="about-text">
            <div className="section-label">
              <span className="label-dot"></span>
              <span className="label-text">About Me</span>
              <span className="label-line"></span>
            </div>

            <h2 className="about-heading">
              Crafting Digital<br />
              <span className="highlight">Experiences</span> That Matter
            </h2>

            <div className="about-desc">
              <p>
                I'm a passionate
                <span className="text-highlight"> Cyber Forensics student </span>
                with a strong focus on web development and practical digital products.
                I enjoy building apps like <span className="text-highlight">ChatVerse</span>, a chat platform
                for real-time messages, voice notes, and image sharing, alongside web and mobile projects.
              </p>
              <p>
                My academic path is driven by curiosity about how systems work, how they can be secured,
                and how to create digital products people love. I enjoy turning ideas into real, functional
                solutions while continuously sharpening my skills.
              </p>
            </div>

            <div className="about-highlights">
              {highlights.map((h, i) => (
                <div className="highlight-item" key={i}>
                  <div className="hi-icon">{h.icon}</div>
                  <div className="hi-info">
                    <h4>{h.title}</h4>
                    <p>{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-cta">
              <a href="#projects" className="btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7.5 15L12.5 10L7.5 5"/>
                </svg>
                View Projects
              </a>
              <a href="#contact" className="btn-secondary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="about-bg-deco">
        <div className="about-bg-circle c1"></div>
        <div className="about-bg-circle c2"></div>
      </div>
    </section>
  );
}

export default About;
