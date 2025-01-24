"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

type Position = 0 | 1 | 2;
interface LeftPositions {
  [key: number]: string;
}

const FeatureCards = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const cards = [
    {
      id: 0,
      title: "Get 1000+ base credits",
      description: "Early base credits to unlock exclusive discounts and execute cheaper transactions",
      image: "/gift.png" 
    },
    {
      id: 1,
      title: "Be a Pioneer",
      description: "Your feedback will shape the Chatter Wallet experience",
      image: "/cursor.png" 
    },
    {
      id: 2,
      title: "Pay Bills Seamlessly",
      description: "Use your cryptocurrency to pay electricity, water, and internet bills with ease",
      image: "/dollar.png"
    }
  ];

  // Slide animation positions
  const getPositionStyles = (position: Position) => {
    const baseWidth = 450; // Increased base width
    const styles = {
      0: { left: '-100%', opacity: 0 },
      1: { left: '50%', transform: 'translateX(-50%)', opacity: 1 },
      2: { left: '100%', opacity: 0 }
    };
    return styles[position];
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((current) => (current + 1) % 3);
        setIsAnimating(false);
      }, 1000);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-[1440px] mx-auto overflow-hidden" style={{ height: '700px' }}>
      <div className="relative h-full">
        {cards.map((card, index) => {
          const position = (index - activeIndex + 3) % 3 as Position;
          const positionStyles = getPositionStyles(position);
          
          return (
            <div
              key={card.id}
              className="absolute top-1/2 -translate-y-1/2"
              style={{
                width: position === 1 ? '500px' : '400px', // Increased sizes
                height: position === 1 ? '600px' : '500px',
                ...positionStyles,
                transition: 'all 1000ms cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {/* Outer glass effect container */}
              <div
                className="relative w-full h-full"
                style={{
                  background: 'rgba(20, 20, 25, 0.4)',
                  borderRadius: '40px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                {/* Inner card with frosted glass effect */}
                <div 
                  className="absolute inset-[2px] rounded-[38px]"
                  style={{
                    background: 'linear-gradient(180deg, rgba(30, 30, 35, 0.6) 0%, rgba(30, 30, 35, 0.3) 100%)',
                    border: position === 1 ? '2px solid #8B5FE2' : '1px solid rgba(98, 91, 133, 0.2)',
                    boxShadow: position === 1 ? '0 0 20px rgba(139, 95, 226, 0.2)' : 'none',
                  }}
                >
                  {/* Inner content container with additional glass effect */}
                  <div 
                    className="absolute inset-[2px] rounded-[36px] overflow-hidden"
                    style={{
                      background: 'linear-gradient(180deg, rgba(20, 20, 25, 0.8) 0%, rgba(20, 20, 25, 0.4) 100%)',
                    }}
                  >
                    {/* Image container */}
                    <div className="w-full h-[75%] flex items-center justify-center">
                      <div className={`relative transition-all duration-500 ${position === 1 ? 'w-80 h-80' : 'w-64 h-64'}`}>
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          className="object-contain"
                          priority
                        />
                      </div>
                    </div>

                    {/* Text container */}
                    <div className="absolute bottom-0 left-0 w-full p-8">
                      <h3 className="text-white text-2xl font-medium mb-2 text-left">
                        {card.title}
                      </h3>
                      <p className="text-[#8A8A8A] text-sm text-left leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureCards;