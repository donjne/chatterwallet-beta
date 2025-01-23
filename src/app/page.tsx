import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import FeatureCards from '@/components/FeatureCards';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <Header />
        <div className="mt-96">
          <FeatureCards />
        </div>
      </div>

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

      <div className="fixed bottom-0 left-0 z-0">
        <svg width="688" height="875" viewBox="0 0 688 875" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g style={{ mixBlendMode: 'screen' }}>
            <path style={{ mixBlendMode: 'screen' }} d="M114.605 1720.61C431.282 1403.93 431.282 890.492 114.605 573.815C-202.072 257.138 -715.508 257.138 -1032.19 573.815C-1348.86 890.492 -1348.86 1403.93 -1032.19 1720.61C-715.508 2037.28 -202.072 2037.28 114.605 1720.61Z" fill="url(#paint0_radial_460_46)"/>
            <path style={{ mixBlendMode: 'screen' }} d="M-458.787 1745.23C-128.508 1745.23 139.235 1477.49 139.235 1147.21C139.235 816.932 -128.508 549.188 -458.787 549.188C-789.065 549.188 -1056.81 816.932 -1056.81 1147.21C-1056.81 1477.49 -789.065 1745.23 -458.787 1745.23Z" fill="url(#paint1_radial_460_46)"/>
          </g>
          <defs>
            <radialGradient id="paint0_radial_460_46" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-458.926 1147.25) rotate(150.94) scale(810.903)">
              <stop stopColor="#FFA200"/>
              <stop offset="0.1" stopColor="#DF8D00"/>
              <stop offset="0.35" stopColor="#915C00"/>
              <stop offset="0.58" stopColor="#523400"/>
              <stop offset="0.77" stopColor="#251800"/>
              <stop offset="0.91" stopColor="#0A0600"/>
              <stop offset="1"/>
            </radialGradient>
            <radialGradient id="paint1_radial_460_46" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-458.916 1147.25) rotate(150.94) scale(598.022)">
              <stop stopColor="#FFA200"/>
              <stop offset="0.1" stopColor="#DF8D00"/>
              <stop offset="0.35" stopColor="#915C00"/>
              <stop offset="0.58" stopColor="#523400"/>
              <stop offset="0.77" stopColor="#251800"/>
              <stop offset="0.91" stopColor="#0A0600"/>
              <stop offset="1"/>
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}