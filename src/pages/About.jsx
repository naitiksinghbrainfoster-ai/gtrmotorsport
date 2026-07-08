import Hero from "../components/about/hero";
import OurStory from "../components/about/StorySection";
import Timeline from "../components/about/TimelineSection";
import MeetPaul from "../components/about/MeetPaulSection";
import Mission  from "../components/about/MissionSection";
import Values from "../components/about/ValuesSection";
import EngineeringPhilosophy from "../components/about/EngineeringPhilosophy";
import Stats from "../components/about/StatsSection";
import Gallery from "../components/about/GallerySection";
import BibleVerse from "../components/about/BibleVerseSection";
// import CTA from "../components/about/CTASection";

export default function Home() {0
  return (
    <>
      <Hero />
      <OurStory/>
      <Timeline />
      <MeetPaul />
      <Mission />
      <Values />
      <EngineeringPhilosophy />
      <Stats />
      <Gallery />
      <BibleVerse />
      {/* <CTA/> */}
    </>
  );
}