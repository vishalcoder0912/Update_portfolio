import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const lag = useRef({ x: 0, y: 0 });
  const anim = useRef(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dot.current) { dot.current.style.left = e.clientX+'px'; dot.current.style.top = e.clientY+'px'; }
    };
    const enter = () => document.body.classList.add('cursor-hover');
    const leave = () => document.body.classList.remove('cursor-hover');
    document.addEventListener('mousemove', onMove);
    const interactiveEls = Array.from(document.querySelectorAll('a,button,[data-hover]'));
    interactiveEls.forEach(el => {
      el.addEventListener('mouseenter', enter);
      el.addEventListener('mouseleave', leave);
    });
    const lerp = (a,b,n) => a+(b-a)*n;
    const tick = () => {
      lag.current.x = lerp(lag.current.x, pos.current.x, 0.1);
      lag.current.y = lerp(lag.current.y, pos.current.y, 0.1);
      if (ring.current) { ring.current.style.left = lag.current.x+'px'; ring.current.style.top = lag.current.y+'px'; }
      anim.current = requestAnimationFrame(tick);
    };
    tick();
    return () => {
      document.removeEventListener('mousemove', onMove);
      interactiveEls.forEach((el) => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
      });
      document.body.classList.remove('cursor-hover');
      cancelAnimationFrame(anim.current);
    };
  }, []);

  return (
    <>
      <div className="cursor__dot" ref={dot} />
      <div className="cursor__ring" ref={ring} />
    </>
  );
}
