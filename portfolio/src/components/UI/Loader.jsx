import { motion } from 'framer-motion';
import './Loader.css';

export default function Loader({ onComplete }) {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={onComplete}
    >
      <div className="loader__content">
        <motion.div
          className="loader__logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <span className="loader__bracket">[</span>
          <span className="loader__initials">VK</span>
          <span className="loader__bracket">]</span>
        </motion.div>

        <motion.div
          className="loader__bar"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
          onAnimationComplete={onComplete}
        />

        <motion.span
          className="loader__label"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Loading portfolio...
        </motion.span>
      </div>
    </motion.div>
  );
}
