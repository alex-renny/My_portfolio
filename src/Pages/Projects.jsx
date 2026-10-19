import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const filters = ['All', 'Cyber Security', 'Web Apps', 'Full Stack', 'UI/UX'];

  const projects = [
    {
      id: 0,
      title: 'SentinelX IDPS',
      description: 'A security-focused project exploring network monitoring, intrusion detection, and threat response. SentinelX is being developed as a practical IDPS with a focus on clear alerts and useful investigation workflows.',
      image: '/ChatGPT Image May 30, 2026, 03_02_50 AM.png',
      category: 'Cyber Security',
      technologies: ['Python', 'Machine Learning', 'Network Security', 'FastAPI'],
      links: {
        github: null,
        live: null,
      },
      featured: true,
    },
    {
      id: 6,
      title: 'ReSender — Chat App',
      description: 'A modern web chat application with user-friendly design where you can communicate through messages, voice mails, and images securely.',
      image: '/Screenshot 2026-08-14 102613.png',
      category: 'Web Apps',
      technologies: ['React', 'Storybook', 'TypeScript'],
      links: {
        github: 'https://github.com/alex-renny/ChatVerse',
        live: 'https://chat-verse-blond.vercel.app',
      },
      featured: false,
    },
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React, featuring advanced animations and a dark cybersecurity theme.',
      image: '/Portfolio.png',
      category: 'UI/UX',
      technologies: ['React', 'CSS3', 'Vite'],
      links: {
        github: 'https://github.com/alex-renny/My_portfolio',
        live: 'https://alex-001.vercel.app/',
      },
      featured: true,
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'A full e-commerce platform featuring product browsing, shopping cart, secure user authentication, and a fully responsive design.',
      image: '/Ecom.png',
      category: 'Full Stack',
      technologies: ['Python', 'SQLite', 'Django'],
      links: {
        github: 'https://github.com/alex-renny/Ecom',
        live: 'https://ecom-u76h.vercel.app/',
      },
      featured: true,
    },
    {
      id: 3,
      title: 'Video Platform',
      description: 'A platform where creators can upload vlogs, shorts, and content videos with a clean, modern interface.',
      image: '/VideoWeb.png',
      category: 'Full Stack',
      technologies: ['React', 'Node.js', 'MongoDB'],
      links: {
        github: 'https://github.com/alex-renny/Anivortex',
        live: 'https://anivortex-kk7k.vercel.app/',
      },
      featured: false,
    },
    {
      id: 4,
      title: "Valentine's Web",
      description: 'A themed website featuring competition modules and registration interfaces with elegant animations.',
      image: '/Valentine.png',
      category: 'UI/UX',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      links: {
        github: 'https://github.com/alex-renny/Valentine-s-Web2.0',
        live: 'https://alex-renny.github.io/Valentine-s-Web2.0/',
      },
      featured: false,
    },
    {
      id: 5,
      title: 'Event Webpage',
      description: 'A dynamic webpage showcasing upcoming event and program details with a clean, interactive layout.',
      image: '/Event_Web.png',
      category: 'UI/UX',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      links: {
        github: 'https://github.com/alex-renny/Event-Project',
        live: 'https://alex-renny.github.io/Event-Project/',
      },
      featured: false,
    },
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  const GithubIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );

  const ExternalIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <div className="header-label">
            <span className="label-dot"></span>
            <span className="label-text">Portfolio</span>
            <span className="label-dot"></span>
          </div>
          <h2 className="section-title">
            Featured <span className="highlight">Projects</span>
          </h2>
          <p className="section-subtitle">
            Selected work across cyber security, web development, and product design. SentinelX IDPS is currently in development.
          </p>
        </div>

        <div className="filter-bar">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => { setActiveFilter(filter); setShowAll(false); }}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visibleProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${isVisible ? 'visible' : ''} ${project.featured ? 'featured' : ''}`}
              style={{ '--animation-delay': `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
                <div className="project-overlay">
                  <div className="overlay-links">
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="overlay-link">
                        <GithubIcon /> Code
                      </a>
                    )}
                    {project.links.live && (
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="overlay-link live">
                        <ExternalIcon /> Demo
                      </a>
                    )}
                  </div>
                </div>
                <div className="project-badges">
                  {project.featured && (
                    <span className="featured-badge">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="10" height="10">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      Featured
                    </span>
                  )}
                  <span className={`category-badge ${project.category === 'Cyber Security' ? 'security' : ''}`}>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      <span className="tag-dot"></span>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <GithubIcon /> Source
                    </a>
                  )}
                  {project.links.live && (
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="project-link live-link">
                      <ExternalIcon /> Live Demo
                    </a>
                  )}
                  {!project.links.live && (
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', padding: '6px 0' }}>
                      🔒 Private / In Development
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}

          {filteredProjects.length === 0 && (
            <div className="no-projects">
              <div className="no-projects-icon">🔍</div>
              <h3>No projects found</h3>
              <p>Try selecting a different category.</p>
            </div>
          )}
        </div>

        {filteredProjects.length > 3 && (
          <div className="projects-cta">
            <button className="projects-view-more" onClick={() => setShowAll(value => !value)}>
              {showAll ? 'Show fewer projects' : `View more projects (${filteredProjects.length - 3})`}
              <span aria-hidden="true">{showAll ? '↑' : '↓'}</span>
            </button>
          </div>
        )}
      </div>

      <div className="projects-bg-deco">
        <div className="pb-circle c1"></div>
        <div className="pb-circle c2"></div>
      </div>
    </section>
  );
}

export default Projects;
