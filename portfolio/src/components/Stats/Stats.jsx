import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import useCounter from '../../hooks/useCounter';
import { stats } from '../../data/portfolio';
import './Stats.css';

function Counter({ num, suffix, inView }) {
  const count = useCounter(num, 1800, inView);
  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export default function Stats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="stats-section" ref={ref}>
      <div className="container stats__inner">
        {stats.map(({ num, suffix, label, icon }, index) => (
          <motion.div
            key={label}
            className="stat-card"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ y: -6 }}
          >
            <div className="stat-card__icon">{icon}</div>
            <div className="stat-card__num">
              <Counter num={num} suffix={suffix} inView={inView} />
            </div>
            <div className="stat-card__label">{label}</div>
            <div className="stat-card__bar" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
