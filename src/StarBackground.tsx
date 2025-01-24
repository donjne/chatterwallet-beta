"use client"
import React, { useEffect, useState } from 'react';

const StarBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Create initial stars
    const initialStars = Array.from({ length: 50 }, () => ({
      id: Math.random(),
      x: Math.random() * window.innerWidth,
      y: Math.random() * (window.innerHeight / 2), // Only in top half
      size: Math.random() * 2 + 1,
      opacity: Math.random(),
      speed: Math.random() * 0.5 + 0.1
    }));
    setStars(initialStars);

    // Animation loop
    const animateStars = () => {
      setStars(prevStars => 
        prevStars.map(star => ({
          ...star,
          opacity: Math.sin(Date.now() * star.speed * 0.001) * 0.5 + 0.5
        }))
      );
    };

    const intervalId = setInterval(animateStars, 50);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white transition-opacity duration-1000"
          style={{
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;