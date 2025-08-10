import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable scroll restoration by browser
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Multiple methods to ensure scroll to top works across all browsers
    const scrollToTop = () => {
      // Method 1: Modern browsers with instant behavior
      try {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant'
        });
      } catch (e) {
        // Fallback for older browsers
        window.scrollTo(0, 0);
      }

      // Method 2: Direct DOM manipulation for better compatibility
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      // Method 3: Reset scroll for specific containers
      const containers = ['.main', '.app', 'main', '#root'];
      containers.forEach(selector => {
        const element = document.querySelector(selector);
        if (element) {
          element.scrollTop = 0;
        }
      });

      // Method 4: Force scroll reset with requestAnimationFrame for smooth execution
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      });
    };

    // Execute scroll to top immediately
    scrollToTop();

    // Also execute after a small delay to handle any async content loading
    const timeoutId = setTimeout(scrollToTop, 10);

    // Cleanup timeout on unmount
    return () => {
      clearTimeout(timeoutId);
    };

  }, [pathname]); // Trigger effect when pathname changes

  return null; // This component doesn't render anything
}

export default ScrollToTop;
