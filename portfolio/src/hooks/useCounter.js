import { useState, useEffect, useRef } from 'react';

export default function useCounter(target, duration = 1800, inView = false) {
  const [count, setCount] = useState(0);
  const t0 = useRef(null);
  useEffect(() => {
    if (!inView) return;
    t0.current = null;
    const step = (ts) => {
      if (!t0.current) t0.current = ts;
      const prog = Math.min((ts - t0.current) / duration, 1);
      const eased = 1 - Math.pow(2, -10 * prog);
      setCount(Math.floor(eased * target));
      if (prog < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [target, duration, inView]);
  return count;
}
