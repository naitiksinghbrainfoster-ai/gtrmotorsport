import HeroSection from "../components/bloginner/HeroSection";
import ArticleContent from "../components/bloginner/ArticleContent";

const article = {
  category: "Track Preparation",
  title: "How to Prepare Your Porsche for Track Day",
  date: "July 2026",
  readTime: "8 Min Read",
  image: "IMAGE_URL",

  sections: [
    {
      heading: "There's nothing quite like the first lap of the day",
      paragraphs: [
        "There's nothing quite like the first lap of the day...",
        "A properly prepared Porsche is faster, safer and much more enjoyable to drive."
      ]
    },

    {
      heading: "1. Start With Fluids",
      paragraphs: [
        "Track driving puts sustained heat and load on your Porsche..."
      ],
      bullets: [
        "Brake fluid should be flushed.",
        "Engine oil should be fresh.",
        "Coolant should be checked."
      ]
    },

    {
      heading: "2. Inspect the Brakes",
      paragraphs: [
        "Pads and rotors take a beating on track..."
      ]
    }
  ]
};

export default function HowToPrepareTrackDay() {
  return (
    <>
      <HeroSection {...article} />
      <ArticleContent article={article} />
    </>
  );
}