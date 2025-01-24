// "use client"
// import React from 'react';

// const Header = () => {
//   return (
//     <header
//       style={{
//         position: 'absolute',
//         width: '1000px',
//         height: '104px',
//         left: '220px',
//         top: '220px',
//       }}
//     >
//       <h1
//         style={{
//           position: 'absolute',
//           width: '1000px',
//           height: '48px',
//           left: 'calc(50% - 1000px/2)',
//           top: '0px',
//           fontFamily: 'Iquost',
//           fontStyle: 'normal',
//           fontWeight: 400,
//           fontSize: '48px',
//           lineHeight: '48px',
//           textAlign: 'center',
//           letterSpacing: '-0.035em',
//           color: '#FFFFFF'
//         }}
//       >
//         Join the <span style={{ color: '#8B5FE2' }}>ChatterWallet</span> Private Beta!
//       </h1>
      
//       <p
//         style={{
//           position: 'absolute',
//           width: '628px',
//           height: '36px',
//           left: 'calc(50% - 628px/2)',
//           top: '56px',
//           fontFamily: 'Iquost',
//           fontStyle: 'normal',
//           fontWeight: 400,
//           fontSize: '18px',
//           lineHeight: '18px',
//           textAlign: 'center',
//           letterSpacing: '-0.035em',
//           color: '#625B85'
//         }}
//       >
//         Revolutionize how you pay utility bills with crypto. Be the first to experience 
//         the future of seamless, secure, and fast utility payments.
//       </p>
//     </header>
//   );
// };

// export default Header;

"use client"
import React from 'react';

const Header = () => {
  return (
    <header className="w-[1000px] flex flex-col items-center">
      <h1
        style={{
          fontFamily: 'Iquost',
          fontWeight: 400,
          fontSize: '48px',
          lineHeight: '48px',
          textAlign: 'center',
          letterSpacing: '-0.035em',
          color: '#FFFFFF'
        }}
      >
        Join the <span style={{ color: '#8B5FE2' }}>ChatterWallet</span> Private Beta!
      </h1>
      
      <p
        className="mt-4"
        style={{
          width: '628px',
          fontFamily: 'Iquost',
          fontWeight: 400,
          fontSize: '18px',
          lineHeight: '18px',
          textAlign: 'center',
          letterSpacing: '-0.035em',
          color: '#625B85'
        }}
      >
        Revolutionize how you pay utility bills with crypto. Be the first to experience 
        the future of seamless, secure, and fast utility payments.
      </p>
    </header>
  );
};

export default Header;