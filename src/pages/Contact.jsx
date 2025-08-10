import { motion } from 'framer-motion';
import { useState } from 'react';
import frame4 from "../Assets/frame4.png";
import frame2 from "../Assets/frame2.png";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const styles = {
    contactPage: {
      position: 'relative',
      minHeight: '100vh',
      width: '100%',
      overflow: 'hidden',
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: `url(${frame4})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 0.9,
      zIndex: 0,
    },
    contentWrapper: {
      position: 'relative',
      zIndex: 1,
      padding: '20px',
      maxWidth: '1400px',
      margin: '0 auto',
      '@media (min-width: 768px)': {
        padding: '40px 20px',
      },
    },
    heroSection: {
      textAlign: 'center',
      padding: '90px 10px 40px',
      marginBottom: '30px',
      '@media (min-width: 768px)': {
        padding: '110px 20px 40px',
        marginBottom: '40px',
      },
    },
    heroTitle: {
      color: '#FF6B00',
      fontSize: 'clamp(32px, 5vw, 56px)',
      fontWeight: '700',
      marginBottom: '15px',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
      lineHeight: '1.2',
      '@media (min-width: 768px)': {
        marginBottom: '20px',
      },
    },
    heroSubtitle: {
      color: 'white',
      fontSize: 'clamp(16px, 3vw, 24px)',
      fontWeight: '500',
      lineHeight: '1.5',
      maxWidth: '800px',
      margin: '0 auto',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
      padding: '0 10px',
    },
    formContainer: {
      backgroundImage: `url(${frame2})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '20px',
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      '@media (min-width: 768px)': {
        borderRadius: '40px',
        padding: '40px',
      },
    },
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '30px',
      background: 'transparent',
      padding: '20px',
      borderRadius: '20px',
      '@media (min-width: 768px)': {
        gap: '40px',
        padding: '40px',
        borderRadius: '30px',
      },
      '@media (min-width: 1024px)': {
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      },
    },
    contactInfo: {
      padding: '20px',
      borderRadius: '20px',
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(10px)',
      '@media (min-width: 768px)': {
        padding: '30px',
      },
    },
    infoTitle: {
      color: '#0A2647',
      fontSize: 'clamp(24px, 4vw, 32px)',
      fontWeight: '700',
      marginBottom: '15px',
      '@media (min-width: 768px)': {
        marginBottom: '20px',
      },
    },
    infoSubtitle: {
      color: '#666',
      fontSize: 'clamp(14px, 2.5vw, 18px)',
      marginBottom: '30px',
      lineHeight: '1.6',
      '@media (min-width: 768px)': {
        marginBottom: '40px',
      },
    },
    infoItem: {
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      background: 'rgba(255, 255, 255, 0.95)',
      padding: '15px',
      borderRadius: '15px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
      '@media (min-width: 768px)': {
        marginBottom: '30px',
        gap: '20px',
        padding: '20px',
      },
    },
    infoIcon: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      background: '#0A2647',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '20px',
      flexShrink: 0,
      '@media (min-width: 768px)': {
        width: '50px',
        height: '50px',
        fontSize: '24px',
      },
    },
    infoContent: {
      flex: 1,
      minWidth: 0,
    },
    infoLabel: {
      color: '#0A2647',
      fontSize: 'clamp(16px, 2.5vw, 20px)',
      fontWeight: '600',
      marginBottom: '5px',
    },
    infoText: {
      color: '#666',
      fontSize: 'clamp(14px, 2vw, 18px)',
      wordBreak: 'break-word',
    },
    contactForm: {
      padding: '20px',
      borderRadius: '20px',
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(10px)',
      '@media (min-width: 768px)': {
        padding: '30px',
      },
    },
    formTitle: {
      color: '#0A2647',
      fontSize: 'clamp(24px, 4vw, 32px)',
      fontWeight: '700',
      marginBottom: '10px',
      '@media (min-width: 768px)': {
        marginBottom: '15px',
      },
    },
    formSubtitle: {
      color: '#666',
      fontSize: 'clamp(14px, 2.5vw, 18px)',
      marginBottom: '25px',
      '@media (min-width: 768px)': {
        marginBottom: '30px',
      },
    },
    formGroup: {
      marginBottom: '20px',
      '@media (min-width: 768px)': {
        marginBottom: '25px',
      },
    },
    label: {
      display: 'block',
      color: '#0A2647',
      fontSize: 'clamp(14px, 2.5vw, 18px)',
      fontWeight: '500',
      marginBottom: '8px',
      '@media (min-width: 768px)': {
        marginBottom: '10px',
      },
    },
    input: {
      width: '100%',
      padding: '12px',
      borderRadius: '12px',
      border: '2px solid #ddd',
      fontSize: 'clamp(14px, 2vw, 16px)',
      transition: 'all 0.3s ease',
      background: 'white',
      boxSizing: 'border-box',
      '@media (min-width: 768px)': {
        padding: '15px',
      },
      ':focus': {
        borderColor: '#0A2647',
        boxShadow: '0 0 0 2px rgba(10, 38, 71, 0.2)',
        outline: 'none',
      },
    },
    textarea: {
      width: '100%',
      padding: '12px',
      borderRadius: '12px',
      border: '2px solid #ddd',
      fontSize: 'clamp(14px, 2vw, 16px)',
      minHeight: '120px',
      resize: 'vertical',
      background: 'white',
      boxSizing: 'border-box',
      fontFamily: 'inherit',
      '@media (min-width: 768px)': {
        padding: '15px',
        minHeight: '150px',
      },
      ':focus': {
        borderColor: '#0A2647',
        boxShadow: '0 0 0 2px rgba(10, 38, 71, 0.2)',
        outline: 'none',
      },
    },
    submitButton: {
      background: '#0A2647',
      color: 'white',
      padding: '12px 30px',
      borderRadius: '30px',
      border: 'none',
      fontSize: 'clamp(16px, 2.5vw, 20px)',
      fontWeight: '600',
      cursor: 'pointer',
      width: '100%',
      marginTop: '15px',
      transition: 'all 0.3s ease',
      '@media (min-width: 768px)': {
        padding: '15px 40px',
        borderRadius: '40px',
        marginTop: '20px',
      },
      ':hover': {
        background: '#083158',
        transform: 'translateY(-2px)',
      },
    },
  };

  return (
    <div style={styles.contactPage}>
      <div style={styles.backgroundImage} />
      <div style={styles.contentWrapper}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={styles.heroSection}
        >
          <h1 style={styles.heroTitle}>Get in Touch</h1>
          <p style={styles.heroSubtitle}>
            Let's discuss how we can help advance your AI technology goals
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={styles.formContainer}
        >
          <div style={styles.contactGrid}>
            {/* Contact Information */}
            <div style={styles.contactInfo}>
              <h2 style={styles.infoTitle}>Contact Information</h2>
              <p style={styles.infoSubtitle}>
                Reach out to us directly or fill out the form and we'll get back to you promptly.
              </p>

              <div style={styles.infoItems}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  style={styles.infoItem}
                >
                  <div style={styles.infoIcon}>📞</div>
                  <div style={styles.infoContent}>
                    <h3 style={styles.infoLabel}>Call Us</h3>
                    <p style={styles.infoText}>+91 6382624227</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  style={styles.infoItem}
                >
                  <div style={styles.infoIcon}>✉️</div>
                  <div style={styles.infoContent}>
                    <h3 style={styles.infoLabel}>Email Us</h3>
                    <p style={styles.infoText}>business@neurostack.in</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Contact Form */}
            <div style={styles.contactForm}>
              <h2 style={styles.formTitle}>Send Us a Message</h2>
              <p style={styles.formSubtitle}>Tell us about your project and needs</p>

              <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />

                <div style={styles.formGroup}>
                  <label style={styles.label} htmlFor="name">Full Name *</label>
                  <input
                    style={styles.input}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label} htmlFor="email">Email Address *</label>
                  <input
                    style={styles.input}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label} htmlFor="subject">Subject *</label>
                  <input
                    style={styles.input}
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label} htmlFor="message">Message *</label>
                  <textarea
                    style={styles.textarea}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your project or inquiry in detail..."
                    required
                    rows="5"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  style={styles.submitButton}
                >
                  Submit
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
