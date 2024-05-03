"use client"
import HeroSection from '@/components/UI/HomePage/HeroSection/HeroSection';
import Gallery from '@/components/UI/HomePage/Gallery/Gallery';
import ScrollAnimation from '@/components/UI/HomePage/ScrollParallax/ScrollAnimation';

const HomePage = () => {

  return (
    <div>
      <HeroSection />
      <ScrollAnimation />
      {/* <Gallery /> */}
    </div>
  );
};

export default HomePage;