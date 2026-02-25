import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import useCounter from '../../hooks/useCounter';
import './Stats.css';

const STATS = [
  { num: 36, suffix: '+', label: 'GitHub Repos', icon: '🗂️' },
  { num: 6, suffix: '', label: 'Full-Stack Projects', icon: '🚀' },
  { num: 2, suffix: '+', label: 'Years of Learning', icon: '📚' },
  { num: 4, suffix: '', label: 'Tech Domains', icon: '🔒' },
];

function Counter({ num, suffix, inView }) {
  const c = useCounter(num, 1800, inView);
  return <>{c}{suffix}</>;
}

export default function Stats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="stats-section" ref={ref}>
      <div className="container stats__inner">
        {STATS.map(({ num, suffix, label, icon }, i) => (
          <motion.div key={label} className="stat-card"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}>
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
