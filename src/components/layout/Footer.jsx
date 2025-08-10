import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Footer() {
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.footer
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="footer-container">
        <motion.div className="footer-grid" variants={itemVariants}>
          {/* Company Info */}
          <div className="footer-company">
            <h3><span>Neuro</span>Stack</h3>
            <p>
              Advancing the future of neurotechnology with innovative solutions and cutting-edge research.
            </p>
            <div className="social-links">
              <a href="https://www.linkedin.com/company/neurostack-org/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={24} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <motion.div className="footer-links" variants={itemVariants}>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div className="footer-services" variants={itemVariants}>
            <h4>Services</h4>
            <ul>
              <li>
                <Link to="/services#api">API Inferencing</Link>
              </li>
              <li>
                <Link to="/services#llm">LLM Solutions</Link>
              </li>
              <li>
                <Link to="/services#posture">Posture Estimation</Link>
              </li>
              <li>
                <Link to="/services#consulting">AI Consulting</Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div className="footer-contact" variants={itemVariants}>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="mailto:info@neurostack.in">info@neurostack.in</a>
              </li>
              <li>
                <a href="tel:+916382624227">+91 6382624227</a>
              </li>
              
            </ul>
          </motion.div>
        </motion.div>

        <motion.div 
          className="footer-bottom"
          variants={itemVariants}
        >
          <p>&copy; {new Date().getFullYear()} NeuroStack. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;
