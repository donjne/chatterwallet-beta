"use client"
import React, { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
}

const StarBackground: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const createInitialStars = () => {
      const initialStars: Star[] = Array.from({ length: 100 }, () => {
        const yPercentage = Math.random();
        return {
          id: Math.random(),
          x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1440),
          // Concentrate more stars in the top third
          y: (Math.pow(yPercentage, 2)) * (typeof window !== 'undefined' ? window.innerHeight / 2.5 : 400),
          size: Math.random() * 1.5 + 0.5, // Slightly smaller stars
          opacity: Math.random() * 0.7 + 0.3, // Higher base opacity
          speed: Math.random() * 0.3 + 0.1 // Slower animation
        };
      });
      setStars(initialStars);
    };

    createInitialStars();

    const animateStars = () => {
      setStars(prevStars => 
        prevStars.map(star => ({
          ...star,
          opacity: (Math.sin(Date.now() * star.speed * 0.001) * 0.3 + 0.7) * star.opacity
        }))
      );
    };

    const intervalId = setInterval(animateStars, 50);
    const handleResize = () => createInitialStars();

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      clearInterval(intervalId);
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute rounded-full transition-opacity duration-1000"
          style={{
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            background: 'rgba(255, 255, 255, 0.8)',
            boxShadow: '0 0 2px rgba(255, 255, 255, 0.4)'
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;