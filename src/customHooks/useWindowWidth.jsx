import { useState, useEffect } from 'react';

export const useWindowWidth = () => {
  const [screenSizes, setScreenSizes] = useState(
    getScreenSize(window.innerWidth)
  );
  function getScreenSize(width) {
    if (width <= 768) return 'mobile';
    if (width <= 1024) return 'tablet';
    return 'desktop';
  }
  useEffect(() => {
    const handleResize = () => {
      setScreenSizes(getScreenSize(window.innerWidth));
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenSizes;
};
