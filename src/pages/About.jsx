import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import bgimg2 from "../Assets/background1.jpg"
import bgimg3 from "../Assets/background2.jpg"
import profileImg1 from "../Assets/about1.jpg"
import profileImg2 from "../Assets/about2.jpg"
import book from "../Assets/Frame3.png"


const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 300);
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);

  // Add CSS animation for loading spinner
  const spinnerStyle = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

  // Inject spinner animation styles
  if (typeof document !== 'undefined' && !document.getElementById('spinner-styles')) {
    const style = document.createElement('style');
    style.id = 'spinner-styles';
    style.textContent = spinnerStyle;
    document.head.appendChild(style);
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // IMMEDIATELY preload hero background image when website starts
    const preloadHeroImage = () => {
      const heroImg = new Image();

      // Set highest priority for immediate loading
      heroImg.loading = 'eager';
      heroImg.fetchPriority = 'high';
      heroImg.decoding = 'sync'; // Synchronous decoding for immediate display

      heroImg.onload = () => {
        setHeroImageLoaded(true);
        console.log('Hero background image preloaded successfully');
      };

      heroImg.onerror = () => {
        console.warn('Failed to preload hero background image');
        setHeroImageLoaded(false);
      };

      // Start loading the hero image immediately
      heroImg.src = bgimg2;
    };

    // Execute hero image preloading immediately on component mount
    preloadHeroImage();

    // Also preload other critical images after a short delay
    setTimeout(() => {
      const secondaryImages = [bgimg3, book, profileImg1, profileImg2];
      secondaryImages.forEach(imageUrl => {
        const img = new Image();
        img.loading = 'lazy';
        img.fetchPriority = 'low';
        img.src = imageUrl;
      });
    }, 100);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const values = [
    {
      icon: '🎯',
      title: 'User-Centric Innovation',
      description: "We build with empathy, always putting the user's needs at the center."
    },
    {
      icon: '🔍',
      title: 'Transparency',
      description: 'We keep our processes, decisions, and data practices clear and open.'
    },
    {
      icon: '⭐',
      title: 'Quality First',
      description: 'No shortcuts — we focus on excellence in every product and line of code.'
    },
    {
      icon: '💡',
      title: 'Curiosity & Learning',
      description: "We grow by exploring, experimenting, and staying on the edge of what's possible."
    },
    {
      icon: '🌱',
      title: 'Sustainability',
      description: 'We care about long-term impact — for our clients, our people, and the planet.'
    }
  ];

  return (
    <>
      <div className="about-page"
        style={{
          margin: '0',
          padding: '0',
        }}>
          
        {/* Layer 1: Hero Section with Preloaded Background */}
        <div style={{
          backgroundImage: heroImageLoaded ? `url(${bgimg2})` : 'none', // Only show image when preloaded
          backgroundColor: heroImageLoaded ? 'transparent' : '#f0f0f0', // Fallback background while loading
          backgroundSize: "cover", // Ensure the image covers the entire page
          backgroundPosition: 'center', // Center the image
          backgroundRepeat: 'no-repeat', // Prevent the image from repeating
          backgroundAttachment: "fixed",
          minHeight: isMobile ? '80vh' : '110vh', // Responsive height
          width: '100%',
          zIndex: '1',
          display: 'flex',
          alignItems: 'center',
          position: 'relative', // Added for mobile positioning
          transition: 'background-image 0.3s ease-in-out', // Smooth transition when image loads
          // Performance optimizations
          willChange: 'transform',
          transform: 'translate3d(0, 0, 0)',
          backfaceVisibility: 'hidden',
          perspective: 1000,
          isolation: 'isolate',
          contain: 'layout style paint',
        }}>
          {/* Loading indicator while hero image is being preloaded */}
          {/* {!heroImageLoaded && (
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: '#666',
              fontSize: '16px',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              zIndex: 10,
            }}>
              <div style={{
                width: '20px',
                height: '20px',
                border: '2px solid #f3f3f3',
                borderTop: '2px solid #FF6B00',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
              }}></div>
              Loading...
            </div>
          )} */}
          
          <motion.div
            className="zero-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '36px',
              maxWidth: '600px',
              marginLeft: '130px',
              marginTop: isMobile ? '100px' : '0px',
              padding: '60px 20px',
              background: "rgba(203, 203, 203, 0.96)",
              boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
              '@media(max-width: 768px)': {
                marginLeft: '0',
                maxWidth: '90%',
                margin: '0 auto',
              }
            }}
          >
            
            <h1 style={{
              color: '#FF6B00',
              alignSelf: 'stretch',
              textAlign: 'center',
              fontSize: '48px',
              fontFamily: 'Arial, sans-serif',
              fontWeight: '700',
              lineHeight: '72px',
            }}>About Us</h1>

            <div style={{
              alignSelf: 'stretch',
              textAlign: 'justify'
            }}>
              <p style={{
                color: 'black',
                fontSize: '20px',
                fontFamily:'Arial, sans-serif',
                fontWeight: '500',
                lineHeight: '30px',
                marginBottom: '24px'
              }}>
                We are a team of technologists, researchers, and creative thinkers building intelligent systems that solve real-world problems. Our mission is to bridge the gap between cutting-edge AI and everyday business needs — making powerful technology approachable, ethical, and scalable. From startups to enterprises, we help teams integrate, innovate, and transform through AI-driven solutions tailored to their workflows.
              </p>

              <p style={{
                color: 'black',
                fontSize: '20px',
                fontFamily:'Arial, sans-serif',
                lineHeight: '36px'
              }}>
                Whether it's deploying production-grade APIs, building custom AI agents, or designing intuitive user experiences — we're committed to delivering impact, not just innovation.
              </p>
            </div>

          </motion.div>
        </div>
        
        {/* content 1 */}
        <div
          className="new-design-section responsive-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            background:"rgb(224, 194, 163)",
            width: '100%',
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            height: 'auto',
            minHeight: '650px',
            padding: '40px 20px',
            flexWrap: 'wrap',
          }}>
          {/* left content*/}
          <div style={{
            display: 'flex',
            flexDirection: "column",
            gap: '20px',
          }}>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              style={{
                width: '100%',
                maxWidth: '523px',
                height: 'auto',
                minHeight: '210px',
                background: '#0A2647',
                borderRadius: '40px',
                padding: '30px 40px',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: '35px',
              }}
            >
              <div style={{
                color: '#FF6B00',
                fontSize: '24px',
                fontWeight: '700',
                lineHeight: '36px',
                marginBottom: '20px',
              }}>Vision</div>
              <div style={{
                color: 'white',
                fontSize: '20px',
                fontWeight: '500',
                lineHeight: '30px',
              }}>To make AI accessible, responsible, and transformative — for every business, team, and idea that dares to grow</div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              style={{
                width: '100%',
                maxWidth: '523px',
                height: 'auto',
                padding: '30px 40px',
                background: '#0A2647',
                borderRadius: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                gap: '30px'
              }}
            >
              <div style={{
                color: '#FF6B00',
                fontSize: '24px',
                fontWeight: '700',
                lineHeight: '36px'
              }}>Mission</div>
              <div style={{
                color: 'white',
                fontSize: '20px',
                fontWeight: '500',
                lineHeight: '30px'
              }}>To engineer intelligent systems that empower organizations to work smarter, move faster, and create with confidence. We combine deep tech expertise with real-world understanding to craft solutions that drive lasting value.</div>
            </motion.div>

          </div>

          {/* right content*/}
          <div style={{
            borderRadius: "10px",
            backgroundImage: `url(${bgimg3})`, // Set the background image
            backgroundSize: "cover", // Ensure the image covers the entire page
            backgroundPosition: 'center', // Center the image
            backgroundRepeat: 'no-repeat', // Prevent the image from repeating
            backgroundAttachment: 'fixed',
            width: '100%',
            maxWidth: '800px',
            height: '500px',
            display: 'flex',
            alignItems: 'center',
          }}>

          </div>

        </div>
   
        {/* Team Profiles Section */}
        <motion.div
          className="team-profiles-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            marginTop:'30px',
            width: '100%',
            maxWidth: '1200px',
            margin: '30px auto',
            padding: '0 20px',
          }}
        >
          {/* Profile 1 */}
          <motion.div 
            className="profile-container"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '60px',
              gap: '40px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {/* Left side - Round image */}
            <div style={{
              width: isMobile ? '200px' : '280px',
              height: isMobile ? '200px' : '280px',
              borderRadius: '50%',
              overflow: 'hidden',
              flexShrink: 0,
              boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.5)',
              border: isMobile ? '3px solid #0A2647' : '4px solid #0A2647',
            }}>
              <img 
                src={profileImg1} 
                alt="CEO Profile" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }} 
              />
            </div>

            {/* Right side - Details */}
            <div style={{
              flex: '1 1 300px',
              maxWidth: '100%',
              textAlign: isMobile ? 'center' : 'left',
            }}>
              <h3 style={{
                color: '#0A2647',
                fontSize: isMobile ? '24px' : '28px',
                fontWeight: '700',
                marginBottom: '10px'
              }}>Sakthi Mahendran</h3>
              
              <p style={{
                color: '#FF6B00',
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '20px'
              }}>Founder & CEO</p>
              
              <p style={{
                color: '#212121',
                fontSize: '18px',
                fontWeight: '400',
                lineHeight: '28px',
                marginBottom: '15px'
              }}>
                Sakthi leads the vision and direction of our company, driving innovation across AI-powered solutions. With a deep passion for technology and problem-solving, he has been instrumental in turning ideas into impactful products. His focus remains on building scalable systems that are accessible, intelligent, and built for real-world use.
              </p>
              
              <div style={{
                display: 'flex',
                gap: '15px',
              }}>
                <button style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#0A2647',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  cursor: 'pointer'
                }} onClick={() => window.open('https://www.linkedin.com/in/sakthimahendrank/', '_blank')}>
                  <span>in</span>
                </button>
                {/* <button style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#0A2647',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  cursor: 'pointer'
                }}>
                  <span>𝕏</span>
                </button> */}
              </div>
            </div>
          </motion.div>

          {/* Profile 2 */}
          <motion.div 
            className="profile-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '40px',
              flexDirection: 'row-reverse', // Reverse direction for visual variety
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {/* Left side - Round image */}
            <div style={{
              width: '280px', 
              height: '280px',
              borderRadius: '50%',
              overflow: 'hidden',
              flexShrink: 0,
              boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.5)',
              border: '4px solid #0A2647'
            }}>
              <img 
                src={profileImg2} 
                alt="CTO Profile" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }} 
              />
            </div>

            {/* Right side - Details */}
            <div style={{
              flex: '1 1 300px',
              maxWidth: '100%',
            }}>
              <h3 style={{
                color: '#0A2647',
                fontSize: '28px',
                fontWeight: '700',
                marginBottom: '10px'
              }}>Kiran Parthiban</h3>
              
              <p style={{
                color: '#FF6B00',
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '20px'
              }}>Managing Director & Co-Founder</p>
              
              <p style={{
                color: '#212121',
                fontSize: '18px',
                fontWeight: '400',
                lineHeight: '28px',
                marginBottom: '15px'
              }}>
                Kiran oversees operations, strategy, and client delivery. With a strong foundation in engineering and leadership, he ensures our solutions meet the highest standards of performance and usability. His commitment to building meaningful AI applications keeps the company aligned with its mission of making technology human-centric.
              </p>
              
              <div style={{
                display: 'flex',
                gap: '15px',
              }}>
                <button style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#0A2647',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  cursor: 'pointer'
                }} onClick={() => window.open('https://www.linkedin.com/in/kiran-parthiban/', '_blank')}>
                  <span>in</span>
                </button>
                {/* <button style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#0A2647',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  cursor: 'pointer'
                }}>
                  <span>𝕏</span>
                </button> */}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Core Values Section */}
        <motion.div
          className="new-design-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            width: '100%',
            margin: '60px auto',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            height: 'auto',
            minHeight: '638px',
            padding: '0 20px',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            style={{
              width: '100%',
              maxWidth: '863px',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '39px'
            }}
          >
            <div style={{
              textAlign: 'center',
              color: 'black',
              fontSize: '34px',
              fontWeight: '700',
              lineHeight: '51px'
            }}>Core Values</div>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '28px',
              flexWrap: 'wrap',
              alignContent: 'center'
            }}>
              {values.slice(0).map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + ((index + 1) * 0.1), duration: 0.5 }}
                  viewport={{ once: true }}
                  style={{
                    width: '100%',
                    maxWidth: '269px',
                    padding: '42px 26px',
                    background:  '#0A2647',
                    boxShadow: '0px 0px 24px rgba(0, 0, 0, 0.20)',
                    overflow: 'hidden',
                    borderRadius: '40px',
                    outline: '2px #0A2647 solid',
                    outlineOffset: '-2px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    gap: '19px',
                    marginBottom: '20px',
                  }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: '9px'
                  }}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '100px',
                      background: '#FF6B00',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}></div>
                    <div style={{
                      color: '#FF6B00',
                      fontSize: '16px',
                      fontWeight: '600',
                      lineHeight: '24px'
                    }}>{value.title}</div>
                  </div>
                  <div style={{
                    color: 'white',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '26px'
                  }}>{value.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Diversity Section */}
        <motion.section
          className="diversity-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            maxWidth: '1114px',
            margin: '0 auto 60px',
            padding: '20px',
            paddingBottom: '40px',
            backgroundSize: "cover",
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: "fixed",
            borderRadius: "15px",
          }}
        >
          <h2 style={{
            textAlign: 'center',
            color: '#0A2647',
            fontSize: '34px',
            fontWeight: '700',
            marginBottom: '20px',
          }}>Diversity & Inclusion</h2>
          <div className="diversity-content"
            style={{
              background:'#FEFFF3',
              padding: '20px',
              borderRadius: '15px',
            }}
          >
            <p style={{
              color: '#212121',
              fontSize: '18px',
              lineHeight: '30px',
              marginBottom: '20px',
            }}>Innovation thrives when diverse minds work together. We actively build an environment where people from all backgrounds feel safe, seen, and supported. Our team brings together voices across different cultures, disciplines, and experiences — because great ideas don't come from echo chambers.</p>
            <p style={{
              color: '#212121',
              fontSize: '18px',
              lineHeight: '30px',
            }}>From hiring practices to team rituals, we prioritize inclusion not as a checkbox, but as a core strength. We believe in equal opportunity, open collaboration, and creating space for every individual to lead, grow, and belong.</p>
          </div>
        </motion.section>

        {/* Call to Action Section */}
        <motion.div
          className="cta-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            width: '94%',
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
            padding: '40px 20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h2 style={{
            textAlign: 'center',
            color: 'black',
            fontSize: '36px',
            fontWeight: '700',
            lineHeight: '1.3',
            marginBottom: '20px',
          }}>Ready to see what AI can do for You?</h2>

          <p style={{
            textAlign: 'center',
            color: 'black',
            fontSize: '20px',
            fontWeight: '500',
            lineHeight: '30px',
            marginBottom: '30px',
            maxWidth: '800px',
          }}>Let's talk. Whether you're just exploring or ready to scale, we're here to build with you.
          </p>

          <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            flexWrap: 'wrap',
          }}>

            <button style={{
              marginBottom: '10px',
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
              cursor: 'pointer'
            }} onClick={() => window.location.href = './contact'}>
              <div style={{
                textAlign: 'center',
                color: 'white',
                fontSize: '20px',
                fontWeight: '500',
                lineHeight: '30px',
              }}>Book a Demo</div>
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default About;