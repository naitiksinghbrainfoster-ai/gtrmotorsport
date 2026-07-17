import Hero from "../components/about/hero";
import MeetPaul from "../components/about/MeetPaulSection";
import OurStory from "../components/about/StorySection";
import Timeline from "../components/about/TimelineSection";
import BibleVerse from "../components/about/BibleVerseSection";
// import CTA from "../components/about/CTASection";

export default function Home() {0
  return (
    <>
      <Hero />
      <MeetPaul />
      <OurStory/>
      <Timeline />
      <BibleVerse />
      {/* <CTA/> */}
    </>
  );
}