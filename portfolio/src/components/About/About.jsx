import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { aboutMe } from '../../data/portfolio';
import useTilt from '../../hooks/useTilt';
import './About.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.25,0.46,0.45,0.94] } }),
};

function TiltStrength({ icon, label, desc, i, inView }) {
  const { ref, onMove, onLeave } = useTilt(8);
  return (
    <motion.div ref={ref} className="strength-card glass-card"
      onMouseMove={onMove} onMouseLeave={onLeave}
      custom={i + 4} variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'}
      style={{ transformStyle: 'preserve-3d' }}>
      <div className="tilt-glare" />
      <div className="strength-icon">{icon}</div>
      <div>
        <div className="strength-label">{label}</div>
        <div className="strength-desc">{desc}</div>
      </div>
    </motion.div>
  );
}

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <section id="about" className="section about" ref={ref}>
      <div className="container">
        <div className="about__header">
          <motion.div className="section-tag" variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'}>About Me</motion.div>
          <motion.h2 className="section-title" variants={fadeUp} custom={1} initial="hidden" animate={inView ? 'show' : 'hidden'}>
            The person behind<br/>the code
          </motion.h2>
        </div>
        <div className="about__grid">
          <motion.div className="about__bio" variants={fadeUp} custom={2} initial="hidden" animate={inView ? 'show' : 'hidden'}>
            {aboutMe.bio.map((p, i) => <p key={i} className="about__para">{p}</p>)}
            <div className="about__stack">
              <span className="stack-label">Tech stack</span>
              <div className="stack-badges">
                {aboutMe.techStack.map(t => <span key={t} className="stack-badge">{t}</span>)}
              </div>
            </div>
          </motion.div>
          <div className="about__strengths">
            {aboutMe.strengths.map(({ icon, label, desc }, i) => (
              <TiltStrength key={label} icon={icon} label={label} desc={desc} i={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
