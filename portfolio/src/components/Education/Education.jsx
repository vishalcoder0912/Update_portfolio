import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { education } from '../../data/portfolio';
import './Education.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  }),
};

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="education" className="section education" ref={ref}>
      <div className="container">
        <motion.div className="section-tag" variants={fadeUp} custom={0} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          Education
        </motion.div>
        <motion.h2 className="section-title" variants={fadeUp} custom={1} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          Academic background
        </motion.h2>

        <div className="education__grid">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              className="edu-card glass-card"
              custom={i + 2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
            >
              <div className="edu-card__year">{edu.year}</div>
              <div className="edu-card__degree">{edu.degree}</div>
              <div className="edu-card__institution">{edu.institution}</div>
              <div className="edu-card__grade">{edu.grade}</div>
              <ul className="edu-card__highlights">
                {edu.highlights.map((h, j) => (
                  <li key={j}>
                    <span className="edu-bullet">▸</span> {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
