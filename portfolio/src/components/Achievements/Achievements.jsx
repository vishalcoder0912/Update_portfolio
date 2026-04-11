import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { achievements } from '../../data/portfolio';
import './Achievements.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Achievements() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 });

  return (
    <section id="achievements" className="section achievements" ref={ref}>
      <div className="container">
        <motion.div
          className="section-tag"
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          Achievements
        </motion.div>

        <motion.h2
          className="section-title"
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          Proof of growth
        </motion.h2>

        <motion.p
          className="section-subtitle"
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          Your recent profile signals consistent execution: real project work, public GitHub momentum,
          security learning, and visible outcomes beyond coursework.
        </motion.p>

        <div className="achievements__grid">
          {achievements.map((achievement, index) => (
            <motion.article
              key={achievement.id}
              className="achievement-card glass-card"
              custom={index + 3}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              whileHover={{ y: -8 }}
            >
              <div className="achievement-card__shine" />
              <div className="achievement-card__eyebrow">{achievement.eyebrow}</div>
              <div className="achievement-card__metric">{achievement.metric}</div>
              <h3 className="achievement-card__title">{achievement.title}</h3>
              <p className="achievement-card__description">{achievement.description}</p>
              <div className="achievement-card__tags">
                {achievement.tags.map((tag) => (
                  <span key={tag} className="achievement-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
