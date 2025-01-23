import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import FeatureCards from '@/components/FeatureCards';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <div className="relative" style={{ marginTop: '400px' }}>
        <FeatureCards />
      </div>
    </main>
  );
}