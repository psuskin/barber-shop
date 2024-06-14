
import HeroSection from '@/components/UI/HomePage/HeroSection/HeroSection';
import Gallery from '@/components/UI/HomePage/Gallery/Gallery';
import ZoomParallax from '@/components/UI/HomePage/ZoomParallax/ZoomParallax';
import Team from '@/components/UI/HomePage/Team/Team';
import Review from '@/components/UI/HomePage/Review/Review';
import Product from '@/components/UI/HomePage/Product/Product';
import Service from '@/components/UI/HomePage/Service/Service';
import FollowUsSection from '@/components/UI/HomePage/FollowUs/FollowUs';
import OurSpaces from '@/components/UI/HomePage/OurSpaces/OurSpaces';


const HomePage = () => {

  return (
    <div>
      <HeroSection />
      <Service />
      <Product />
      <ZoomParallax />
      <Gallery />
      <OurSpaces />
      <Team />
      <Review />
      <FollowUsSection />
    </div>
  );
};

export default HomePage;