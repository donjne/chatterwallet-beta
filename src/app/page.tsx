// import Navbar from '@/components/Navbar';
// import Header from '@/components/Header';
// import FeatureCards from '@/components/FeatureCards';
// import Footer from '@/components/Footer';
// import StarBackground from '@/components/StarBackground';
// import Image from 'next/image';

// export default function Home() {
//   return (
//     <main 
//       className="relative min-h-screen overflow-hidden"
//       style={{
//         background: 'linear-gradient(180deg, #070410 0%, #0F0A1F 100%)',
//       }}
//     >
//       <StarBackground />
      
//       {/* Purple glow on right */}
//       <div className="fixed bottom-0 right-0 z-0">
//         <svg width="368" height="368" viewBox="0 0 368 368" fill="none" xmlns="http://www.w3.org/2000/svg"
//           style={{ filter: 'brightness(1.2) contrast(1.2)' }}>
//           <g style={{ mixBlendMode: 'screen' }}>
//             <circle cx="368" cy="368" r="368" fill="url(#paint0_radial_460_2)"/>
//           </g>
//           <defs>
//             <radialGradient id="paint0_radial_460_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(368 368) rotate(90) scale(368)">
//               <stop stopColor="#8B5FE2"/>
//               <stop offset="1" stopOpacity="0"/>
//             </radialGradient>
//           </defs>
//         </svg>
//       </div>

//       {/* Geometric shapes with purple glow */}
//       <div className="fixed bottom-0 left-0 z-0">
//         {/* Purple glow for geometric shape */}
//         <div 
//           className="absolute inset-0 z-0"
//           style={{
//             background: 'radial-gradient(circle at center, rgba(139, 95, 226, 0.3) 0%, transparent 70%)',
//             filter: 'blur(40px)',
//             transform: 'translateY(-20%)'
//           }}
//         />
//         <Image
//           src="/asset2.png"
//           alt="Geometric background shapes"
//           width={278}
//           height={513}
//           priority
//           className="relative z-1 opacity-70"
//         />
//       </div>

//       {/* Content wrapper with subtle gradient overlay */}
//       <div className="relative z-10 min-h-screen flex flex-col">
//         <div className="flex-grow flex flex-col items-center pt-16">
//           {/* Main content container */}
//           <div className="w-[1000px] flex flex-col items-center">
//             <Navbar />
//             <div className="mt-16">
//               <Header />
//             </div>
//             <div className="mt-24 mb-24">
//               <FeatureCards />
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="relative mt-auto">
//           <Footer />
//         </div>
//       </div>

//       {/* Additional gradient overlay */}
//       <div 
//         className="pointer-events-none absolute inset-0 z-[1]"
//         style={{
//           background: 'radial-gradient(circle at 50% 0%, rgba(7, 4, 16, 0) 0%, #070410 100%)',
//           opacity: 0.4
//         }}
//       />
//     </main>
//   );
// }

import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import FeatureCards from '@/components/FeatureCards';
import Footer from '@/components/Footer';
import StarBackground from '@/components/StarBackground';
import Image from 'next/image';

// export default function Home() {
//   return (
//     <main 
//       className="relative min-h-screen overflow-hidden"
//       style={{
//         background: 'linear-gradient(180deg, #070410 0%, #0F0A1F 100%)',
//       }}
//     >
//       <StarBackground />
      
//       {/* Purple glow on right */}
//       <div className="fixed bottom-0 right-0 z-0">
//         <svg width="368" height="368" viewBox="0 0 368 368" fill="none" xmlns="http://www.w3.org/2000/svg"
//           style={{ filter: 'brightness(1.5) contrast(1.3)' }}>
//           <g style={{ mixBlendMode: 'screen' }}>
//             <circle cx="368" cy="368" r="368" fill="url(#paint0_radial_460_2)"/>
//           </g>
//           <defs>
//             <radialGradient id="paint0_radial_460_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(368 368) rotate(90) scale(368)">
//               <stop stopColor="#8B5FE2"/>
//               <stop offset="1" stopOpacity="0"/>
//             </radialGradient>
//           </defs>
//         </svg>
//       </div>

//       {/* Geometric shapes with purple glow */}
//       <div className="fixed -bottom-10 -left-10 z-0">
//         {/* Purple glow for geometric shape */}
//         <div 
//           className="absolute inset-0 z-0"
//           style={{
//             background: 'radial-gradient(circle at center, rgba(139, 95, 226, 0.4) 0%, transparent 70%)',
//             filter: 'blur(30px)',
//             transform: 'translateY(-20%)'
//           }}
//         />
//         <Image
//           src="/asset2.png"
//           alt="Geometric background shapes"
//           width={278}
//           height={513}
//           priority
//           className="relative z-1 opacity-80"
//         />
//       </div>

//       {/* Content wrapper with subtle gradient overlay */}
//       <div className="relative z-10 min-h-screen flex flex-col">
//         <div className="flex-grow flex flex-col items-center pt-16">
//           {/* Navbar and Header container */}
//           <div className="w-[1000px] flex flex-col items-center">
//             <Navbar />
//             <div className="mt-16">
//               <Header />
//             </div>
//           </div>

//           {/* Feature Cards section with full width */}
//           <div className="w-full max-w-[1440px] mt-24 mb-24 px-4">
//             <FeatureCards />
//           </div>

//           {/* Footer container */}
//           <div className="w-[1000px]">
//             <Footer />
//           </div>
//         </div>
//       </div>

//       {/* Additional gradient overlay */}
//       <div 
//         className="pointer-events-none absolute inset-0 z-[1]"
//         style={{
//           background: 'radial-gradient(circle at 50% 0%, rgba(7, 4, 16, 0) 0%, #070410 100%)',
//           opacity: 0.4
//         }}
//       />
//     </main>
//   );
// }

export default function Home() {
  return (
    <main 
      className="relative min-h-screen overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #070410 0%, #0F0A1F 100%)',
      }}
    >
      <StarBackground />
      
      {/* Background decorations */}
      <div className="fixed bottom-0 right-0 z-0 md:block hidden">
        <svg width="368" height="368" viewBox="0 0 368 368" fill="none" xmlns="http://www.w3.org/2000/svg"
          style={{ filter: 'brightness(1.5) contrast(1.3)' }}>
          <g style={{ mixBlendMode: 'screen' }}>
            <circle cx="368" cy="368" r="368" fill="url(#paint0_radial_460_2)"/>
          </g>
          <defs>
            <radialGradient id="paint0_radial_460_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(368 368) rotate(90) scale(368)">
              <stop stopColor="#8B5FE2"/>
              <stop offset="1" stopOpacity="0"/>
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Geometric shapes with purple glow */}
      <div className="fixed -bottom-10 -left-10 z-0 md:block hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: 'radial-gradient(circle at center, rgba(139, 95, 226, 0.4) 0%, transparent 70%)',
            filter: 'blur(30px)',
            transform: 'translateY(-20%)'
          }}
        />
        <Image
          src="/asset2.png"
          alt="Geometric background shapes"
          width={278}
          height={513}
          priority
          className="relative z-1 opacity-80"
        />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-grow flex flex-col items-center pt-8 md:pt-16 px-4">
          {/* Navbar and Header container */}
          <div className="w-full max-w-[1000px] flex flex-col items-center">
            <Navbar />
            <div className="mt-8 md:mt-16">
              <Header />
            </div>
          </div>

          {/* Feature Cards */}
          <div className="w-full max-w-[1440px] mt-12 md:mt-24 mb-12 md:mb-24">
            <FeatureCards />
          </div>

          {/* Footer */}
          <div className="w-full max-w-[1000px]">
            <Footer />
          </div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div 
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(7, 4, 16, 0) 0%, #070410 100%)',
          opacity: 0.4
        }}
      />
    </main>
  );
}