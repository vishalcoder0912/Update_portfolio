import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo, stats } from '../../data/portfolio';
import useParticles from '../../hooks/useParticles';
import './Hero.css';

const GithubIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12Z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0Z" />
  </svg>
);

const MailIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M3 8 10.89 13.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z" />
  </svg>
);

const DownloadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

function Sphere3D() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) {
      return undefined;
    }

    const ctx = canvas.getContext('2d');
    const size = 320;
    canvas.width = size;
    canvas.height = size;

    let angle = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const radius = 118;
    const rings = 11;
    const dotsPerRing = 22;

    const onMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / size - 0.5) * 0.35;
      mouseY = ((event.clientY - rect.top) / size - 0.5) * 0.35;
    };

    canvas.addEventListener('mousemove', onMouseMove);

    const projectPoint = (x, y, z, rotateX, rotateY) => {
      const cosY = Math.cos(rotateY);
      const sinY = Math.sin(rotateY);
      const x1 = x * cosY - z * sinY;
      const z1 = x * sinY + z * cosY;

      const cosX = Math.cos(rotateX);
      const sinX = Math.sin(rotateX);
      const y2 = y * cosX - z1 * sinX;
      const z2 = y * sinX + z1 * cosX;

      const fov = 550;
      const scale = fov / (fov + z2);

      return { x: x1 * scale + size / 2, y: y2 * scale + size / 2, z: z2, scale };
    };

    let animationId;

    const draw = () => {
      ctx.clearRect(0, 0, size, size);
      angle += 0.005;
      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;

      const rotateY = angle + targetX;
      const rotateX = -0.28 + targetY;
      const points = [];

      for (let ringIndex = 0; ringIndex < rings; ringIndex += 1) {
        const phi = (Math.PI / (rings + 1)) * (ringIndex + 1);
        const ringRadius = radius * Math.sin(phi);
        const ringY = -radius * Math.cos(phi);

        for (let dotIndex = 0; dotIndex < dotsPerRing; dotIndex += 1) {
          const theta = (2 * Math.PI * dotIndex) / dotsPerRing;
          points.push(
            projectPoint(
              ringRadius * Math.cos(theta),
              ringY,
              ringRadius * Math.sin(theta),
              rotateX,
              rotateY,
            ),
          );
        }
      }

      points.push(projectPoint(0, -radius, 0, rotateX, rotateY));
      points.push(projectPoint(0, radius, 0, rotateX, rotateY));
      points.sort((a, b) => a.z - b.z);

      for (let i = 0; i < points.length; i += 1) {
        for (let j = i + 1; j < points.length; j += 1) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 34) {
            const depthFactor = Math.max(0, (points[i].z + points[j].z) / (2 * radius) + 0.5);
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.strokeStyle = `rgba(245,166,35,${depthFactor * 0.18 * (1 - distance / 34)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      points.forEach((point) => {
        const depthFactor = Math.max(0, point.z / radius * 0.5 + 0.5);
        ctx.beginPath();
        ctx.arc(point.x, point.y, Math.max(0.3, point.scale * 1.8 * depthFactor), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245,166,35,${depthFactor * 0.95})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      canvas.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return <canvas ref={ref} className="hero__sphere-canvas" />;
}

const wrap = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Hero() {
  const canvasRef = useRef(null);
  useParticles(canvasRef);

  const {
    name,
    title,
    tagline,
    summary,
    social,
    resumeUrl,
    resumeDownloadName,
    email,
    availability,
  } = personalInfo;

  const nameParts = name.split(' ');
  const heroCards = [
    { value: `${stats[0].num}${stats[0].suffix}`, label: 'Repos', tone: 'tl' },
    { value: `${stats[1].num}${stats[1].suffix}`, label: 'Contributions', tone: 'br' },
    { value: 'Top 10', label: 'Finalist', tone: 'tr' },
  ];

  const socialLinks = [
    { href: social.github, icon: <GithubIcon />, label: 'GitHub' },
    { href: social.linkedin, icon: <LinkedinIcon />, label: 'LinkedIn' },
    { href: `mailto:${email}`, icon: <MailIcon />, label: 'Email' },
  ].filter(({ href }) => Boolean(href));

  return (
    <section id="hero" className="hero">
      <canvas ref={canvasRef} className="hero__particles" />
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />

      <div className="container hero__inner">
        <motion.div className="hero__content" variants={wrap} initial="hidden" animate="show">
          <motion.div className="hero__badge" variants={item}>
            <span className="hero__badge-dot" />
            <span>{availability}</span>
          </motion.div>

          <motion.p className="hero__mono-label" variants={item}>
            <span className="hero__slash">{"</>"}</span>
            {title} | {tagline}
          </motion.p>

          <motion.h1 className="hero__name" variants={item}>
            {nameParts[0]}
            <br />
            <span className="hero__name--gold">{nameParts.slice(1).join(' ')}</span>
            <span className="hero__blink">_</span>
          </motion.h1>

          <motion.div className="hero__roles" variants={item}>
            <span className="role-chip role-chip--on">Full-Stack MERN</span>
            <span className="role-chip">Web Developer</span>
            <span className="role-chip">Cybersecurity Learner</span>
          </motion.div>

          <motion.p className="hero__summary" variants={item}>
            {summary}
          </motion.p>

          <motion.div className="hero__ctas" variants={item}>
            <a
              href={resumeUrl}
              className="btn-primary"
              download={resumeDownloadName}
              type="application/pdf"
              data-hover
            >
              <DownloadIcon /> Download Resume
            </a>
            <button
              className="btn-secondary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              data-hover
            >
              Let's Talk <ArrowIcon />
            </button>
          </motion.div>

          <motion.div className="hero__socials" variants={item}>
            <span className="socials-label">find me</span>
            {socialLinks.map(({ href, icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="social-btn" aria-label={label} data-hover>
                {icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, x: 60, scale: 0.92 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="sphere-wrap">
            <Sphere3D />
            <div className="sphere-glow" />
          </div>

          {heroCards.map(({ value, label, tone }, index) => (
            <motion.div
              key={label}
              className={`fcard fcard--${tone}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.2 }}
            >
              <div>
                <div className="fcard__num">{value}</div>
                <div className="fcard__lbl">{label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>scroll</span>
      </motion.div>
    </section>
  );
}
