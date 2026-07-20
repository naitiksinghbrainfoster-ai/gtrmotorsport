import Hero from "../components/services/heroabout";
import IntroSection from "../components/services/IntroSection";
import ServicesGrid from "../components/services/ServicesGridSection";
import FeaturedService from "../components/services/FeaturedEngineBuilding";
import WhyChooseSection  from "../components/services/WhyChooseSection";
import ProcessSection from "../components/services/ProcessSection";
import FaqSection from "../components/services/FaqSection";


export default function Home() {0
  return (
    <>
      <Hero />
      <IntroSection/>
      <ServicesGrid />
      <FeaturedService />
      <ProcessSection />
      <WhyChooseSection />
      <FaqSection />
    </>
  );
}