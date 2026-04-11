import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { projects } from '../../data/portfolio';
import useTilt from '../../hooks/useTilt';
import './Projects.css';

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12Z" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
  </svg>
);

const FILTERS = ['all', 'featured'];

function TiltCard({ project, index, inView }) {
  const { ref, onMove, onLeave } = useTilt(12);

  return (
    <motion.article
      ref={ref}
      className={`proj-card ${project.featured ? 'proj-card--featured' : ''}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 + 0.3, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ '--pa': project.accent }}
    >
      <div className="tilt-glare" />

      <div className="proj-card__band" style={{ background: project.gradient }}>
        <div className="proj-card__geo" />
        <div className="proj-card__geo proj-card__geo--2" />
        <span className="proj-card__letter">{project.title[0]}</span>
        <div className="proj-card__band-top">
          <span className="proj-card__index">Project {String(project.id).padStart(2, '0')}</span>
          {project.featured && <span className="proj-card__badge">Featured</span>}
        </div>
        <div
          className="proj-card__glow"
          style={{ background: `radial-gradient(circle at 60% 40%, ${project.accent}22, transparent 65%)` }}
        />
      </div>

      <div className="proj-card__body">
        <div className="proj-card__header">
          <h3 className="proj-card__title">{project.title}</h3>
          <div className="proj-card__availability">{project.live ? 'Live available' : 'Source available'}</div>
        </div>

        <p className="proj-card__desc">{project.description}</p>

        <div className="proj-card__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="ptag">
              {tag}
            </span>
          ))}
        </div>

        <div className="proj-card__actions">
          <a href={project.github} target="_blank" rel="noreferrer" className="paction paction--solid" data-hover>
            <GithubIcon /> View Code
          </a>
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="paction paction--ghost" data-hover>
              <ExternalIcon /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [filter, setFilter] = useState('all');
  const list = filter === 'featured' ? projects.filter((project) => project.featured) : projects;

  return (
    <section id="projects" className="section projects" ref={ref}>
      <div className="container">
        <motion.div
          className="section-tag"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.div>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Things I&apos;ve built
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Real-world and collaborative work spanning MERN apps, TypeScript products, and practical problem-solving tools.
        </motion.p>

        <motion.div className="proj-filters" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.25 }}>
          {FILTERS.map((current) => (
            <button
              key={current}
              className={`filter-btn ${filter === current ? 'filter-btn--on' : ''}`}
              onClick={() => setFilter(current)}
            >
              {current === 'featured' ? 'Featured Projects' : 'All Projects'}
            </button>
          ))}
        </motion.div>

        <div className="proj-grid">
          {list.map((project, index) => (
            <TiltCard key={project.id} project={project} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
