// "use client"
// import React, { useEffect, useState } from 'react';

// interface Star {
//   id: number;
//   x: number;
//   y: number;
//   size: number;
//   opacity: number;
//   speed: number;
// }

// const StarBackground: React.FC = () => {
//   const [stars, setStars] = useState<Star[]>([]);

//   useEffect(() => {
//     const createInitialStars = () => {
//       const initialStars: Star[] = Array.from({ length: 70 }, () => {
//         const yPercentage = Math.random();
//         return {
//           id: Math.random(),
//           x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1440),
//           // Spread stars more evenly in the top half
//           y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight / 1.5 : 600),
//           size: Math.random() * 1.5 + 0.5,
//           opacity: Math.random() * 0.3 + 0.5, // Base opacity between 0.5 and 0.8
//           speed: Math.random() * 0.15 + 0.05 // Slower animation
//         };
//       });
//       setStars(initialStars);
//     };

//     createInitialStars();

//     const animateStars = () => {
//       setStars(prevStars => 
//         prevStars.map(star => ({
//           ...star,
//           opacity: (Math.sin(Date.now() * star.speed * 0.001) * 0.15 + 0.85) * star.opacity // Smaller opacity variation
//         }))
//       );
//     };

//     const intervalId = setInterval(animateStars, 50);
//     const handleResize = () => createInitialStars();

//     if (typeof window !== 'undefined') {
//       window.addEventListener('resize', handleResize);
//     }

//     return () => {
//       clearInterval(intervalId);
//       if (typeof window !== 'undefined') {
//         window.removeEventListener('resize', handleResize);
//       }
//     };
//   }, []);

//   return (
//     <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
//       {stars.map(star => (
//         <div
//           key={star.id}
//           className="absolute rounded-full transition-opacity duration-2000"
//           style={{
//             left: star.x,
//             top: star.y,
//             width: star.size,
//             height: star.size,
//             opacity: star.opacity,
//             background: 'rgba(255, 255, 255, 1)',
//             boxShadow: '0 0 3px rgba(255, 255, 255, 0.6)'
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default StarBackground;

"use client"
import React, { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
}

const StarBackground: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const createInitialStars = () => {
      const initialStars: Star[] = Array.from({ length: 70 }, () => {
        return {
          id: Math.random(),
          x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1440),
          y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight / 1.5 : 600),
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.4 + 0.6, // Fixed opacity between 0.6 and 1
        };
      });
      setStars(initialStars);
    };

    createInitialStars();

    const handleResize = () => createInitialStars();

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    return () => {
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
          className="absolute rounded-full"
          style={{
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            background: 'rgba(255, 255, 255, 1)',
            boxShadow: '0 0 3px rgba(255, 255, 255, 0.6)'
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;