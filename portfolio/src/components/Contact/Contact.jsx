import { useState } from 'react';
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
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [feedback, setFeedback] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const senderName = form.name.trim();
    const senderEmail = form.email.trim();
    const senderMessage = form.message.trim();

    if (!senderName || !senderEmail || !senderMessage) {
      setStatus('error');
      setFeedback('Please fill in all fields before submitting.');
      return;
    }

    setStatus('sending');

    try {
      const recipient = personalInfo.email.trim();
      const subject = `Portfolio contact from ${senderName}`;
      const body = [
        `Name: ${senderName}`,
        `Email: ${senderEmail}`,
        '',
        'Message:',
        senderMessage,
      ].join('\n');

      const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;

      setStatus('success');
      setFeedback('Opening your email app with a prefilled draft.');
      setForm({ name: '', email: '', message: '' });
      window.setTimeout(() => {
        setStatus('idle');
        setFeedback('');
      }, 5000);
    } catch {
      setStatus('error');
      setFeedback('Could not open your email app. Please email me directly.');
    }
  };

  const { email, location, social } = personalInfo;

  return (
    <section id="contact" className="section contact" ref={ref}>
      <div className="container">
        <motion.div className="section-tag" variants={fadeUp} custom={0} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          Contact
        </motion.div>
        <motion.h2 className="section-title" variants={fadeUp} custom={1} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          Let's work together
        </motion.h2>
        <motion.p className="section-subtitle" variants={fadeUp} custom={2} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          Have a project in mind or want to explore opportunities? I'd love to hear from you.
        </motion.p>

        <div className="contact__grid">
          <motion.div className="contact__info" variants={fadeUp} custom={3} initial="hidden" animate={inView ? 'show' : 'hidden'}>
            <div className="contact-info-card glass-card">
              <h3 className="contact-info-card__title">Get in touch</h3>

              <div className="contact-detail">
                <span className="contact-detail__icon">@</span>
                <div>
                  <div className="contact-detail__label">Email</div>
                  <a href={`mailto:${email}`} className="contact-detail__value">{email}</a>
                </div>
              </div>

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
                <a href={social.github} target="_blank" rel="noreferrer" className="contact-social-link">{'GitHub ->'}</a>
                <a href={social.linkedin} target="_blank" rel="noreferrer" className="contact-social-link">{'LinkedIn ->'}</a>
                <a href={social.twitter} target="_blank" rel="noreferrer" className="contact-social-link">{'Twitter ->'}</a>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact__form glass-card"
            onSubmit={handleSubmit}
            variants={fadeUp}
            custom={4}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                className="form-input"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-input"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-input form-textarea"
                placeholder="Tell me about your project..."
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn-primary contact__submit" disabled={status === 'sending'}>
              {status === 'sending' && <span className="spinner" />}
              {status === 'success' ? 'Draft ready' : status === 'sending' ? 'Opening mail...' : 'Send Message'}
            </button>

            {(status === 'success' || status === 'error') && (
              <motion.p
                className={`contact__message ${status === 'success' ? 'contact__message--success' : 'contact__message--error'}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {feedback}
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
