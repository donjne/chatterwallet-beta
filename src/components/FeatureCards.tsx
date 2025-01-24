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
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[1000px]" style={{ height: '495px' }}>
      <div className="relative h-full">
        {cards.map((card, index) => {
          const isActive = index === activeIndex;
          const position = (index - activeIndex + 3) % 3;
          
          // Calculate positions relative to container width
          const leftPositions = {
            0: '50px',   // left card
            1: '300px',  // center card
            2: '550px'   // right card
          };

          return (
            <div
              key={card.id}
              className="transition-all duration-500 ease-in-out absolute"
              style={{
                width: position === 1 ? '400px' : '350px',
                height: position === 1 ? '495px' : '433.12px',
                left: leftPositions[position],
                top: position === 1 ? '0px' : '30.94px',
                padding: position === 1 ? '25px' : '21.875px',
                background: 'rgba(217, 217, 217, 0.05)',
                borderRadius: position === 1 ? '40px' : '35px',
                border: position === 1 ? '2px solid #8B5FE2' : 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: position === 1 ? '20px' : '17.5px',
                transform: `scale(${position === 1 ? 1 : 0.9})`,
                zIndex: position === 1 ? 2 : 1,
              }}
            >
              <div className="w-full pt-8 pb-4 flex justify-center">
                <div className="relative w-32 h-32">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
              <h3 className="text-white text-2xl font-normal w-full text-center">
                {card.title}
              </h3>
              <p className="text-gray-400 text-sm w-full text-center">
                {card.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureCards;