import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const filters = ['All', 'Web Apps', 'Cyber Security', 'Full Stack', 'UI/UX'];

  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and advanced animations.',
      image: './Portfolio.png',
      category: 'Web Apps',
      technologies: ['React', 'CSS3', 'JavaScript'],
      links: {
        github: 'https://github.com/alex-renny/My_portfolio',
        live: 'https://alex-001.vercel.app/'
      },
      featured: true
    },
    {
      id: 2,
      title: 'E-Com Website',
      description: 'A modern e-commerce platform featuring product browsing, shopping cart functionality, secure user authentication, and a responsive design for seamless online shopping experiences.',
      image: './Ecom.png',
      category: 'Web Apps',
      technologies: ['Python', 'SQLite', 'Django'],
      links: {
        github: 'https://github.com/alex-renny/Ecom',
        live: 'https://ecom-u76h.vercel.app/'
      },
      featured: true
    },
    {
      id: 3,
      title: 'Video Website',
      description: 'A platform where you can upload your vlogs,shots and content videos.',
      image: './VideoWeb.png',
      category: 'Web Apps',
      technologies: ['React', 'Node.js', 'MongoDB'],
      links: {
        github: 'https://github.com/alex-renny/Anivortex',
        live: 'https://anivortex-kk7k.vercel.app/'
      },
      featured: true
    },
    {
      id: 4,
      title: 'Valentines Web',
      description: 'A Website where you can see the competition modules and register interface.',
      image: './Valentine.png',
      category: 'Web Apps',
      technologies: ['Python', 'Nmap', 'FastAPI'],
      links: {
        github: 'https://github.com/alex-renny/Valentine-s-Web2.0',
        live: 'https://alex-renny.github.io/Valentine-s-Web2.0/'
      },
      featured: false
    },
    {
      id: 5,
      title: 'Event Webpage',
      description: 'A webpage where you can see the Upcoming program details.',
      image: 'Event_Web.png',
      category: 'Web Apps',
      technologies: ['Next.js', 'Firebase', 'Tailwind'],
      links: {
        github: 'https://github.com/alex-renny/Event-Project',
        live: 'https://alex-renny.github.io/Event-Project/'
      },
      featured: false
    },
    // {
    //   id: 6,
    //   title: 'UI Component Library',
    //   description: 'A custom React component library with accessible, themeable, and reusable components.',
    //   image: 'https://images.unsplash.com/photo-1613909207039-6b173b4df477?w=600&h=400&fit=crop',
    //   category: 'UI/UX',
    //   technologies: ['React', 'Storybook', 'TypeScript'],
    //   links: {
    //     github: 'https://github.com/yourusername/ui-library',
    //     live: 'https://ui-library-demo.vercel.app'
    //   },
    //   featured: false
    // }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      {/* Cursor Glow */}
      {/* <div 
        className="cursor-glow"
        style={{
          '--mouse-x': `${mousePosition.x}px`,
          '--mouse-y': `${mousePosition.y}px`
        }}
      ></div> */}

      <div className="container">
        <div className="section-header">
          <div className="header-label">
            <span className="label-dot"></span>
            <span className="label-text">Portfolio</span>
            <span className="label-dot"></span>
          </div>
          <h2 className="section-title">
            <span className="title-line-1">Featured</span>
            <span className="title-line-2">
              <span className="highlight">Projects</span>
            </span>
          </h2>
          <p className="section-subtitle">
            A showcase of my best work in web development, cyber security, and creative design.
          </p>
        </div>

        <div className="filter-bar">
          {filters.map((filter, index) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
              style={{ '--btn-delay': `${index * 0.05}s` }}
            >
              <span className="filter-text">{filter}</span>
              {activeFilter === filter && <span className="filter-count"></span>}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card ${isVisible ? 'visible' : ''} ${project.featured ? 'featured' : ''}`}
              style={{ '--animation-delay': `${index * 0.12}s` }}
            >
              <div className="project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
                <div className="image-shimmer"></div>
                <div className="project-overlay">
                  <div className="overlay-content">
                    <h4 className="overlay-title">{project.title}</h4>
                    <div className="overlay-links">
                      {project.links.github && (
                        <a 
                          href={project.links.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="overlay-link"
                          title="View Source Code"
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          <span>Code</span>
                        </a>
                      )}
                      {project.links.live && (
                        <a 
                          href={project.links.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="overlay-link live"
                          title="View Live Demo"
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                            <polyline points="15 3 21 3 21 9"/>
                            <line x1="10" y1="14" x2="21" y2="3"/>
                          </svg>
                          <span>Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                {project.featured && (
                  <div className="featured-badge">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    Featured
                  </div>
                )}
                <div className="project-category">
                  {project.category}
                </div>
              </div>
              
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
                    <a 
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github-link"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Source
                    </a>
                  )}
                  {project.links.live && (
                    <a 
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link live-link"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <div className="no-projects-icon">🔍</div>
            <h3>No projects found</h3>
            <p>Try selecting a different category to explore my work.</p>
          </div>
        )}

        <div className="cta-wrapper">
          <a 
            href="https://github.com/alex-renny" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button"
          >
            <span>View More on GitHub</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="btn-shine"></div>
          </a>
        </div>
      </div>
      
      <div className="background-decoration">
        <div className="dot-pattern"></div>
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
        <div className="gradient-blob blob-3"></div>
      </div>
    </section>
  );
}

export default Projects;