import { personalInfo } from '../../data/portfolio';
import './Footer.css';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const { name, social, email } = personalInfo;
  const year = new Date().getFullYear();

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__logo">
              <span style={{ color: 'var(--accent)' }}>[</span>VK<span style={{ color: 'var(--accent)' }}>]</span>
            </span>
            <p className="footer__tagline">
              Building elegant, performant digital experiences.
            </p>
          </div>

          <nav className="footer__nav" aria-label="Footer navigation">
            <div className="footer__nav-title">Navigation</div>
            {NAV_LINKS.map(({ label, href }) => (
              <button key={href} className="footer__link" onClick={() => scrollTo(href)}>
                {label}
              </button>
            ))}
          </nav>

          <div className="footer__connect">
            <div className="footer__nav-title">Connect</div>
            <a href={social.github} target="_blank" rel="noreferrer" className="footer__link">GitHub</a>
            <a href={social.linkedin} target="_blank" rel="noreferrer" className="footer__link">LinkedIn</a>
            <a href={social.twitter} target="_blank" rel="noreferrer" className="footer__link">Twitter</a>
            <a href={`mailto:${email}`} className="footer__link">Email</a>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} {name}. Designed & built with care.
          </p>
          <button
            className="footer__top-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
          >
            ↑ Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
