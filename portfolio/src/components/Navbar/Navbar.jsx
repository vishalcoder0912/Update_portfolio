import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollProgress, useActiveSection, useTheme } from '../../hooks/useScrollProgress';
import { personalInfo } from '../../data/portfolio';
import './Navbar.css';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const SECTION_IDS = ['about', 'skills', 'projects', 'experience', 'education', 'contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const progress = useScrollProgress();
  const active = useActiveSection(SECTION_IDS);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div className="scroll-progress-bar" style={{ width: `${progress}%` }} />

      <motion.nav
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="navbar__inner container">
          {/* Logo */}
          <a href="#hero" className="navbar__logo" onClick={() => handleNavClick('#hero')}>
            <span className="logo-bracket">[</span>
            <span className="logo-name">VK</span>
            <span className="logo-bracket">]</span>
          </a>

          {/* Desktop nav */}
          <ul className="navbar__links">
            {NAV_ITEMS.map(({ label, href }) => (
              <li key={href}>
                <button
                  className={`nav-link ${active === href.slice(1) ? 'nav-link--active' : ''}`}
                  onClick={() => handleNavClick(href)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="navbar__controls">
            <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
              {theme === 'dark' ? '◑' : '◐'}
            </button>
            <a href={personalInfo.resumeUrl} className="btn-primary navbar__cta" download>
              Resume
            </a>
            {/* Hamburger */}
            <button
              className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {NAV_ITEMS.map(({ label, href }, i) => (
              <motion.button
                key={href}
                className="mobile-menu__link"
                onClick={() => handleNavClick(href)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <span className="mobile-menu__num">0{i + 1}</span>
                {label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
