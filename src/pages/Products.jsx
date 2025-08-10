import { motion } from 'framer-motion';
import { useState, useRef, useEffect, useCallback } from 'react';
import { FaServer, FaBrain, FaRunning } from 'react-icons/fa';
import book from "../Assets/Frame3.png";
import product1 from "../Assets/api-inferencing.png";
import product2 from "../Assets/LLM.png";
import product3 from "../Assets/pose-estimation.png";

function Products() {
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [visibleImages, setVisibleImages] = useState(new Set());
  const isMobile = windowWidth <= 768;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleButtonClick = () => {
    setSnackbarVisible(true);
    setTimeout(() => {
      setSnackbarVisible(false);
    }, 6000);
  };

  const products = [
    {
      id: 'api-inferencing',
      icon: <FaServer />,
      title: 'API Inferencing',
      description:
        'We provide high-speed AI inferencing APIs for vision, speech, and language tasks that you can plug into your existing platforms effortlessly. From object detection and image captioning to speech-to-text and summarization — our APIs are optimized for low latency and high accuracy. Built with autoscaling and pay-as-you-go pricing, you only pay for what you use — whether its 10 or 10,000 calls a day.',
      buttonText: 'Try it',
      image: product1,

    },
    {
      id: 'llm-solutions',
      icon: <FaBrain />,
      title: 'Fine-Tuned LLM Solutions',
      description:
        'Tailored Large Language Model (LLM) solutions fine-tuned for real business use cases. From contract analysis for the legal sector to medical summarization for healthcare, our solutions are secure, scalable, and on-brand.',
      buttonText: 'Try it',
      image: product2,

    },
    {
      id: 'posture-tracking',
      icon: <FaRunning />,
      title: 'Posture Estimation & Tracking',
      description:
        'Real-time body movement tracking using cloud-based API inference or on-device edge deployment. Perfect for athlete motion tracking, workplace posture monitoring, and physiotherapy analytics.',
      buttonText: 'Try it',
      image: product3,

    },
  ];
  

  const canvasRefs = useRef([]);
  const containerRefs = useRef([]);

  useEffect(() => {
    products.forEach((_, index) => {
      const canvas = canvasRefs.current[index];
      const container = containerRefs.current[index];
      if (!canvas || !container) return;

      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;

      const ctx = canvas.getContext('2d');
      const w = canvas.width;
      const h = canvas.height;
      const imageData = ctx.createImageData(w, h);

      for (let i = 0; i < imageData.data.length; i += 4) {
        const rand = Math.random();
        if (rand > 0.97) {
          imageData.data[i] = 255;     // R
          imageData.data[i + 1] = 150; // G
          imageData.data[i + 2] = 50;  // B
          imageData.data[i + 3] = 255; // A
        } else {
          imageData.data[i] = 15;
          imageData.data[i + 1] = 15;
          imageData.data[i + 2] = 26;
          imageData.data[i + 3] = 255;
        }
      }

      ctx.putImageData(imageData, 0, 0);
    });
  }, [products, windowWidth]); // Re-run when window width changes

  // Base styles that remain the same
  const styles = {
    container: {
      padding: '20px',
      marginTop: '80px',
      width: '100%',
      boxSizing: 'border-box',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '40px',
    },
    headingTitle: {
      fontSize: isMobile ? '28px' : '34px',
      fontWeight: '700',
      fontFamily: 'Arial, sans-serif',
    },
    headingDescription: {
      fontSize: isMobile ? '14px' : '16px',
      fontWeight: '400',
      fontFamily: 'Arial, sans-serif',
      padding: isMobile ? '0 15px' : '0',
    },
    productCard: {
      width: '100%',
      height: isMobile ? 'auto' : '360px',
      minHeight: isMobile ? '420px' : '360px',
      position: 'relative',
      background: '#0A2647',
      overflow: 'hidden',
      borderRadius: isMobile ? '20px' : '50px',
      marginBottom: isMobile ? '20px' : '40px',
      touchAction: 'manipulation', // Prevents zoom on double-tap
      WebkitTapHighlightColor: 'transparent', // Removes tap highlight on mobile
    },
    canvasStyle: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
    },
    cardOverlay: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      background: 'linear-gradient(61deg, #0A2647 46%, rgba(10, 38, 71, 0.10) 100%)',
      zIndex: 1,
    },
    cardContent: {
      width: isMobile ? '90%' : '930px',
      height: 'auto',
      position: 'relative',
      padding: isMobile ? '30px 20px' : '40px 46px',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      gap: isMobile ? '30px' : '53px',
      display: 'flex',
      zIndex: 1,
    },
    textContainer: {
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      gap: '11px',
      display: 'flex',
    },
    cardTitle: {
      color: '#FEFFF3',
      fontSize: isMobile ? '20px' : '24px',
      fontFamily: 'Arial, sans-serif',
      fontWeight: '700',
      lineHeight: isMobile ? '30px' : '36px',
      wordWrap: 'break-word',
    },
    cardDescription: {
      color: '#FEFFF3',
      fontSize: isMobile ? '14px' : '16px',
      fontFamily: 'Arial, sans-serif',
      fontWeight: '400',
      lineHeight: isMobile ? '22px' : '26px',
      wordWrap: 'break-word',
    },
    button: {
      height: 'auto',
      minHeight: isMobile ? '44px' : 'auto', // Touch-friendly height
      paddingLeft: isMobile ? '20px' : '30px',
      paddingRight: isMobile ? '20px' : '30px',
      paddingTop: isMobile ? '12px' : '10px',
      paddingBottom: isMobile ? '12px' : '10px',
      background: '#FFCEAA',
      borderRadius: isMobile ? '25px' : '40px',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px',
      display: 'inline-flex',
      border: 'none',
      cursor: 'pointer',
      touchAction: 'manipulation',
      WebkitTapHighlightColor: 'transparent',
      transition: 'all 0.2s ease',
    },
    buttonText: {
      textAlign: 'center',
      color: '#0A2647',
      fontSize: isMobile ? '16px' : '20px',
      fontFamily: 'Arial, sans-serif',
      fontWeight: '500',
      lineHeight: isMobile ? '24px' : '30px',
      wordWrap: 'break-word',
    },
    productImage: {
      width: isMobile ? '150px' : '273px',
      height: isMobile ? '150px' : '273px',
      position: isMobile ? 'relative' : 'absolute',
      right: isMobile ? 'auto' : '60px',
      top: isMobile ? 'auto' : '43.50px',
      background: '#D9D9D9',
      borderRadius: '20px',
      marginLeft: isMobile ? '0' : '60px',
      margin: isMobile ? '30px auto 20px' : '0',
      zIndex: 1,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      
    },
    snackbar: {
      position: 'fixed',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: '#FFCEAA',
      color: 'black',
      padding: '10px 20px',
      borderRadius: '15px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '10px',
      width: isMobile ? '80%' : 'auto',
      maxWidth: isMobile ? '300px' : 'none',
    },
    ctaSection: {
      width: '100%',
      maxWidth: '1313px',
      height: isMobile ? 'auto' : '364px',
      minHeight: isMobile ? '450px' : '364px',
      position: 'relative',
      overflow: 'hidden',
      borderRadius: isMobile ? '30px' : '40px',
      margin: '60px auto',
      backgroundImage: `url(${book})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: isMobile ? '40px 20px' : '0',
    },
    ctaTitle: {
      position: isMobile ? 'relative' : 'absolute',
      left: isMobile ? 'auto' : '243px',
      top: isMobile ? 'auto' : '66px',
      textAlign: 'center',
      color: 'black',
      fontSize: isMobile ? '30px' : '48px',
      fontWeight: '700',
      lineHeight: isMobile ? '40px' : '72px',
      margin: isMobile ? '0 0 20px' : '0',
      padding: isMobile ? '0 10px' : '0',
    },
    ctaDescription: {
      position: isMobile ? 'relative' : 'absolute',
      left: isMobile ? 'auto' : '264px',
      top: isMobile ? 'auto' : '138px',
      textAlign: 'center',
      color: 'black',
      fontSize: isMobile ? '16px' : '20px',
      fontWeight: '500',
      lineHeight: isMobile ? '24px' : '30px',
      margin: isMobile ? '0 0 30px' : '0',
      padding: isMobile ? '0 10px' : '0',
      maxWidth: isMobile ? '100%' : 'auto',
    },
    ctaButtonContainer: {
      position: isMobile ? 'relative' : 'absolute',
      left: isMobile ? 'auto' : '243px',
      top: isMobile ? 'auto' : '226px',
      display: 'flex',
      justifyContent: isMobile ? 'center' : 'flex-start',
      alignItems: 'center',
      gap: '8px',
      width: isMobile ? '100%' : 'auto',
    },
    ctaButton: {
      marginLeft: isMobile ? '0' : '300px',
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
    },
    ctaButtonText: {
      textAlign: 'center',
      color: 'white',
      fontSize: isMobile ? '16px' : '20px',
      fontWeight: '500',
      lineHeight: isMobile ? '24px' : '30px',
    },
  };

  return (
    <div style={styles.container}>
      {/* heading content */}
      <div style={styles.heading}>
        <h1 style={styles.headingTitle}>Our Products</h1>
        <p style={styles.headingDescription}>
          Whether you're looking to upgrade your existing software or launch a new AI-powered platform, we've got you covered.
        </p>
      </div>
      
      {/* card content */}
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          ref={(el) => (containerRefs.current[index] = el)}
          style={{
            ...styles.productCard,
            willChange: 'transform',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <canvas
            ref={(el) => (canvasRefs.current[index] = el)}
            style={{
              ...styles.canvasStyle,
              willChange: 'transform',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden'
            }}
          />
          <div style={styles.cardOverlay} />
          
          {isMobile && (
            <div style={{
              ...styles.productImage,
              overflow: 'hidden',
              willChange: 'transform',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden'
            }}>
              <img
                src={product.image}
                alt={product.title}
                loading="lazy"
                decoding="async"
                onLoad={() => handleImageLoad(index)}
                onError={() => handleImageError(index)}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  willChange: 'transform',
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                  transition: 'opacity 0.3s ease-in-out',
                  opacity: 1
                }}
              />
            </div>
          )}
          
          <div style={styles.cardContent}>
            <div style={styles.textContainer}>
              <div style={styles.cardTitle}>
                {product.title}
              </div>
              <div style={styles.cardDescription}>
                {product.description}
              </div>
            </div>
            <button
              onClick={handleButtonClick}
              style={styles.button}
            >
              <div style={styles.buttonText}>
                {product.buttonText}
              </div>
            </button>
          </div>
          
          {!isMobile && (
             <div style={{
               ...styles.productImage,
               overflow: 'hidden',
               willChange: 'transform',
               transform: 'translateZ(0)',
               backfaceVisibility: 'hidden'
             }}>
               <img
                 src={product.image}
                 alt={product.title}
                 loading="lazy"
                 decoding="async"
                 onLoad={() => handleImageLoad(index)}
                 onError={() => handleImageError(index)}
                 style={{
                   width: '100%',
                   height: '100%',
                   objectFit: 'cover',
                   objectPosition: 'center',
                   willChange: 'transform',
                   transform: 'translateZ(0)',
                   backfaceVisibility: 'hidden',
                   transition: 'opacity 0.3s ease-in-out',
                   opacity: 1
                 }}
               />
             </div>
          )}
        </motion.div>
      ))}
      
      {/* snackbar content */}
      {snackbarVisible && (
        <div style={styles.snackbar}>
          <span>
            <span>ⓘ  </span>
            Coming Soon
          </span>
          <button
            onClick={() => setSnackbarVisible(false)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'black',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              marginLeft: '5px',
            }}
          >
            ✕
          </button>
        </div>
      )}
      
      {/* Call to Action Section */}
      <motion.div
        className="cta-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={styles.ctaSection}
      >
        <div style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          background: 'transparent',
        }}></div>

        <div style={styles.ctaTitle}>
          Ready to see what AI can do for You?
        </div>

        <div style={styles.ctaDescription}>
          Let's talk. Whether you're just exploring or ready to scale, we're here to build with you.
        </div>

        <div style={styles.ctaButtonContainer}>
          <button style={styles.ctaButton} onClick={() => window.location.href = './contact'}>
            <div style={styles.ctaButtonText}>Book a Demo</div>
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default Products;