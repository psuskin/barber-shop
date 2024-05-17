"use client"
import HeroSection from '@/components/UI/HomePage/HeroSection/HeroSection';
import Gallery from '@/components/UI/HomePage/Gallery/Gallery';
import Pricing from '@/components/UI/HomePage/Pricing/Pricing';
import ZoomParallax from '@/components/UI/HomePage/ZoomParallax/ZoomParallax';
import Team from '@/components/UI/HomePage/Team/Team';
import Review from '@/components/UI/HomePage/Review/Review';
import Product from '@/components/UI/HomePage/Product/Product';
import Service from '@/components/UI/HomePage/Service/Service';
import Blog from '@/components/UI/HomePage/Blog/Blog';
import FollowUsSection from '@/components/UI/HomePage/FollowUs/FollowUs';
import OurSpaces from '@/components/UI/HomePage/OurSpaces/OurSpaces';

const HomePage = () => {

  return (
    <div>
      <HeroSection />
      <Service />
      {/* <Pricing /> */}
      <Product />
      <ZoomParallax />
      <Gallery />
      <OurSpaces />
      <Team />
      <Review />
      {/* <Blog /> */}
      <FollowUsSection />
    </div>
  );
};

export default HomePage;