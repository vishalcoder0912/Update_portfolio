import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolio';
import useParticles from '../../hooks/useParticles';
import './Hero.css';

// SVG Icons
const GithubIcon = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>;
const LinkedinIcon = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
const TwitterIcon = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
const MailIcon = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>;
const DownloadIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>;
const ArrowIcon = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>;

// 3D Sphere rendered purely on canvas
function Sphere3D() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current; if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const S = 320; canvas.width = S; canvas.height = S;
    let angle = 0, mX = 0, mY = 0, tX = 0, tY = 0;
    const R = 118, RINGS = 11, DPR = 22;

    const onMouseMove = (e) => {
      const r = canvas.getBoundingClientRect();
      mX = ((e.clientX - r.left) / S - 0.5) * 0.35;
      mY = ((e.clientY - r.top) / S - 0.5) * 0.35;
    };
    canvas.addEventListener('mousemove', onMouseMove);

    const proj = (x, y, z, rX, rY) => {
      const cy = Math.cos(rY), sy = Math.sin(rY);
      const x1 = x*cy - z*sy, z1 = x*sy + z*cy;
      const cx = Math.cos(rX), sx = Math.sin(rX);
      const y2 = y*cx - z1*sx, z2 = y*sx + z1*cx;
      const fov = 550, sc = fov/(fov+z2);
      return { x: x1*sc + S/2, y: y2*sc + S/2, z: z2, sc };
    };

    let id;
    const draw = () => {
      ctx.clearRect(0, 0, S, S);
      angle += 0.005;
      tX += (mX - tX) * 0.04; tY += (mY - tY) * 0.04;
      const rY = angle + tX, rX = -0.28 + tY;
      const pts = [];
      for (let i = 0; i < RINGS; i++) {
        const phi = Math.PI/(RINGS+1)*(i+1);
        const rr = R*Math.sin(phi), ry = -R*Math.cos(phi);
        for (let j = 0; j < DPR; j++) {
          const theta = 2*Math.PI/DPR*j;
          pts.push(proj(rr*Math.cos(theta), ry, rr*Math.sin(theta), rX, rY));
        }
      }
      pts.push(proj(0,-R,0,rX,rY)); pts.push(proj(0,R,0,rX,rY));
      pts.sort((a,b) => a.z-b.z);
      // lines
      for (let i = 0; i < pts.length; i++) {
        for (let j = i+1; j < pts.length; j++) {
          const dx = pts[i].x-pts[j].x, dy = pts[i].y-pts[j].y;
          const d = Math.sqrt(dx*dx+dy*dy);
          if (d < 34) {
            const df = Math.max(0,(pts[i].z+pts[j].z)/(2*R)+0.5);
            ctx.beginPath(); ctx.moveTo(pts[i].x,pts[i].y); ctx.lineTo(pts[j].x,pts[j].y);
            ctx.strokeStyle = `rgba(245,166,35,${df*0.18*(1-d/34)})`; ctx.lineWidth=0.6; ctx.stroke();
          }
        }
      }
      // dots
      pts.forEach(p => {
        const df = Math.max(0, p.z/R*0.5+0.5);
        ctx.beginPath(); ctx.arc(p.x, p.y, Math.max(0.3, p.sc*1.8*df), 0, Math.PI*2);
        ctx.fillStyle = `rgba(245,166,35,${df*0.95})`; ctx.fill();
      });
      id = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(id);
      canvas.removeEventListener('mousemove', onMouseMove);
    };
  }, []);
  return <canvas ref={ref} className="hero__sphere-canvas" />;
}

const wrap = { hidden:{opacity:0}, show:{opacity:1, transition:{staggerChildren:0.1, delayChildren:0.2}} };
const item = { hidden:{opacity:0, y:28}, show:{opacity:1, y:0, transition:{duration:0.65, ease:[0.25,0.46,0.45,0.94]}} };

export default function Hero() {
  const canvasRef = useRef(null);
  useParticles(canvasRef);
  const { name, title, tagline, summary, social, resumeUrl, email } = personalInfo;

  return (
    <section id="hero" className="hero">
      <canvas ref={canvasRef} className="hero__particles" />
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />

      <div className="container hero__inner">
        {/* LEFT */}
        <motion.div className="hero__content" variants={wrap} initial="hidden" animate="show">

          <motion.div className="hero__badge" variants={item}>
            <span className="hero__badge-dot" /><span>Available for opportunities</span>
          </motion.div>

          <motion.p className="hero__mono-label" variants={item}>
            <span className="hero__slash">{"</>"}</span> Full-Stack · MERN · Cybersecurity
          </motion.p>

          <motion.h1 className="hero__name" variants={item}>
            {name.split(' ')[0]}<br/>
            <span className="hero__name--gold">{name.split(' ')[1]}</span>
            <span className="hero__blink">_</span>
          </motion.h1>

          <motion.div className="hero__roles" variants={item}>
            <span className="role-chip role-chip--on">MERN Stack Dev</span>
            <span className="role-chip">Cybersec Learner</span>
            <span className="role-chip">BCA Student</span>
          </motion.div>

          <motion.p className="hero__summary" variants={item}>{summary}</motion.p>

          <motion.div className="hero__ctas" variants={item}>
            <a
              href={resumeUrl}
              className="btn-primary"
              download="Vishal_Kumar_Resume.pdf"
              type="application/pdf"
              data-hover
            >
              <DownloadIcon /> Download Resume
            </a>
            <button className="btn-secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})} data-hover>
              Let's Talk <ArrowIcon />
            </button>
          </motion.div>

          <motion.div className="hero__socials" variants={item}>
            <span className="socials-label">find me</span>
            {[
              {href: social.github, icon:<GithubIcon/>, label:'GitHub'},
              {href: social.linkedin, icon:<LinkedinIcon/>, label:'LinkedIn'},
              {href: social.twitter, icon:<TwitterIcon/>, label:'Twitter'},
              {href: `mailto:${email}`, icon:<MailIcon/>, label:'Email'},
            ].map(({href,icon,label}) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="social-btn" aria-label={label} data-hover>
                {icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — 3D sphere */}
        <motion.div className="hero__visual"
          initial={{opacity:0, x:60, scale:0.92}} animate={{opacity:1, x:0, scale:1}}
          transition={{duration:1, delay:0.5, ease:[0.25,0.46,0.45,0.94]}}>
          <div className="sphere-wrap">
            <Sphere3D />
            <div className="sphere-glow" />
          </div>

          {/* Floating info widgets */}
          <motion.div className="fcard fcard--tl" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:1.2}}>
            <span className="fcard__icon">⚡</span>
            <div><div className="fcard__num">36+</div><div className="fcard__lbl">Repos</div></div>
          </motion.div>
          <motion.div className="fcard fcard--br" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:1.4}}>
            <span className="fcard__icon">🔒</span>
            <div><div className="fcard__num">CTF</div><div className="fcard__lbl">Enthusiast</div></div>
          </motion.div>
          <motion.div className="fcard fcard--tr" initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} transition={{delay:1.6}}>
            <span className="fcard__icon">💻</span>
            <div><div className="fcard__num">MERN</div><div className="fcard__lbl">Stack</div></div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div className="hero__scroll" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2.5}}>
        <div className="scroll-mouse"><div className="scroll-wheel"/></div>
        <span>scroll</span>
      </motion.div>
    </section>
  );
}
