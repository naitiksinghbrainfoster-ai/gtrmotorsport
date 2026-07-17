import Hero from "../components/gallery/HeroSection";
import GalleryCategories from "../components/gallery/GalleryCategories";
// import FeaturedGallery from "../components/gallery/FeaturedGallery";
import MasonryGallery from "../components/gallery/MasonryGallery";
// import BeforeAfterSection from "../components/gallery/BeforeAfterSection";
// import MotorsportGallery from "../components/gallery/MotorsportGallery";
import CTASection from "../components/gallery/CTASection";



export default function Home() {0
  return (
    <>
      <Hero />
      <GalleryCategories/>
      {/* <FeaturedGallery /> */}
      <MasonryGallery />
      {/* <BeforeAfterSection /> */}
      {/* <MotorsportGallery /> */}
      <CTASection />
    </>
  );
}