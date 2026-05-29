import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web Apps', 'UI/UX', 'Full Stack', 'Mobile'];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, product management, cart functionality, and payment integration.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      category: 'Full Stack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      links: {
        github: 'https://github.com/yourusername/ecommerce-platform',
        live: 'https://ecommerce-platform.vercel.app',
        demo: 'https://www.youtube.com/watch?v=demo'
      },
      stats: {
        stars: 124,
        forks: 45
      }
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates, drag-and-drop interface, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      category: 'Web Apps',
      technologies: ['Next.js', 'Firebase', 'Tailwind CSS'],
      links: {
        github: 'https://github.com/yourusername/task-manager',
        live: 'https://task-manager-app.vercel.app'
      },
      stats: {
        stars: 89,
        forks: 23
      }
    },
    {
      id: 3,
      title: 'Portfolio Dashboard',
      description: 'An interactive portfolio dashboard with analytics, project tracking, and performance metrics visualization.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      category: 'UI/UX',
      technologies: ['React', 'D3.js', 'Chart.js'],
      links: {
        github: 'https://github.com/yourusername/portfolio-dashboard',
        live: 'https://dashboard-portfolio.vercel.app'
      },
      stats: {
        stars: 156,
        forks: 67
      }
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'A comprehensive social media analytics tool that tracks engagement, follower growth, and content performance across platforms.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
      category: 'Web Apps',
      technologies: ['Vue.js', 'Python', 'PostgreSQL'],
      links: {
        github: 'https://github.com/yourusername/social-analytics',
        live: 'https://social-analytics-demo.vercel.app'
      },
      stats: {
        stars: 92,
        forks: 31
      }
    },
    {
      id: 5,
      title: 'Weather Forecast App',
      description: 'A beautiful weather application with 7-day forecasts, location-based updates, and interactive weather maps.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      category: 'Mobile',
      technologies: ['React Native', 'API Integration'],
      links: {
        github: 'https://github.com/yourusername/weather-app',
        live: 'https://weather-app-mobile.vercel.app'
      },
      stats: {
        stars: 78,
        forks: 19
      }
    },
    {
      id: 6,
      title: 'AI Chat Assistant',
      description: 'An intelligent chat assistant powered by machine learning, capable of natural language processing and task automation.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      category: 'Full Stack',
      technologies: ['Python', 'TensorFlow', 'FastAPI'],
      links: {
        github: 'https://github.com/yourusername/ai-assistant',
        live: 'https://ai-chat-demo.vercel.app'
      },
      stats: {
        stars: 203,
        forks: 89
      }
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <div className="header-label">
            <span className="label-line"></span>
            <span className="label-text">Portfolio</span>
          </div>
          <h2 className="section-title">
            <span className="title-line-1">Featured</span>
            <span className="title-line-2">
              <span className="highlight">Projects</span>
            </span>
          </h2>
          <p className="section-subtitle">
            A showcase of my best work, demonstrating expertise across different technologies and industries.
          </p>
        </div>

        <div className="filter-bar">
          {filters.map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ '--animation-delay': `${index * 0.1}s` }}
            >
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
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="overlay-link"
                        title="View Source Code"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span>Source Code</span>
                      </a>
                    )}
                    {project.links.live && (
                      <a 
                        href={project.links.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="overlay-link"
                        title="View Live Demo"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <polyline points="15 3 21 3 21 9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.links.demo && (
                      <a 
                        href={project.links.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="overlay-link"
                        title="Watch Demo"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                        </svg>
                        <span>Watch Demo</span>
                      </a>
                    )}
                  </div>
                </div>
                <div className="project-category">
                  {project.category}
                </div>
                <div className="project-stats">
                  <span className="stat">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    {project.stats.stars}
                  </span>
                  <span className="stat">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                      <path d="M16 3h5v5M8 3H3v5M3 16v5h5M21 16v5h-5M21 3l-7 7M3 3l7 7"/>
                    </svg>
                    {project.stats.forks}
                  </span>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
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
                      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  )}
                  {project.links.live && (
                    <a 
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link live-link"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
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

        <div className="cta-wrapper">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button"
          >
            <span>View More on GitHub</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
      
      <div className="background-decoration">
        <div className="dot-pattern"></div>
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
      </div>
    </section>
  );
}

export default Projects;