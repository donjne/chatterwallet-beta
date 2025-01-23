import React from 'react';

const Footer = () => {
  return (
    <div className="relative mt-32 mb-16">
      {/* Footer bar */}
      <div 
        className="mx-auto"
        style={{
          width: '1000px',
          height: '80px',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(4px)',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          borderRadius: '50px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 50px',
          gap: '10px',
        }}
      >
        {/* Left Text */}
        <span 
          style={{
            fontFamily: 'Iquost',
            fontSize: '24px',
            fontWeight: 400,
            lineHeight: '24px',
            letterSpacing: '-0.035em',
            color: '#FFFFFF'
          }}
        >
          Secure your spot now!
        </span>

        {/* Get Started Button */}
        <button 
          style={{
            width: '200px',
            height: '50px',
            background: 'linear-gradient(90deg, #8B5FE2 0%, #4C347C 100%)',
            border: '1px solid #BDB0FF',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: '50px',
            fontFamily: 'Iquost',
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
        className="text-right mt-4 mr-8"
        style={{
          fontFamily: 'Iquost',
          fontSize: '14px',
          color: '#625B85'
        }}
      >
        © Copyright 2024 ChatterWallet Ltd
      </div>
    </div>
  );
};

export default Footer;