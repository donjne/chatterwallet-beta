// "use client"
// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav 
//       className="absolute flex justify-between items-center px-12 h-20 bg-white/10"
//       style={{
//         width: '1000px',
//         left: '220px',
//         top: '80px',
//         background: 'rgba(255, 255, 255, 0.1)',
//         border: '1px solid #625B85',
//         boxShadow: '4px 4px 0px rgba(141, 131, 190, 0.1)',
//         borderRadius: '50px',
//       }}
//     >
//       {/* Logo */}
//       <div className="flex items-center">
//         {/* Icon placeholder - replace with actual icon */}
//         <div className="w-6 h-6 mr-2">
//           <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2"/>
//             <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2"/>
//             <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2"/>
//           </svg>
//         </div>
//         <span 
//           style={{
//             fontFamily: 'Iquost',
//             fontStyle: 'normal',
//             fontWeight: 400,
//             fontSize: '24px',
//             lineHeight: '20px',
//             letterSpacing: '-0.028em',
//             color: '#FFFFFF'
//           }}
//         >
//           ChatterWallet
//         </span>
//       </div>

//       {/* Contact Button */}
//       <button 
//         className="flex items-center justify-center"
//         style={{
//           width: '200px',
//           height: '50px',
//           background: 'linear-gradient(90deg, #8B5FE2 0%, #4C347C 100%)',
//           border: '1px solid #BDB0FF',
//           boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
//           borderRadius: '50px',
//           fontFamily: 'Iquost',
//           fontStyle: 'normal',
//           fontWeight: 400,
//           fontSize: '24px',
//           lineHeight: '24px',
//           letterSpacing: '-0.035em',
//           color: '#FFFFFF'
//         }}
//       >
//         Contact Us
//       </button>
//     </nav>
//   );
// };

// export default Navbar;

"use client"
import React from 'react';

const Navbar = () => {
  return (
    <nav 
      className="flex justify-between items-center px-12 h-20"
      style={{
        width: '1000px',
        background: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid #625B85',
        boxShadow: '4px 4px 0px rgba(141, 131, 190, 0.1)',
        borderRadius: '50px',
      }}
    >
      {/* Logo */}
      <div className="flex items-center">
        <div className="w-6 h-6 mr-2">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2"/>
            <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2"/>
            <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2"/>
          </svg>
        </div>
        <span 
          style={{
            fontFamily: 'Iquost',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '24px',
            lineHeight: '20px',
            letterSpacing: '-0.028em',
            color: '#FFFFFF'
          }}
        >
          ChatterWallet
        </span>
      </div>

      {/* Contact Button */}
      <button 
        className="flex items-center justify-center"
        style={{
          width: '200px',
          height: '50px',
          background: 'linear-gradient(90deg, #8B5FE2 0%, #4C347C 100%)',
          border: '1px solid #BDB0FF',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
          borderRadius: '50px',
          fontFamily: 'Iquost',
          fontWeight: 400,
          fontSize: '24px',
          lineHeight: '24px',
          letterSpacing: '-0.035em',
          color: '#FFFFFF'
        }}
      >
        Contact Us
      </button>
    </nav>
  );
};

export default Navbar;