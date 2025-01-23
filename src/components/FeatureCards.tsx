// "use client"
// import React, { useState, useEffect } from 'react';

// const FeatureCards = () => {
//   const [activeIndex, setActiveIndex] = useState(1); // Start with middle card active

//   const cards = [
//     {
//       id: 0,
//       title: "Get 1000+ base credits",
//       description: "Early base credits to unlock exclusive discounts and execute cheaper transactions",
//       icon: (
//         <svg className="w-24 h-24 mx-auto" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M48 24L72 36L48 48L24 36L48 24Z" stroke="url(#paint0_linear)" strokeWidth="2"/>
//           <path d="M24 60L48 72L72 60" stroke="url(#paint1_linear)" strokeWidth="2"/>
//           <defs>
//             <linearGradient id="paint0_linear" x1="24" y1="24" x2="72" y2="48" gradientUnits="userSpaceOnUse">
//               <stop stopColor="#8B5FE2"/>
//               <stop offset="1" stopColor="#5851F6"/>
//             </linearGradient>
//             <linearGradient id="paint1_linear" x1="24" y1="60" x2="72" y2="72" gradientUnits="userSpaceOnUse">
//               <stop stopColor="#8B5FE2"/>
//               <stop offset="1" stopColor="#5851F6"/>
//             </linearGradient>
//           </defs>
//         </svg>
//       )
//     },
//     {
//       id: 1,
//       title: "Be a Pioneer",
//       description: "Your feedback will shape the Chatter Wallet experience",
//       icon: (
//         <svg className="w-24 h-24 mx-auto" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M48 20L76 48L48 76L20 48L48 20Z" stroke="url(#paint0_linear)" strokeWidth="2"/>
//           <defs>
//             <linearGradient id="paint0_linear" x1="20" y1="20" x2="76" y2="76" gradientUnits="userSpaceOnUse">
//               <stop stopColor="#8B5FE2"/>
//               <stop offset="1" stopColor="#5851F6"/>
//             </linearGradient>
//           </defs>
//         </svg>
//       )
//     },
//     {
//       id: 2,
//       title: "Pay Bills Seamlessly",
//       description: "Use your cryptocurrency to pay electricity, water, and internet bills with ease",
//       icon: (
//         <svg className="w-24 h-24 mx-auto" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M48 16V80M32 24H56M32 72H64" stroke="url(#paint0_linear)" strokeWidth="2"/>
//           <defs>
//             <linearGradient id="paint0_linear" x1="32" y1="16" x2="64" y2="80" gradientUnits="userSpaceOnUse">
//               <stop stopColor="#8B5FE2"/>
//               <stop offset="1" stopColor="#5851F6"/>
//             </linearGradient>
//           </defs>
//         </svg>
//       )
//     }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((current) => (current + 1) % 3);
//     }, 5000); // Rotate every 5 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative" style={{ height: '495px' }}>
//       <div className="flex justify-center items-center gap-5">
//         {cards.map((card, index) => {
//           const isActive = index === activeIndex;
//           const position = (index - activeIndex + 3) % 3; // 0 = left, 1 = center, 2 = right

//           return (
//             <div
//               key={card.id}
//               className="transition-all duration-500 ease-in-out"
//               style={{
//                 position: 'absolute',
//                 width: position === 1 ? '400px' : '350px',
//                 height: position === 1 ? '495px' : '433.12px',
//                 left: position === 0 ? '0px' : position === 1 ? '370px' : '790px',
//                 top: position === 1 ? '0px' : '30.94px',
//                 padding: position === 1 ? '25px' : '21.875px',
//                 background: 'rgba(217, 217, 217, 0.05)',
//                 borderRadius: position === 1 ? '40px' : '35px',
//                 border: position === 1 ? '2px solid #8B5FE2' : 'none',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'flex-start',
//                 gap: position === 1 ? '20px' : '17.5px',
//                 transform: `scale(${position === 1 ? 1 : 0.9})`,
//                 zIndex: position === 1 ? 2 : 1,
//               }}
//             >
//               <div className="w-full pt-8 pb-4">
//                 {card.icon}
//               </div>
//               <h3 className="text-white text-2xl font-normal w-full text-center">
//                 {card.title}
//               </h3>
//               <p className="text-gray-400 text-sm w-full text-center">
//                 {card.description}
//               </p>
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
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative" style={{ height: '495px' }}>
//       <div className="flex justify-center items-center gap-5">
//         {cards.map((card, index) => {
//           const isActive = index === activeIndex;
//           const position = (index - activeIndex + 3) % 3;

//           return (
//             <div
//               key={card.id}
//               className="transition-all duration-500 ease-in-out"
//               style={{
//                 position: 'absolute',
//                 width: position === 1 ? '400px' : '350px',
//                 height: position === 1 ? '495px' : '433.12px',
//                 left: position === 0 ? '0px' : position === 1 ? '370px' : '790px',
//                 top: position === 1 ? '0px' : '30.94px',
//                 padding: position === 1 ? '25px' : '21.875px',
//                 background: 'rgba(217, 217, 217, 0.05)',
//                 borderRadius: position === 1 ? '40px' : '35px',
//                 border: position === 1 ? '2px solid #8B5FE2' : 'none',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'flex-start',
//                 gap: position === 1 ? '20px' : '17.5px',
//                 transform: `scale(${position === 1 ? 1 : 0.9})`,
//                 zIndex: position === 1 ? 2 : 1,
//               }}
//             >
//               <div className="w-full pt-8 pb-4 flex justify-center">
//                 <div className="relative w-32 h-32">
//                   <Image
//                     src={card.image}
//                     alt={card.title}
//                     fill
//                     className="object-contain"
//                     priority
//                   />
//                 </div>
//               </div>
//               <h3 className="text-white text-2xl font-normal w-full text-center">
//                 {card.title}
//               </h3>
//               <p className="text-gray-400 text-sm w-full text-center">
//                 {card.description}
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default FeatureCards;


