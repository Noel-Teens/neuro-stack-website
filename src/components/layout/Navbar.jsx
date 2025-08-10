import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'About us', path: '/about' },
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isMobile = windowWidth <= 768;

  return (
    <div style={{
      position: 'fixed',
      zIndex: '2',
      width: '100%',
      paddingBottom: isMobile ? "10px" : "20px",
      background: "transparent",
    }}>
      <nav
        style={{
          marginTop: isMobile ? '20px' : '25px',
          marginLeft: isMobile ? '15px' : '45px',
          width: isMobile ? 'calc(100% - 30px)' : '95.2%',
          padding: isMobile ? '8px 15px' : '10px 28px',
          background: '#FEFFF3',
          overflow: 'hidden',
          borderRadius: '50px',
          outline: '1px #0A2647 solid',
          outlineOffset: '-1px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo */}
        <div style={{ textAlign: 'center' }}>
          <span
            style={{
              color: '#0A2647',
              fontSize: isMobile ? '20px' : '24px',
              fontWeight: '700',
              lineHeight: isMobile ? '30px' : '36px',
              wordWrap: 'break-word',
            }}
          >
            Neuro
          </span>
          <span
            style={{
              color: '#FF6B00',
              fontSize: isMobile ? '20px' : '24px',
              fontWeight: '700',
              lineHeight: isMobile ? '30px' : '36px',
              wordWrap: 'break-word',
            }}
          >
            Stack
          </span>
        </div>

        {/* Hamburger Menu for Mobile */}
        {isMobile && (
          <div 
            onClick={toggleMenu}
            style={{
              cursor: 'pointer',
              zIndex: 3,
            }}
          >
            <div style={{
              width: '25px',
              height: '3px',
              backgroundColor: '#0A2647',
              margin: '5px 0',
              transition: 'all 0.3s ease',
              transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            }}></div>
            <div style={{
              width: '25px',
              height: '3px',
              backgroundColor: '#0A2647',
              margin: '5px 0',
              transition: 'all 0.3s ease',
              opacity: isMenuOpen ? 0 : 1,
            }}></div>
            <div style={{
              width: '25px',
              height: '3px',
              backgroundColor: '#0A2647',
              margin: '5px 0',
              transition: 'all 0.3s ease',
              transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
            }}></div>
          </div>
        )}

        {/* Navigation Links for Desktop */}
        {!isMobile && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              gap: '30px',
            }}
          >
            {navItems.map((item) => (
              <div
                key={item.path}
                style={{
                  textAlign: 'center',
                  color: location.pathname === item.path ? '#FF6B00' : 'black',
                  fontSize: '16px',
                  fontWeight: '500',
                  lineHeight: '24px',
                  wordWrap: 'break-word',
                  cursor: 'pointer',
                }}
              >
                <Link
                  to={item.path}
                  style={{
                    textDecoration: 'none',
                    color: location.pathname === item.path ? '#FF6B00' : 'black',
                  }}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* Contact Button for Desktop */}
        {!isMobile && (
          <div
            style={{
              padding: '8px 22px',
              background: '#0A2647',
              borderRadius: '30px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
            }}
          >
            <div
              onClick={() => window.location.href = './contact'}
              style={{
                textAlign: 'center',
                color: '#FEFFF3',
                fontSize: '16px',
                fontWeight: '500',
                lineHeight: '24px',
                wordWrap: 'break-word',
                textDecoration: 'none',
              }}
            >
              Contact
            </div>
          </div>
        )}

        {/* Mobile Menu Overlay */}
        {isMobile && isMenuOpen && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(10, 38, 71, 0.95)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '25px',
            zIndex: 2,
          }}>
            {navItems.map((item) => (
              <div
                key={item.path}
                style={{
                  textAlign: 'center',
                  color: location.pathname === item.path ? '#FF6B00' : '#FEFFF3',
                  fontSize: '20px',
                  fontWeight: '500',
                  lineHeight: '28px',
                  wordWrap: 'break-word',
                  cursor: 'pointer',
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                <Link
                  to={item.path}
                  style={{
                    textDecoration: 'none',
                    color: location.pathname === item.path ? '#FF6B00' : '#FEFFF3',
                  }}
                >
                  {item.name}
                </Link>
              </div>
            ))}
            
            {/* Contact Button in Mobile Menu */}
            <div
              style={{
                padding: '8px 22px',
                background: '#FF6B00',
                borderRadius: '30px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '10px',
                cursor: 'pointer',
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              <Link
                to="/contact"
                style={{
                  textAlign: 'center',
                  color: '#FEFFF3',
                  fontSize: '16px',
                  fontWeight: '500',
                  lineHeight: '24px',
                  wordWrap: 'break-word',
                  textDecoration: 'none',
                }}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;