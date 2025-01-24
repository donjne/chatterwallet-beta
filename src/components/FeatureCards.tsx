"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

type Position = 0 | 1 | 2;
interface LeftPositions {
  [key: number]: string;
}

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

  const leftPositions: LeftPositions = {
    0: '200px',  // left card
    1: '520px',  // center card
    2: '840px'   // right card
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % 3);
    }, 8000); // Increased from 5000 to 8000ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[1440px] mx-auto" style={{ height: '600px' }}>
      <div className="relative h-full">
        {cards.map((card, index) => {
          const isActive = index === activeIndex;
          const position = (index - activeIndex + 3) % 3 as Position;
          
          return (
            <div
              key={card.id}
              className="absolute"
              style={{
                width: position === 1 ? '400px' : '320px',
                height: position === 1 ? '500px' : '420px',
                left: leftPositions[position],
                top: position === 1 ? '0px' : '40px',
                background: 'rgba(20, 20, 25, 0.4)',
                borderRadius: '40px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                overflow: 'hidden',
                transform: `scale(${position === 1 ? 1 : 0.85})`,
                zIndex: position === 1 ? 2 : 1,
                transition: 'all 1000ms ease-in-out', // Increased from 500ms to 1000ms
              }}
            >
              {/* Inner card with gray border effect */}
              <div 
                className="relative w-full h-full"
                style={{
                  background: 'linear-gradient(180deg, rgba(30, 30, 35, 0.3) 0%, rgba(30, 30, 35, 0.1) 100%)',
                  border: position === 1 ? '2px solid #8B5FE2' : '1px solid rgba(98, 91, 133, 0.2)',
                  borderRadius: '38px',
                  transition: 'all 1000ms ease-in-out',
                }}
              >
                {/* Image container taking most space */}
                <div className="w-full h-[70%] flex items-center justify-center">
                  <div className="relative w-48 h-48">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>

                {/* Text container at bottom */}
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
          );
        })}
      </div>
    </div>
  );
};

export default FeatureCards;