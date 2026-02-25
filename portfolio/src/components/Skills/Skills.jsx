import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { skills } from '../../data/portfolio';
import './Skills.css';

const R = 42, C = 2 * Math.PI * R;

function RingProgress({ level, inView, delay = 0 }) {
  return (
    <svg className="ring-svg" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r={R} fill="none" strokeWidth="5" className="ring-bg" />
      <motion.circle
        cx="50" cy="50" r={R} fill="none" strokeWidth="5"
        className="ring-fill"
        strokeDasharray={C}
        initial={{ strokeDashoffset: C }}
        animate={inView ? { strokeDashoffset: C - (C * level) / 100 } : { strokeDashoffset: C }}
        transition={{ duration: 1.2, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
        strokeLinecap="round"
        transform="rotate(-90 50 50)"
      />
      <text x="50" y="55" textAnchor="middle" className="ring-text">{level}%</text>
    </svg>
  );
}

const COLORS = ['#f5a623', '#2dd4bf', '#7c6fff', '#f472b6'];

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  const [active, setActive] = useState(0);

  return (
    <section id="skills" className="section skills" ref={ref}>
      <div className="container">
        <motion.div className="section-tag" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          Skills
        </motion.div>
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}>
          Technical expertise
        </motion.h2>
        <motion.p className="section-subtitle" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }}>
          From systems programming in C++ to full-stack MERN apps and cybersecurity fundamentals.
        </motion.p>

        {/* Tab pills */}
        <motion.div className="skills__tabs" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}>
          {skills.map(({ category, icon }, i) => (
            <button key={category} className={`skills__tab ${active === i ? 'skills__tab--active' : ''}`}
              onClick={() => setActive(i)} style={{ '--tab-color': COLORS[i] }}>
              <span>{icon}</span> {category}
            </button>
          ))}
        </motion.div>

        {/* Active category — ring + bar combo */}
        <motion.div className="skills__panel" key={active}
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <div className="skills__rings">
            {skills[active].items.map(({ name, level }, i) => (
              <motion.div key={name} className="ring-item"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.08 + 0.1, duration: 0.5, ease: [0.34,1.56,0.64,1] }}>
                <div className="ring-wrap" style={{ '--rc': COLORS[active] }}>
                  <RingProgress level={level} inView={inView} delay={i * 0.1 + 0.2} />
                </div>
                <div className="ring-name">{name}</div>
              </motion.div>
            ))}
          </div>

          {/* Also show bars below */}
          <div className="skills__bars">
            {skills[active].items.map(({ name, level }, i) => (
              <motion.div key={name} className="sbar-item"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.07 + 0.2 }}>
                <div className="sbar-meta">
                  <span className="sbar-name">{name}</span>
                  <span className="sbar-pct" style={{ color: COLORS[active] }}>{level}%</span>
                </div>
                <div className="sbar-track">
                  <motion.div className="sbar-fill"
                    style={{ background: `linear-gradient(90deg, ${COLORS[active]}88, ${COLORS[active]})` }}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${level}%` } : {}}
                    transition={{ delay: i * 0.07 + 0.3, duration: 0.9, ease: [0.25,0.46,0.45,0.94] }} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All-categories mini grid */}
        <motion.div className="skills__all-grid"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }}>
          {skills.map(({ category, icon, items }, ci) => (
            <div key={category} className={`mini-cat glass-card ${active === ci ? 'mini-cat--active' : ''}`}
              onClick={() => setActive(ci)} style={{ '--mc': COLORS[ci] }}>
              <div className="mini-cat__head">
                <span className="mini-cat__icon">{icon}</span>
                <span className="mini-cat__name">{category}</span>
              </div>
              <div className="mini-cat__dots">
                {items.map(({ name, level }, itemIndex) => (
                  <div key={`${category}-${name}-${itemIndex}`} className="mini-dot"
                    style={{ width: `${level}%`, background: COLORS[ci] + '88' }} />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
