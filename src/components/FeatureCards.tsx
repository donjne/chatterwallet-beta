// "use client"
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';

// const FeatureCards = () => {
//   const [activeIndex, setActiveIndex] = useState(1);

//   const cards = [
//     {
//       id: 0,
//       title: "Get 1000+ base credits",
//       description: "Early base credits to unlock exclusive discounts and execute cheaper transactions",
//       image: "/gift.png" 
//     },
//     {
//       id: 1,
//       title: "Be a Pioneer",
//       description: "Your feedback will shape the Chatter Wallet experience",
//       image: "/cursor.png" 
//     },
//     {
//       id: 2,
//       title: "Pay Bills Seamlessly",
//       description: "Use your cryptocurrency to pay electricity, water, and internet bills with ease",
//       image: "/dollar.png"
//     }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((current) => (current + 1) % 3);
//     }, 8000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-[1200px] h-[600px] mx-auto">
//       <div className="relative w-full h-full flex justify-center items-center">
//         {cards.map((card, index) => {
//           const position = (index - activeIndex + 3) % 3;
//           const isActive = position === 1;
          
//           // Calculate x position
//           let translateX = 0;
//           if (position === 0) translateX = -450; // Left card
//           if (position === 2) translateX = 450;  // Right card
          
//           return (
//             <div
//               key={card.id}
//               className="absolute transition-all duration-1000 ease-in-out"
//               style={{
//                 width: isActive ? '500px' : '400px',
//                 height: isActive ? '600px' : '500px',
//                 transform: `translateX(${translateX}px) scale(${isActive ? 1 : 0.85})`,
//                 opacity: isActive ? 1 : 0.6,
//                 zIndex: isActive ? 2 : 1,
//               }}
//             >
//               {/* Outer glass effect container */}
//               <div
//                 className="relative w-full h-full"
//                 style={{
//                   background: 'rgba(20, 20, 25, 0.4)',
//                   borderRadius: '40px',
//                   border: '1px solid rgba(255, 255, 255, 0.1)',
//                   backdropFilter: 'blur(10px)',
//                 }}
//               >
//                 {/* Inner card with frosted glass effect */}
//                 <div 
//                   className="absolute inset-[2px] rounded-[38px]"
//                   style={{
//                     background: 'linear-gradient(180deg, rgba(30, 30, 35, 0.6) 0%, rgba(30, 30, 35, 0.3) 100%)',
//                     border: isActive ? '2px solid #8B5FE2' : '1px solid rgba(98, 91, 133, 0.2)',
//                     boxShadow: isActive ? '0 0 20px rgba(139, 95, 226, 0.2)' : 'none',
//                   }}
//                 >
//                   {/* Image container */}
//                   <div className="w-full h-[75%] flex items-center justify-center p-8">
//                     <div className="relative w-full h-full">
//                       <Image
//                         src={card.image}
//                         alt={card.title}
//                         fill
//                         className="object-contain"
//                         priority
//                       />
//                     </div>
//                   </div>

//                   {/* Text container */}
//                   <div className="absolute bottom-0 left-0 w-full p-8">
//                     <h3 className="text-white text-2xl font-medium mb-2 text-left">
//                       {card.title}
//                     </h3>
//                     <p className="text-[#8A8A8A] text-sm text-left leading-relaxed">
//                       {card.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default FeatureCards;

// "use client"
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';

// const FeatureCards = () => {
//   const [activeIndex, setActiveIndex] = useState(1);

//   const cards = [
//     {
//       id: 0,
//       title: "Get 1000+ base credits",
//       description: "Early base credits to unlock exclusive discounts and execute cheaper transactions",
//       image: "/gift.png" 
//     },
//     {
//       id: 1,
//       title: "Be a Pioneer",
//       description: "Your feedback will shape the Chatter Wallet experience",
//       image: "/cursor.png" 
//     },
//     {
//       id: 2,
//       title: "Pay Bills Seamlessly",
//       description: "Use your cryptocurrency to pay electricity, water, and internet bills with ease",
//       image: "/dollar.png"
//     }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((current) => (current + 1) % 3);
//     }, 8000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-[1200px] h-[600px] mx-auto">
//       <div className="relative w-full h-full flex justify-center items-center">
//         {cards.map((card, index) => {
//           const position = (index - activeIndex + 3) % 3;
//           const isActive = position === 1;
          
//           let translateX = 0;
//           if (position === 0) translateX = -450;
//           if (position === 2) translateX = 450;
          
//           return (
//             <div
//               key={card.id}
//               className="absolute transition-all duration-1000 ease-in-out"
//               style={{
//                 width: isActive ? '500px' : '400px',
//                 height: isActive ? '600px' : '500px',
//                 transform: `translateX(${translateX}px) scale(${isActive ? 1 : 0.85})`,
//                 opacity: isActive ? 1 : 0.6,
//                 zIndex: isActive ? 2 : 1,
//               }}
//             >
//               {/* Outer blurred glass container */}
//               <div 
//                 className="relative w-full h-full rounded-[40px]"
//                 style={{
//                   padding: '12px', // Thicker padding for more visible glass effect
//                   background: 'rgba(255, 255, 255, 0.03)',
//                   backdropFilter: 'blur(20px)',
//                   border: isActive 
//                     ? '1px solid rgba(139, 95, 226, 0.3)'
//                     : '1px solid rgba(255, 255, 255, 0.1)',
//                   boxShadow: isActive 
//                     ? '0 0 30px rgba(139, 95, 226, 0.15)'
//                     : 'none',
//                 }}
//               >
//                 {/* Inner card container */}
//                 <div
//                   className="relative w-full h-full rounded-[32px] overflow-hidden"
//                   style={{
//                     background: 'rgba(20, 20, 25, 0.9)',
//                   }}
//                 >
//                   {/* Gradient overlay */}
//                   <div 
//                     className="absolute inset-0"
//                     style={{
//                       background: 'linear-gradient(180deg, rgba(30, 30, 35, 0.4) 0%, rgba(30, 30, 35, 0.1) 100%)',
//                       borderRadius: '32px',
//                     }}
//                   />

//                   {/* Content */}
//                   <div className="relative w-full h-full">
//                     {/* Image container */}
//                     <div className="w-full h-[75%] flex items-center justify-center p-4">
//                       <div className="relative w-full h-full">
//                         <Image
//                           src={card.image}
//                           alt={card.title}
//                           fill
//                           className="object-contain"
//                           priority
//                         />
//                       </div>
//                     </div>

//                     {/* Text container */}
//                     <div className="absolute bottom-0 left-0 w-full p-8">
//                       <h3 className="text-white text-2xl font-medium mb-2 text-left">
//                         {card.title}
//                       </h3>
//                       <p className="text-[#8A8A8A] text-sm text-left leading-relaxed">
//                         {card.description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default FeatureCards;

// "use client"
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';

// const FeatureCards = () => {
//   const [activeIndex, setActiveIndex] = useState(1);
//   const [isMobile, setIsMobile] = useState(false);

//   const cards = [
//     {
//       id: 0,
//       title: "Get 1000+ base credits",
//       description: "Early base credits to unlock exclusive discounts and execute cheaper transactions",
//       image: "/gift.png" 
//     },
//     {
//       id: 1,
//       title: "Be a Pioneer",
//       description: "Your feedback will shape the Chatter Wallet experience",
//       image: "/cursor.png" 
//     },
//     {
//       id: 2,
//       title: "Pay Bills Seamlessly",
//       description: "Use your cryptocurrency to pay electricity, water, and internet bills with ease",
//       image: "/dollar.png"
//     },
//     {
//       id: 3,
//       title: "Secure and Fast transaction",
//       description: "Built on Solana's high-speed blockchain infrastructure",
//       image: "/rocket.png"
//     }
//   ];

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((current) => (current + 1) % (isMobile ? 4 : 3));
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [isMobile]);

//   // Card Component - reused for both mobile and desktop
//   const CardContent = ({ card, isActive, size = 'desktop' }) => {
//     const isMobileSize = size === 'mobile';

//     return (
//       <div 
//         className="relative w-full h-full rounded-[40px]"
//         style={{
//           padding: isMobileSize ? '8px' : '12px',
//           background: 'rgba(255, 255, 255, 0.03)',
//           backdropFilter: 'blur(20px)',
//           border: isActive 
//             ? '1px solid rgba(139, 95, 226, 0.3)'
//             : '1px solid rgba(255, 255, 255, 0.1)',
//           boxShadow: isActive 
//             ? '0 0 30px rgba(139, 95, 226, 0.15)'
//             : 'none',
//         }}
//       >
//         <div
//           className="relative w-full h-full rounded-[32px] overflow-hidden"
//           style={{
//             background: 'rgba(20, 20, 25, 0.9)',
//           }}
//         >
//           <div 
//             className="absolute inset-0"
//             style={{
//               background: 'linear-gradient(180deg, rgba(30, 30, 35, 0.4) 0%, rgba(30, 30, 35, 0.1) 100%)',
//               borderRadius: '32px',
//             }}
//           />

//           <div className="relative w-full h-full">
//             <div className="w-full h-[75%] flex items-center justify-center p-4">
//               <div className="relative w-full h-full">
//                 <Image
//                   src={card.image}
//                   alt={card.title}
//                   fill
//                   className="object-contain"
//                   priority
//                 />
//               </div>
//             </div>

//             <div className="absolute bottom-0 left-0 w-full p-8">
//               <h3 className={`text-white ${isMobileSize ? 'text-lg' : 'text-2xl'} font-medium mb-2 text-left`}>
//                 {card.title}
//               </h3>
//               <p className={`text-[#8A8A8A] ${isMobileSize ? 'text-xs' : 'text-sm'} text-left leading-relaxed`}>
//                 {card.description}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   if (isMobile) {
//     return (
//       <div className="grid grid-cols-2 gap-4 p-4">
//         {cards.map((card, index) => (
//           <div
//             key={card.id}
//             className="transition-all duration-500"
//             style={{
//               width: '160px',
//               height: '200px',
//               transform: `scale(${activeIndex === index ? 1.1 : 1})`,
//             }}
//           >
//             <CardContent 
//               card={card} 
//               isActive={activeIndex === index} 
//               size="mobile"
//             />
//           </div>
//         ))}
//       </div>
//     );
//   }

//   return (
//     <div className="relative w-[1200px] h-[600px] mx-auto overflow-hidden">
//       <div className="relative w-full h-full flex justify-center items-center">
//         {cards.slice(0, 3).map((card, index) => {
//           const position = (index - activeIndex + 3) % 3;
//           const isActive = position === 1;
          
//           // Calculate positions for sliding animation
//           let xPos = '0%';
//           let opacity = 1;
          
//           if (position === 0) {
//             xPos = '-200%';
//             opacity = 0;
//           } else if (position === 2) {
//             xPos = '200%';
//             opacity = 0;
//           }
          
//           return (
//             <div
//               key={card.id}
//               className="absolute transition-all duration-1000 ease-in-out"
//               style={{
//                 width: isActive ? '500px' : '400px',
//                 height: isActive ? '600px' : '500px',
//                 transform: `translateX(${xPos}) scale(${isActive ? 1 : 0.85})`,
//                 opacity,
//                 zIndex: isActive ? 2 : 1,
//               }}
//             >
//               <CardContent card={card} isActive={isActive} />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default FeatureCards;

// BAD CODE
// "use client"
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';

// interface Card {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
// }

// interface CardContentProps {
//   card: Card;
//   isActive: boolean;
//   size?: 'desktop' | 'mobile';
// }

// type Position = 0 | 1 | 2;

// const FeatureCards: React.FC = () => {
//   const [activeIndex, setActiveIndex] = useState<number>(1);
//   const [isMobile, setIsMobile] = useState<boolean>(false);

//   const cards: Card[] = [
//     {
//       id: 0,
//       title: "Get 1000+ base credits",
//       description: "Early base credits to unlock exclusive discounts and execute cheaper transactions",
//       image: "/gift.png" 
//     },
//     {
//       id: 1,
//       title: "Be a Pioneer",
//       description: "Your feedback will shape the Chatter Wallet experience",
//       image: "/cursor.png" 
//     },
//     {
//       id: 2,
//       title: "Pay Bills Seamlessly",
//       description: "Use your cryptocurrency to pay electricity, water, and internet bills with ease",
//       image: "/dollar.png"
//     },
//     {
//       id: 3,
//       title: "Secure and Fast transaction",
//       description: "Built on Solana's high-speed blockchain infrastructure",
//       image: "/rocket.png"
//     }
//   ];

//   useEffect(() => {
//     const handleResize = (): void => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((current) => (current + 1) % (isMobile ? 4 : 3));
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [isMobile]);

//   const CardContent: React.FC<CardContentProps> = ({ card, isActive, size = 'desktop' }) => {
//     const isMobileSize = size === 'mobile';

//     return (
//       <div 
//         className="relative w-full h-full rounded-[40px]"
//         style={{
//           padding: isMobileSize ? '8px' : '12px',
//           background: 'rgba(255, 255, 255, 0.03)',
//           backdropFilter: 'blur(20px)',
//           border: isActive 
//             ? '1px solid rgba(139, 95, 226, 0.3)'
//             : '1px solid rgba(255, 255, 255, 0.1)',
//           boxShadow: isActive 
//             ? '0 0 30px rgba(139, 95, 226, 0.15)'
//             : 'none',
//         }}
//       >
//         <div
//           className="relative w-full h-full rounded-[32px] overflow-hidden"
//           style={{
//             background: 'rgba(20, 20, 25, 0.9)',
//           }}
//         >
//           <div 
//             className="absolute inset-0"
//             style={{
//               background: 'linear-gradient(180deg, rgba(30, 30, 35, 0.4) 0%, rgba(30, 30, 35, 0.1) 100%)',
//               borderRadius: '32px',
//             }}
//           />

//           <div className="relative w-full h-full">
//             <div className="w-full h-[75%] flex items-center justify-center p-4">
//               <div className="relative w-full h-full">
//                 <Image
//                   src={card.image}
//                   alt={card.title}
//                   fill
//                   className="object-contain"
//                   priority
//                 />
//               </div>
//             </div>

//             <div className="absolute bottom-0 left-0 w-full p-8">
//               <h3 className={`text-white ${isMobileSize ? 'text-lg' : 'text-2xl'} font-medium mb-2 text-left`}>
//                 {card.title}
//               </h3>
//               <p className={`text-[#8A8A8A] ${isMobileSize ? 'text-xs' : 'text-sm'} text-left leading-relaxed`}>
//                 {card.description}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   if (isMobile) {
//     return (
//       <div className="grid grid-cols-2 gap-4 p-4">
//         {cards.map((card, index) => (
//           <div
//             key={card.id}
//             className="transition-all duration-500"
//             style={{
//               width: '160px',
//               height: '200px',
//               transform: `scale(${activeIndex === index ? 1.1 : 1})`,
//             }}
//           >
//             <CardContent 
//               card={card} 
//               isActive={activeIndex === index} 
//               size="mobile"
//             />
//           </div>
//         ))}
//       </div>
//     );
//   }

//   return (
//     <div className="relative w-[1200px] h-[600px] mx-auto overflow-hidden">
//       <div className="relative w-full h-full flex justify-center items-center">
//         {cards.slice(0, 3).map((card, index) => {
//           const position = (index - activeIndex + 3) % 3 as Position;
//           const isActive = position === 1;
          
//           const xPos = position === 0 ? '-200%' : position === 2 ? '200%' : '0%';
//           const opacity = position === 1 ? 1 : 0;
          
//           return (
//             <div
//               key={card.id}
//               className="absolute transition-all duration-1000 ease-in-out"
//               style={{
//                 width: isActive ? '500px' : '400px',
//                 height: isActive ? '600px' : '500px',
//                 transform: `translateX(${xPos}) scale(${isActive ? 1 : 0.85})`,
//                 opacity,
//                 zIndex: isActive ? 2 : 1,
//               }}
//             >
//               <CardContent card={card} isActive={isActive} />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default FeatureCards;

// "use client"
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';

// interface Card {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
// }

// interface CardContentProps {
//   card: Card;
//   isActive: boolean;
//   size?: 'desktop' | 'mobile';
// }

// type Position = 0 | 1 | 2;

// const FeatureCards: React.FC = () => {
//   const [activeIndex, setActiveIndex] = useState<number>(1);
//   const [isMobile, setIsMobile] = useState<boolean>(false);

//   const cards: Card[] = [
//     {
//       id: 0,
//       title: "Get 1000+ base credits",
//       description: "Early base credits to unlock exclusive discounts and execute cheaper transactions",
//       image: "/gift.png" 
//     },
//     {
//       id: 1,
//       title: "Be a Pioneer",
//       description: "Your feedback will shape the Chatter Wallet experience",
//       image: "/cursor.png" 
//     },
//     {
//       id: 2,
//       title: "Pay Bills Seamlessly",
//       description: "Use your cryptocurrency to pay electricity, water, and internet bills with ease",
//       image: "/dollar.png"
//     },
//     {
//       id: 3,
//       title: "Secure and Fast transaction",
//       description: "Built on Solana's high-speed blockchain infrastructure",
//       image: "/rocket.png"
//     }
//   ];

//   useEffect(() => {
//     const handleResize = (): void => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((current) => (current + 1) % (isMobile ? 4 : 3));
//     }, 8000); // Increased interval

//     return () => clearInterval(interval);
//   }, [isMobile]);

//   const CardContent: React.FC<CardContentProps> = ({ card, isActive, size = 'desktop' }) => {
//     const isMobileSize = size === 'mobile';

//     return (
//       <div 
//         className="relative w-full h-full rounded-[40px]"
//         style={{
//           padding: isMobileSize ? '8px' : '12px',
//           background: 'rgba(255, 255, 255, 0.03)',
//           backdropFilter: 'blur(20px)',
//           border: isActive 
//             ? '1px solid rgba(139, 95, 226, 0.3)'
//             : '1px solid rgba(255, 255, 255, 0.1)',
//           boxShadow: isActive 
//             ? '0 0 30px rgba(139, 95, 226, 0.15)'
//             : 'none',
//         }}
//       >
//         <div
//           className="relative w-full h-full rounded-[32px] overflow-hidden"
//           style={{
//             background: 'rgba(20, 20, 25, 0.9)',
//           }}
//         >
//           <div 
//             className="absolute inset-0"
//             style={{
//               background: 'linear-gradient(180deg, rgba(30, 30, 35, 0.4) 0%, rgba(30, 30, 35, 0.1) 100%)',
//               borderRadius: '32px',
//             }}
//           />

//           <div className="relative w-full h-full flex flex-col">
//             <div className="flex-grow flex items-center justify-center p-4">
//               <div className="relative w-4/5 h-4/5">
//                 <Image
//                   src={card.image}
//                   alt={card.title}
//                   fill
//                   className="object-contain"
//                   priority
//                 />
//               </div>
//             </div>

//             <div className="w-full px-6 pb-6">
//               <h3 className={`text-white ${isMobileSize ? 'text-lg' : 'text-2xl'} font-medium mb-2 text-left`}>
//                 {card.title}
//               </h3>
//               <p className={`text-[#8A8A8A] ${isMobileSize ? 'text-xs' : 'text-sm'} text-left leading-relaxed`}>
//                 {card.description}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   if (isMobile) {
//     return (
//       <div className="grid grid-cols-2 gap-6 p-6">
//         {cards.map((card, index) => (
//           <div
//             key={card.id}
//             className="transition-all duration-1000"
//             style={{
//               width: '240px',
//               height: '320px',
//               transform: `scale(${activeIndex === index ? 1.05 : 1})`,
//             }}
//           >
//             <CardContent 
//               card={card} 
//               isActive={activeIndex === index} 
//               size="mobile"
//             />
//           </div>
//         ))}
//       </div>
//     );
//   }

//   return (
//     <div className="relative w-[1200px] h-[600px] mx-auto overflow-hidden">
//       <div className="relative w-full h-full flex justify-center items-center">
//         {cards.slice(0, 3).map((card, index) => {
//           const position = (index - activeIndex + 3) % 3 as Position;
//           const isActive = position === 1;
          
//           let translateX = 0;
//           if (position === 0) translateX = -450;
//           if (position === 2) translateX = 450;
          
//           return (
//             <div
//               key={card.id}
//               className="absolute transition-all duration-2000 ease-in-out"
//               style={{
//                 width: isActive ? '500px' : '400px',
//                 height: isActive ? '600px' : '500px',
//                 transform: `translateX(${translateX}px) scale(${isActive ? 1 : 0.85})`,
//                 opacity: 1,
//                 zIndex: isActive ? 2 : 1,
//               }}
//             >
//               <CardContent card={card} isActive={isActive} />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default FeatureCards;

"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface CardContentProps {
  card: Card;
  isActive: boolean;
  size?: 'desktop' | 'mobile';
}

type Position = 0 | 1 | 2;

const FeatureCards: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const cards: Card[] = [
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
    },
    {
      id: 3,
      title: "Secure and Fast transaction",
      description: "Built on Solana's high-speed blockchain infrastructure",
      image: "/rocket.png"
    }
  ];

  useEffect(() => {
    const handleResize = (): void => {
      setIsMobile(window.innerWidth <= 1300); // Updated breakpoint
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % (isMobile ? 4 : 3));
    }, 20000); // Much longer interval - 20 seconds

    return () => clearInterval(interval);
  }, [isMobile]);

  const CardContent: React.FC<CardContentProps> = ({ card, isActive, size = 'desktop' }) => {
    const isMobileSize = size === 'mobile';

    return (
      <div 
        className="relative w-full h-full rounded-[40px]"
        style={{
          padding: isMobileSize ? '10px' : '12px',
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(20px)',
          border: isActive 
            ? '1px solid rgba(139, 95, 226, 0.3)'
            : '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: isActive 
            ? '0 0 30px rgba(139, 95, 226, 0.15)'
            : 'none',
        }}
      >
        <div
          className="relative w-full h-full rounded-[32px] overflow-hidden"
          style={{
            background: 'rgba(20, 20, 25, 0.9)',
          }}
        >
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, rgba(30, 30, 35, 0.4) 0%, rgba(30, 30, 35, 0.1) 100%)',
              borderRadius: '32px',
            }}
          />

          <div className="relative w-full h-full flex flex-col">
            <div className="flex-grow flex items-center justify-center p-4">
              <div className={`relative ${isMobileSize ? 'w-[90%] h-[90%]' : 'w-4/5 h-4/5'}`}>
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <div className="w-full px-6 pb-6">
              <h3 className={`text-white ${isMobileSize ? 'text-xl' : 'text-2xl'} font-medium mb-2 text-left`}>
                {card.title}
              </h3>
              <p className={`text-[#8A8A8A] ${isMobileSize ? 'text-sm' : 'text-sm'} text-left leading-relaxed`}>
                {card.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (isMobile) {
    return (
      <div className="flex justify-center w-full">
        <div className="grid grid-cols-2 gap-10 p-8 place-items-center max-w-[700px]">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="transition-all duration-1000"
              style={{
                width: '300px',
                height: '400px',
                transform: `scale(${activeIndex === index ? 1.05 : 1})`,
              }}
            >
              <CardContent 
                card={card} 
                isActive={activeIndex === index} 
                size="mobile"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-[1440px] h-[600px] mx-auto overflow-visible">
      <div className="relative w-full h-full flex justify-center items-center">
        {cards.slice(0, 3).map((card, index) => {
          const position = (index - activeIndex + 3) % 3 as Position;
          const isActive = position === 1;
          
          let translateX = 0;
          if (position === 0) translateX = -500; // Increased spacing between cards
          if (position === 2) translateX = 500;
          
          return (
            <div
              key={card.id}
              className="absolute transition-all duration-[4000ms] ease-in-out" // Much longer duration
              style={{
                width: isActive ? '500px' : '400px',
                height: isActive ? '600px' : '500px',
                transform: `translateX(${translateX}px) scale(${isActive ? 1 : 0.85})`,
                opacity: 1,
                zIndex: isActive ? 2 : 1,
              }}
            >
              <CardContent card={card} isActive={isActive} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureCards;

//   useEffect(() => {
//     const handleResize = (): void => {
//       setIsMobile(window.innerWidth <= 768); // Adjusted breakpoint
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((current) => (current + 1) % (isMobile ? 4 : 3));
//     }, 12000); // Increased to 12 seconds

//     return () => clearInterval(interval);
//   }, [isMobile]);

//   const CardContent: React.FC<CardContentProps> = ({ card, isActive, size = 'desktop' }) => {
//     const isMobileSize = size === 'mobile';

//     return (
//       <div 
//         className="relative w-full h-full rounded-[40px]"
//         style={{
//           padding: isMobileSize ? '8px' : '12px',
//           background: 'rgba(255, 255, 255, 0.03)',
//           backdropFilter: 'blur(20px)',
//           border: isActive 
//             ? '1px solid rgba(139, 95, 226, 0.3)'
//             : '1px solid rgba(255, 255, 255, 0.1)',
//           boxShadow: isActive 
//             ? '0 0 30px rgba(139, 95, 226, 0.15)'
//             : 'none',
//         }}
//       >
//         <div
//           className="relative w-full h-full rounded-[32px] overflow-hidden"
//           style={{
//             background: 'rgba(20, 20, 25, 0.9)',
//           }}
//         >
//           <div 
//             className="absolute inset-0"
//             style={{
//               background: 'linear-gradient(180deg, rgba(30, 30, 35, 0.4) 0%, rgba(30, 30, 35, 0.1) 100%)',
//               borderRadius: '32px',
//             }}
//           />

//           <div className="relative w-full h-full flex flex-col">
//             <div className="flex-grow flex items-center justify-center p-4">
//               <div className="relative w-4/5 h-4/5">
//                 <Image
//                   src={card.image}
//                   alt={card.title}
//                   fill
//                   className="object-contain"
//                   priority
//                 />
//               </div>
//             </div>

//             <div className="w-full px-6 pb-6">
//               <h3 className={`text-white ${isMobileSize ? 'text-lg' : 'text-2xl'} font-medium mb-2 text-left`}>
//                 {card.title}
//               </h3>
//               <p className={`text-[#8A8A8A] ${isMobileSize ? 'text-xs' : 'text-sm'} text-left leading-relaxed`}>
//                 {card.description}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   if (isMobile) {
//     return (
//       <div className="grid grid-cols-2 gap-8 p-6"> {/* Increased gap from 6 to 8 */}
//         {cards.map((card, index) => (
//           <div
//             key={card.id}
//             className="transition-all duration-1000"
//             style={{
//               width: '240px',
//               height: '320px',
//               transform: `scale(${activeIndex === index ? 1.05 : 1})`,
//             }}
//           >
//             <CardContent 
//               card={card} 
//               isActive={activeIndex === index} 
//               size="mobile"
//             />
//           </div>
//         ))}
//       </div>
//     );
//   }

//   return (
//     <div className="relative w-[1440px] h-[600px] mx-auto overflow-visible"> {/* Changed width and removed overflow-hidden */}
//       <div className="relative w-full h-full flex justify-center items-center">
//         {cards.slice(0, 3).map((card, index) => {
//           const position = (index - activeIndex + 3) % 3 as Position;
//           const isActive = position === 1;
          
//           let translateX = 0;
//           if (position === 0) translateX = -400; // Reduced translation
//           if (position === 2) translateX = 400;
          
//           return (
//             <div
//               key={card.id}
//               className="absolute transition-all duration-3000 ease-in-out" // Increased duration
//               style={{
//                 width: isActive ? '500px' : '400px',
//                 height: isActive ? '600px' : '500px',
//                 transform: `translateX(${translateX}px) scale(${isActive ? 1 : 0.85})`,
//                 opacity: 1,
//                 zIndex: isActive ? 2 : 1,
//               }}
//             >
//               <CardContent card={card} isActive={isActive} />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default FeatureCards;