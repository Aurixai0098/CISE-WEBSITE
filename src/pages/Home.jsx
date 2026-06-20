import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import AboutSection from "../components/AboutSection";
import CoursesSection from "../components/CoursesSection";
import PlacementSection from "../components/PlacementSection";
import FacultySection from "../components/FacultySection";
import SuccessStories from "../components/SuccessStories";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <CoursesSection />
      <PlacementSection />
      <FacultySection />
      <SuccessStories />
      <CTASection />
      <Footer />
    </>
  );
  }