"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const FeatureCards = () => {
  const [activeIndex, setActiveIndex] = useState(1);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % 3);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[1200px] h-[600px] mx-auto">
      <div className="relative w-full h-full flex justify-center items-center">
        {cards.map((card, index) => {
          const position = (index - activeIndex + 3) % 3;
          const isActive = position === 1;
          
          // Calculate x position
          let translateX = 0;
          if (position === 0) translateX = -600; // Left card
          if (position === 2) translateX = 600;  // Right card
          
          return (
            <div
              key={card.id}
              className="absolute transition-all duration-1000 ease-in-out"
              style={{
                width: isActive ? '500px' : '400px',
                height: isActive ? '600px' : '500px',
                transform: `translateX(${translateX}px) scale(${isActive ? 1 : 0.85})`,
                opacity: isActive ? 1 : 0.6,
                zIndex: isActive ? 2 : 1,
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
                    border: isActive ? '2px solid #8B5FE2' : '1px solid rgba(98, 91, 133, 0.2)',
                    boxShadow: isActive ? '0 0 20px rgba(139, 95, 226, 0.2)' : 'none',
                  }}
                >
                  {/* Image container */}
                  <div className="w-full h-[75%] flex items-center justify-center p-8">
                    <div className="relative w-full h-full">
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
          );
        })}
      </div>
    </div>
  );
};

export default FeatureCards;