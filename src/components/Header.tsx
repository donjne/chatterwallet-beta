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

// "use client"
// import React from 'react';

// const Header = () => {
//   return (
//     <header className="w-[1000px] flex flex-col items-center">
//       <h1
//         style={{
//           fontFamily: 'Iquost',
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
//         className="mt-4"
//         style={{
//           width: '628px',
//           fontFamily: 'Iquost',
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

// "use client"
// import React from 'react';

// const Header = () => {
//   return (
//     <header className="w-full max-w-[1000px] flex flex-col items-center px-4">
//       <h1
//         className="text-3xl md:text-5xl text-center leading-tight md:leading-normal"
//         style={{
//           fontWeight: 400,
//           letterSpacing: '-0.035em',
//           color: '#FFFFFF'
//         }}
//       >
//         Join the <br/><span style={{ color: '#8B5FE2' }}>ChatterWallet</span><br/> Private Beta!
//       </h1>
      
//       <p
//         className="mt-4 text-sm md:text-lg text-center max-w-[628px]"
//         style={{
//           fontWeight: 400,
//           lineHeight: '1.5',
//           letterSpacing: '-0.035em',
//           color: '#625B85'
//         }}
//       >
//         Revolutionize how you pay utility bills with <br/>crypto. Be the first to experience 
//         the future of <br/>seamless, secure, and fast utility payments.
//       </p>
//     </header>
//   );
// };

// export default Header;

"use client"
import React from 'react';

const Header = () => {
  return (
    <header className="w-full max-w-[1000px] flex flex-col items-center px-4">
      <h1
        className="text-3xl md:text-5xl text-center leading-tight md:leading-normal"
        style={{
          fontWeight: 400,
          letterSpacing: '-0.035em',
          color: '#FFFFFF'
        }}
      >
        Join the <span className="hidden md:inline">
          <span style={{ color: '#8B5FE2' }}>ChatterWallet</span> Private Beta!
        </span>
        <span className="md:hidden">
          <br /><span style={{ color: '#8B5FE2' }}>ChatterWallet</span><br />
          Private Beta!
        </span>
      </h1>
      
      <p
        className="mt-4 text-sm md:text-lg text-center max-w-[628px]"
        style={{
          fontWeight: 400,
          lineHeight: '1.5',
          letterSpacing: '-0.035em',
          color: '#625B85'
        }}
      >
        <span className="hidden md:inline">
          Revolutionize how you pay utility bills with crypto. Be the first to experience 
          the future of seamless, secure, and fast utility payments.
        </span>
        <span className="md:hidden">
          Revolutionize how you pay utility bills with<br /> 
          crypto. Be the first to experience the<br />
          future of seamless, secure, and fast<br />
          utility payments.
        </span>
      </p>
    </header>
  );
};

export default Header;