import { useRef, useCallback } from 'react';

export default function useTilt(max = 14) {
  const ref = useRef(null);
  const onMove = useCallback((e) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    const rx = ((y - r.height/2) / r.height) * -max;
    const ry = ((x - r.width/2) / r.width) * max;
    const g = el.querySelector('.tilt-glare');
    if (g) g.style.background = `radial-gradient(circle at ${(x/r.width)*100}% ${(y/r.height)*100}%, rgba(255,255,255,0.13) 0%, transparent 55%)`;
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.025,1.025,1.025)`;
    el.style.transition = 'transform 0.08s ease';
  }, [max]);
  const onLeave = useCallback(() => {
    const el = ref.current; if (!el) return;
    const g = el.querySelector('.tilt-glare');
    if (g) g.style.background = 'transparent';
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
    el.style.transition = 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1)';
  }, []);
  return { ref, onMove, onLeave };
}
