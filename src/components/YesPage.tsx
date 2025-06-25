import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './YesPage.css';

const YesPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="yes-page-container">
      <div className="gradient-bg">
        <div className="gradient-1"></div>
        <div className="gradient-2"></div>
        <div className="gradient-3"></div>
      </div>
      
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            '--delay': `${Math.random() * 4}s`,
            '--position': `${Math.random() * 100}%`
          } as React.CSSProperties} />
        ))}
      </div>

      <motion.div 
        className="message-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          x: mousePosition.x * 0.3,
          y: mousePosition.y * 0.3
        }}
        transition={{ 
          duration: 0.8,
          ease: "easeOut",
          x: { duration: 0.2 },
          y: { duration: 0.2 }
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          And so the next chapter begins...
        </motion.h1>
        <motion.a
          href="https://facetime.apple.com/join#v=1&p=cQulHU7eEfCVUUbD6reyHw&k=a0cb03TWQvUjQnDnC7X-BNsGlmpA2iQe4KYDJ35iyOg"
          className="facetime-button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Join FaceTime Call
        </motion.a>
      </motion.div>
    </div>
  );
};

export default YesPage; 