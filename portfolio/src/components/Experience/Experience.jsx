import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { experience } from '../../data/portfolio';
import './Experience.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }),
};

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="section experience" ref={ref}>
      <div className="container">
        <motion.div className="section-tag" variants={fadeUp} custom={0} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          Experience
        </motion.div>
        <motion.h2 className="section-title" variants={fadeUp} custom={1} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          Work history
        </motion.h2>

        <div className="timeline">
          {experience.map((job, i) => (
            <motion.div
              key={job.id}
              className="timeline__item"
              custom={i + 2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
            >
              {/* Timeline indicator */}
              <div className="timeline__indicator">
                <div className="timeline__dot" />
                <div className="timeline__line" />
              </div>

              {/* Content */}
              <div className="timeline__content glass-card">
                <div className="timeline__header">
                  <div>
                    <div className="timeline__role">{job.role}</div>
                    <a href={job.companyUrl} target="_blank" rel="noreferrer" className="timeline__company">
                      {job.company} ↗
                    </a>
                  </div>
                  <div className="timeline__meta">
                    <span className="timeline__duration">{job.duration}</span>
                    <span className="timeline__location">{job.location}</span>
                  </div>
                </div>

                <ul className="timeline__achievements">
                  {job.achievements.map((ach, j) => (
                    <li key={j} className="timeline__achievement">
                      <span className="achievement-bullet">▸</span>
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
