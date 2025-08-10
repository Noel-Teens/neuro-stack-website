import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import frame1 from "../Assets/frame4.png"
import frame2 from "../Assets/frame2.png"
import { FaArrowRight } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';
import home1 from "../Assets/home1.jpeg"
import home2 from "../Assets/home2.jpeg"
import home3 from "../Assets/home3.jpeg"
import home4 from "../Assets/home4.jpeg"
import home5 from "../Assets/home5.jpeg"
import book from "../Assets/Frame3.png"

const Home = () => {
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const achievementsRef = useRef(null);
  // Track which achievements are visible for animation
  const [visibleAchievements, setVisibleAchievements] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!achievementsRef.current) return;
      const achievementElements = achievementsRef.current.querySelectorAll('.achievement-item');
      const newVisible = [];
      achievementElements.forEach((el, idx) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          newVisible.push(idx);
        }
      });
      setVisibleAchievements(newVisible);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enhanced animation variants
  const fadeInUp = {
    initial: {
      opacity: 0,
      y: 60,
      scale: 0.95
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const slideInLeft = {
    initial: {
      opacity: 0,
      x: -100,
      rotateY: -15
    },
    animate: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const scaleIn = {
    initial: {
      opacity: 0,
      scale: 0.8,
      rotateX: 15
    },
    animate: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const floatingAnimation = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };


  const services = [
    {
      title: 'Agentic AI Systems',
      description: 'Build AI assistants that act, think, and plan like humans',
      image: `url(${home1})`,
    },
    {
      title: 'LLM Solutions',
      description: 'Fine-tuned, secure large language models tailored to your domain',
      image: `url(${home2})`,
    },
    {
      title: 'Computer Vision',
      description: 'From object detection to medical imaging, we help machines see clearly',
      image: `url(${home3})`,
    },
    {
      title: 'Development',
      description: 'Build, scale, and deploy digital products with AI at the core',
      image: `url(${home4})`,
    },
    {
      title: 'API-as-a-Service',
      description: 'Plug in AI features with one line of code. Scalable. Reliable. Fast.',
      image: `url(${home5})`,
    }
  ];

  const testimonials = [
    {
      text: "Their custom LLM saved us over 40 hours a week in manual work. And their team? Incredibly responsive and thoughtful.",
      author: "Ananya Rao",
      position: "COO, LexSecure LegalTech"
    },
    {
      text: "We integrated their API for image captioning in under a day — and it scaled beautifully. Our team was blown away by the accuracy.",
      author: "Rajat Mehra",
      position: "CTO, VizTrack Analytics"
    },
    {
      text: "Honestly, I thought AI was out of our league. But their edge-ready posture system transformed our physiotherapy platform. It just works.",
      author: "Dr. Neha Balan",
      position: "Co-founder, MoviThera Health"
    }
  ];

  const achievements = [
    {
      text: "Deployed 15+ AI-powered products across healthcare, fintech, edtech, and manufacturing.",
      color: "#0A2647"
    },
    {
      text: "Clients in 6 countries — with seamless deployment across cloud and edge.",
      color: "#134886"
    },
    {
      text: "98% API uptime and auto-scalable infrastructure for mission-critical workloads.",
      color: "#1C69C4"
    },
    {
      text: "Partnered with leading research institutions for AI innovation in assistive tech.",
      color: "rgba(10, 38, 71, 0.10)"
    },
    {
      text: "Selected for India's Top 100 DeepTech Startups list, 2024.",
      color: "rgba(10, 38, 71, 0.10)"
    }
  ];

  

  return (
    <div className="home-page">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="hero-section"
        initial={{ opacity: 0, y: 50, rotateX: 10 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 1,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.2
        }}
        style={{
          backgroundImage:`url(${frame1}) `,
          backgroundColor: '#0A2647',
          backgroundSize: 'cover',
        }}
      >
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            variants={fadeInUp}
            // whileHover={{
            //   scale: 1.05,
            //   transition: { duration: 0.3 }
            // }}
            style={{ marginTop: isMobile ? '25px': '0px' }}
          >
            Commoditizing AI
          </motion.h1>

          <motion.p
            className="hero-tagline"
            variants={fadeInUp}
          >
            Making intelligent systems accessible, affordable, and actionable — for everyone.
          </motion.p>

          {/* Enhanced services button */}
          <motion.button
            variants={fadeInUp}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              paddingLeft: '40px',
              paddingRight: '40px',
              paddingTop: '10px',
              borderRadius: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
              border: 'none',
              background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}
          >
            <motion.div
              style={{
                textAlign: 'center',
                color: 'black',
                fontSize: '20px',
                fontWeight: '500',
                lineHeight: '30px'
              }}
              onClick={() => window.location.href = './services'}
              // whileHover={{ x: 5 }}
            >
              <p>Our Services</p>
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Welcome Section */}
      <motion.section
        className="welcome-section"
        initial={{ opacity: 0, y: 50, rotateX: 10 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 1,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.2
        }}
        style={{ backgroundImage:`url(${frame2})`, backgroundSize: 'cover'}}
      >
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.p
            variants={slideInLeft}
            style={{
              color:'white',
              fontSize:'30px',
              marginBottom: '20px'
            }}
          >
            Welcome to Neurostack
          </motion.p>

          <motion.p
            variants={fadeInUp}
            style={{color:'white',fontSize:'20px', marginBottom: '15px'}}
          >
            We're not just building AI — <motion.span
              style={{color:'#0A2647'}}
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 2px rgba(10, 38, 71, 0.8)"
              }}
            >
              we're simplifying it, scaling it, and putting it to work for businesses like yours.
            </motion.span> From custom-trained LLMs to powerful vision APIs and edge-ready agents, our solutions are built to plug into your world without the complexity.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            style={{color:'white',fontSize:'20px'}}
          >
            Whether you want to transform your existing workflow or launch an AI-native product, we help you move faster — with solutions that are smart, scalable, and production-ready.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Services Preview */}
      <section className="services-preview" ref={servicesRef} style={{paddingBottom: isMobile? '0px':'60px'}}>
        <motion.h2
          // initial={{ opacity: 0, y: 30 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: true }}
          // transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          What We Offer
        </motion.h2>

        <motion.div
          className="services-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              // variants={scaleIn}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: '#FEFFF3',
                padding: isMobile ? '20px' : '25px',
                borderRadius: isMobile ? '20px' : '30px',
                height: isMobile ? 'auto' : '402px',
                minHeight: isMobile ? '350px' : '402px',
                maxWidth: isMobile ? '100%' : '328px',
                width: '100%',
                flexDirection: 'column',
                gap: isMobile ? '15px' : '20px',
                display: 'flex',
                justifyContent: "space-evenly",
                cursor: 'pointer',
                boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                margin: isMobile ? '0 auto 20px' : '0'
              }}
            >
              <motion.div
                style={{
                  height: "40px",
                  maxWidth: isMobile ? "100%" : "277px",
                  width: "100%",
                  background: '#FF9C55',
                  borderRadius: isMobile ? '30px' : '40px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: isMobile ? '8px' : '10px',
                  padding: isMobile ? '0 10px' : '0'
                }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  style={{
                    height: '40px',
                    width: '40px',
                    borderRadius: '100%',
                    background: '#FFCEAA',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop:'10px'
                  }}
                  whileHover={{
                    rotate: 360,
                    transition: { duration: 0.6 }
                  }}
                >
                  <h3>{index + 1}</h3>
                </motion.div>
                <h3 style={{paddingTop:'10px'}}>{service.title}</h3>
              </motion.div>

              <motion.div
                style={{
                  maxWidth: isMobile ? '100%' : '277px',
                  width: '100%',
                  height: isMobile ? '100px' : '124px',
                  borderRadius: isMobile ? "15px" : "20px",
                  backgroundImage: service.image,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                whileHover={{
                  // scale: isMobile ? 1.02 : 1.05,
                   transition: { duration: 0.3 }
                }}
              />

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                style={{
                  fontSize: isMobile ? '13px' : '14px',
                  lineHeight: '1.5',
                  textAlign: 'center',
                  color: '#666',
                  padding: isMobile ? '0 5px' : '0',
                  margin: isMobile ? '10px 0' : '15px 0'
                }}
              >
                {service.description}
              </motion.p>
            </motion.div>
          ))}

          <motion.div
            className="explore-all-services"
            // variants={fadeInUp}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius:'40px',
              height:'50px',
              maxWidth:'277px',
              width: '100%',
              marginTop: isMobile ? '20px' : '180px',
              marginLeft: isMobile?'10px' :'40px',
              cursor:'pointer',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}
            onClick={() => window.location.href = './services'}
          >
            <motion.div whileHover={{ x: 5 }}>
              <p style={{marginTop:'13px'}}>Explore All Services →</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="testimonials" ref={testimonialsRef}>
        <motion.h2
          // initial={{ opacity: 0, y: 30 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: true }}
          // transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          What Our Clients Say
        </motion.h2>

        <motion.div
          className="testimonials-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              // variants={scaleIn}
              whileHover={{
                scale: 1.03,
                rotateY: 2,
                boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
                transition: { duration: 0.3 }
              }}
              style={{
                cursor: 'pointer'
              }}
            >
              <motion.span
                className="stars"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.5 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{
                  scale: 1.2,
                  rotate: 5
                }}
              >
                ⭐️⭐️⭐️⭐️⭐️
              </motion.span>

              <motion.p
                className="testimonial-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {testimonial.text}
              </motion.p>

              <motion.p
                className="testimonial-author"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                — {testimonial.author}
              </motion.p>

              <motion.p
                className="testimonial-position"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {testimonial.position}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Achievements */}
      <section style={{margintop: "30px",
      
  position: "relative",
          background:' white',
          overflow: "hidden",
          width: "100%",
          padding: "64px 0",}}>
        <h2 style={{marginLeft:"600px"}}>Our Achievements</h2>
        <div style={{
  margin:" 0 auto",
  padding: "0 20px",
}}>
          <div ref={achievementsRef}>
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="achievement-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  marginBottom: "32px",
                  marginLeft: "122px",
                }}
                initial={{ opacity: 0.3 }}
                animate={{
                  opacity: visibleAchievements.includes(index) ? 1 : 0.3,
                  fontWeight: visibleAchievements.includes(index) ? "bold" : "normal",
                }}
                transition={{ duration: 0.5 }}
              >
                <div style={{
                  width: "28px",
                  height: "28px",
                  background: achievement.color || "#D9D9D9",
                  flexShrink: "0",
                }} />
                <div style={{
                  fontSize: "24px",
                  fontFamily: 'sans-serif',
                  fontWeight: "700",
                  lineHeight: "36px",
                }}>{achievement.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
          lineHeight: '72px',
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
              }}>Talk to Our Team</div>
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
