import Hero from "../components/home/Hero";
import MissionSection from "../components/home/Our-Mission";
import ServicesSection from "../components/home/ServicesSection";
import EngineSection from "../components/home/EngineSection";
import WhyGTRSection from "../components/home/WhyGTRSection";
import TestimonialSection from "../components/home/TestimonialSection";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <MissionSection />
      <ServicesSection />
      <EngineSection />
      <WhyGTRSection />
      <TestimonialSection />
      <CTASection />
    </>
  );
}