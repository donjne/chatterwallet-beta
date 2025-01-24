// "use client"
// import React from 'react';

// const Footer = () => {
//   return (
//     <div className="relative">
//       <div className="relative mx-auto" style={{ width: '1000px' }}>
//         {/* Footer bar */}
//         <div 
//           style={{
//             width: '100%',
//             height: '80px',
//             background: 'rgba(47, 39, 72, 0.5)',
//             backdropFilter: 'blur(10px)',
//             borderRadius: '50px',
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             padding: '0 50px',
//           }}
//         >
//           {/* Left Text */}
//           <span className="text-2xl text-white font-normal tracking-tight">
//             Secure your spot now!
//           </span>

//           {/* Get Started Button */}
//           <button 
//             className="transition-all hover:opacity-90"
//             style={{
//               width: '200px',
//               height: '50px',
//               background: 'linear-gradient(90deg, #8B5FE2 0%, #4C347C 100%)',
//               border: '1px solid rgba(189, 176, 255, 0.5)',
//               boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
//               borderRadius: '50px',
//               fontSize: '24px',
//               fontWeight: 400,
//               lineHeight: '24px',
//               letterSpacing: '-0.035em',
//               color: '#FFFFFF',
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center'
//             }}
//           >
//             Get Started
//           </button>
//         </div>

//         {/* Copyright text */}
//         <div 
//           className="absolute right-0 mt-4 px-12"
//           style={{
//             fontSize: '14px',
//             color: 'rgba(98, 91, 133, 0.8)',
//             fontWeight: 400,
//           }}
//         >
//           © Copyright 2024 ChatterWallet Ltd
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

"use client"
import React from 'react';

const Footer = () => {
  return (
    <div className="relative pb-20"> {/* Added padding bottom */}
      <div className="relative mx-auto" style={{ width: '1000px' }}>
        {/* Footer bar */}
        <div 
          style={{
            width: '100%',
            height: '80px',
            background: 'rgba(47, 39, 72, 0.5)',
            backdropFilter: 'blur(10px)',
            borderRadius: '50px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 50px',
          }}
        >
          {/* Left Text */}
          <span className="text-2xl text-white font-normal tracking-tight">
            Secure your spot now!
          </span>

          {/* Get Started Button */}
          <button 
            className="transition-all hover:opacity-90"
            style={{
              width: '200px',
              height: '50px',
              background: 'linear-gradient(90deg, #8B5FE2 0%, #4C347C 100%)',
              border: '1px solid rgba(189, 176, 255, 0.5)',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
              borderRadius: '50px',
              fontSize: '24px',
              fontWeight: 400,
              lineHeight: '24px',
              letterSpacing: '-0.035em',
              color: '#FFFFFF',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            Get Started
          </button>
        </div>

        {/* Copyright text */}
        <div 
          className="absolute right-12 mt-6" // Adjusted positioning
          style={{
            fontSize: '14px',
            color: 'rgba(98, 91, 133, 0.8)',
            fontWeight: 400,
          }}
        >
          © Copyright 2024 ChatterWallet Ltd
        </div>
      </div>
    </div>
  );
};

export default Footer;