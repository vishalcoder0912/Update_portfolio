import { useEffect } from 'react';

export default function useParticles(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let mouse = { x: null, y: null };
    const ACCENT = [245, 166, 35];
    const N = 70;

    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const onMouseMove = (e) => {
      const r = canvas.getBoundingClientRect();
      mouse = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const onMouseLeave = () => { mouse = { x: null, y: null }; };
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    class Dot {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.r = Math.random() * 1.6 + 0.5;
        this.alpha = Math.random() * 0.5 + 0.15;
        this.phase = Math.random() * Math.PI * 2;
      }
      update(t) {
        this.x += this.vx; this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        this.a = this.alpha * (0.6 + 0.4 * Math.sin(t * 0.015 + this.phase));
        if (mouse.x !== null) {
          const dx = this.x - mouse.x, dy = this.y - mouse.y;
          const d = Math.sqrt(dx*dx+dy*dy);
          if (d > 0 && d < 100) { const f = (100-d)/100*0.6; this.x += dx/d*f; this.y += dy/d*f; }
        }
      }
      draw() {
        ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
        ctx.fillStyle = `rgba(${ACCENT},${this.a})`; ctx.fill();
      }
    }
    const dots = Array.from({length: N}, () => new Dot());
    let t = 0;
    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); t++;
      for (let i = 0; i < N; i++) {
        for (let j = i+1; j < N; j++) {
          const dx = dots[i].x-dots[j].x, dy = dots[i].y-dots[j].y;
          const d = Math.sqrt(dx*dx+dy*dy);
          if (d < 120) {
            ctx.beginPath(); ctx.moveTo(dots[i].x, dots[i].y); ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(${ACCENT},${(1-d/120)*0.2})`; ctx.lineWidth = 0.7; ctx.stroke();
          }
        }
        if (mouse.x !== null) {
          const dx = dots[i].x-mouse.x, dy = dots[i].y-mouse.y;
          const d = Math.sqrt(dx*dx+dy*dy);
          if (d < 140) {
            ctx.beginPath(); ctx.moveTo(dots[i].x, dots[i].y); ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(${ACCENT},${(1-d/140)*0.55})`; ctx.lineWidth = 1; ctx.stroke();
          }
        }
      }
      dots.forEach(d => { d.update(t); d.draw(); });
      animId = requestAnimationFrame(loop);
    };
    loop();
    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [canvasRef]);
}
