import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRobot, FaDatabase, FaPaintBrush, FaEye, FaLanguage, FaFlask, FaLaptopCode, FaPalette, FaPencilAlt } from 'react-icons/fa';
import book from "../Assets/Frame3.png";

function Services() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const services = [
    {
      id: 'agentic-ai',
      icon: <FaRobot />,
      title: 'Agentic AI Systems',
      description: 'AI that reasons, plans, and acts like a human assistant — fully or semi-autonomous.',
      features: [
        'Task Automation Agents',
        'Tool-Using Agents',
        'Memory-Augmented Agents',
        'Workflow Orchestration Agents',
        'Personalized Assistants'
      ]
    },
    {
      id: 'rag-systems',
      icon: <FaDatabase />,
      title: 'RAG Systems',
      description: 'AI that reads your files, websites, or databases before answering — smarter than plain GPT.',
      features: [
        'PDF/Data Search Chatbots',
        'Domain-Specific Q&A Bots',
        'API-Augmented Generative Apps',
        'Vector DB Integration'
      ]
    },
    {
      id: 'generative-ai',
      icon: <FaPaintBrush />,
      title: 'Generative AI Solutions',
      description: 'AI that creates new things — text, code, images, videos, and voices.',
      features: [
        'Text Generation',
        'Image Generation',
        'Code Generation',
        'Voice Generation',
        'Video Generation (Coming Soon)'
      ]
    },
    {
      id: 'computer-vision',
      icon: <FaEye />,
      title: 'AI for Vision and Language',
      description: 'AI systems that can perceive the world through images and videos',
      features: [
        'Object Detection, Segmentation, and Classification',
        'Image Captioning and Optical Character Recognition (OCR)',
        'Pose Estimation and Medical Imaging Analysis',
        'Speech-to-Text Conversion',
        // 'Conversational Agents (Chatbots & Virtual Assistants)',
        // 'Sentiment and Intent Analysis',
        // 'Text Summarization and Translation'
      ]
    },
    // {
    //   id: 'nlp',
    //   icon: <FaLanguage />,
    //   title: 'Natural Language Processing',
    //   description: 'Teach AI to understand, analyze, and generate human language.',
    //   features: [
    //     'Speech-to-Text',
    //     'Chatbots & Virtual Agents',
    //     'Sentiment & Intent Analysis',
    //     'Summarization',
    //     'Translation',
    //     'Named Entity Recognition'
    //   ]
    // },
    {
      id: 'ai-rd',
      icon: <FaFlask />,
      title: 'AI R&D & Innovation',
      description: 'Custom AI experiments, research tools, and next-gen solutions.',
      features: [
        'Custom Model Training',
        'Federated & Edge AI',
        'IoT + AI Fusion',
        'Benchmarking & Evaluation',
        'Custom Algorithm Design'
      ]
    },
    {
      id: 'web-mobile',
      icon: <FaLaptopCode />,
      title: 'Web & Mobile Development',
      description: 'Scalable apps built using modern tech and integrated with AI.',
      features: [
        'Web App Development',
        'Mobile App Development',
        'API & Cloud Integration',
        'Admin Dashboards'
      ]
    },
    // {
    //   id: 'ui-ux',
    //   icon: <FaPalette />,
    //   title: 'UI/UX Design',
    //   description: 'User-first design that feels natural and looks stunning.',
    //   features: [
    //     'Wireframes & Prototypes',
    //     'Responsive Web & App Design',
    //     'Design Systems & Components'
    //   ]
    // },
    // {
    //   id: 'graphic-design',
    //   icon: <FaPencilAlt />,
    //   title: 'Graphic Designing',
    //   description: 'Visual identity and assets for web, social, and print.',
    //   features: [
    //     'Logo & Brand Identity',
    //     'Social Media Creatives',
    //     'Business Collaterals'
    //   ]
    // }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="services-page">
      {/* Hero Section */}
      <motion.section 
        className="services-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="services-hero-content">
        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{fontSize: '40px',fontWeight:'bold',marginBottom: '30px',color: '#FF6B00',}}
          >
            Our Services
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{fontSize: '25px',}}
          >
            Seamless AI Integration & Custom Development for Your Business
          </motion.p>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section 
        className="services-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="service-card"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="service-icon">
              {service.icon}
            </div>
            <h2>{service.title}</h2>
            <p className="service-description">{service.description}</p>
            <ul className="service-features">
              {service.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.section>

      {/* Call to Action Section */}
      <motion.div
        className="cta-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          width: '100%',
          maxWidth: '1313px',
          height: 'auto',
          minHeight: '364px',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '40px',
          margin: '60px auto',
          backgroundImage: `url(${book})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '40px 20px',
        }}
      >
        <div style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          background: 'transparent',
        }}></div>

        <div style={{
          position: 'relative',
          textAlign: 'center',
          color: 'black',
          fontSize: isMobile ? '35px' : '64px',
          fontWeight: '700',
          lineHeight: isMobile ? '42px' : '72px',
          margin: '0 0 20px',
          padding: '0 10px',
        }}>
          Ready to see what AI can do for You?
        </div>

        <div style={{
          position: 'relative',
          textAlign: 'center',
          color: 'black',
          fontSize: '20px',
          fontWeight: '500',
          lineHeight: '30px',
          margin: '0 0 30px',
          padding: '0 10px',
          maxWidth: '100%',
        }}>
          Let's talk. Whether you're just exploring or ready to scale, we're here to build with you.
        </div>

        <div style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          width: '100%',
        }}>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <button style={{
              paddingLeft: '40px',
              paddingRight: '40px',
              paddingTop: '10px',
              paddingBottom: '10px',
              background: '#0A2647',
              borderRadius: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
              border: 'none',
            }}>
              <div style={{
                textAlign: 'center',
                color: 'white',
                fontSize: '20px',
                fontWeight: '500',
                lineHeight: '30px',
              }}>Schedule a Consultation</div>
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default Services;
