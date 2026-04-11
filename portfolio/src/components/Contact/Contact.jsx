import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolio';
import './Contact.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { email, location, phone, social } = personalInfo;

  const socialLinks = [
    { href: social.github, label: 'GitHub ->' },
    { href: social.linkedin, label: 'LinkedIn ->' },
    { href: social.twitter, label: 'Twitter ->' },
  ].filter(({ href }) => Boolean(href));

  return (
    <section id="contact" className="section contact" ref={ref}>
      <div className="container">
        <motion.div className="section-tag" variants={fadeUp} custom={0} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          Contact
        </motion.div>
        <motion.h2 className="section-title" variants={fadeUp} custom={1} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          Let&apos;s work together
        </motion.h2>
        <motion.p className="section-subtitle" variants={fadeUp} custom={2} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          Reach out directly by email or through my public profiles. I&apos;ll update the contact form later.
        </motion.p>

        <motion.div className="contact__grid" variants={fadeUp} custom={3} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          <div className="contact-info-card glass-card">
            <h3 className="contact-info-card__title">Get in touch</h3>

            <div className="contact-detail">
              <span className="contact-detail__icon">@</span>
              <div>
                <div className="contact-detail__label">Email</div>
                <a href={`mailto:${email}`} className="contact-detail__value">{email}</a>
              </div>
            </div>

            {phone && (
              <div className="contact-detail">
                <span className="contact-detail__icon">P</span>
                <div>
                  <div className="contact-detail__label">Phone</div>
                  <a href={`tel:${phone.replace(/\s+/g, '')}`} className="contact-detail__value">{phone}</a>
                </div>
              </div>
            )}

            <div className="contact-detail">
              <span className="contact-detail__icon">L</span>
              <div>
                <div className="contact-detail__label">Location</div>
                <div className="contact-detail__value">{location}</div>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-detail__icon">24h</span>
              <div>
                <div className="contact-detail__label">Response time</div>
                <div className="contact-detail__value">Within 24 hours</div>
              </div>
            </div>

            <div className="contact-socials">
              {socialLinks.map(({ href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="contact-social-link">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
