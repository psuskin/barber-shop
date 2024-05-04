"use client"
import HeroSection from '@/components/UI/HomePage/HeroSection/HeroSection';
import Gallery from '@/components/UI/HomePage/Gallery/Gallery';
import ScrollAnimation from '@/components/UI/HomePage/ScrollParallax/ScrollAnimation';
import AboutUs from '@/components/UI/HomePage/AboutUs/AboutUs';
import Pricing from '@/components/UI/HomePage/Pricing/Pricing';
import ZoomParallax from '@/components/UI/HomePage/ZoomParallax/ZoomParallax';

const HomePage = () => {

  return (
    <div>
      <HeroSection />
      <ScrollAnimation />
      <Pricing />
      <ZoomParallax />
      <AboutUs />
      {/* <Gallery /> */}
    </div>
  );
};

export default HomePage;