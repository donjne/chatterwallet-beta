import { Space_Grotesk } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import FeatureCards from '@/components/FeatureCards';
import Footer from '@/components/Footer';
import StarBackground from '@/components/StarBackground';
import Image from 'next/image';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  return (
    <main className={`relative min-h-screen bg-[#0F0A1F] overflow-hidden ${spaceGrotesk.className}`}>
      <StarBackground />
      
      {/* Background decorations */}
      <div className="fixed bottom-0 right-0 z-0">
        <svg width="368" height="368" viewBox="0 0 368 368" fill="none" xmlns="http://www.w3.org/2000/svg">
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

      {/* Left geometric shapes */}
      <div className="fixed bottom-0 left-0 z-0">
        <Image
          src="/asset2.png"
          alt="Geometric background shapes"
          width={278}
          height={513}
          priority
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-grow flex flex-col items-center pt-20 pb-20">
          {/* Centered container for main content */}
          <div className="w-[1000px] flex flex-col items-center">
            <Navbar />
            <div className="mt-20">
              <Header />
            </div>
            <div className="mt-32 mb-32">
              <FeatureCards />
            </div>
          </div>
        </div>

        {/* Footer section */}
        <div className="relative">
          <Footer />
        </div>
      </div>
    </main>
  );
}