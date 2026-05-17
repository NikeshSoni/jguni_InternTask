import Image from "next/image";
import HomePage from "./components/Hero";
import Navbar from "./components/Navbar";
import FeaturesSection from "./components/Features";
import AlumniTestimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import CtaSection from "./components/CtaSection";
import StatsSection from "./components/StatsSection";
import ProgrammersSection from "./components/ProgrammersSection";
import ContactPage from "./components/ContactPage";
import CampusHighilights from "./components/CampusHighilights";

export default function Home() {
  return (
    <>
     <Navbar />
      <HomePage />
      <FeaturesSection />
      <CtaSection />
      <StatsSection />
       <CampusHighilights />
      <ProgrammersSection />
      <AlumniTestimonials />
      <ContactPage />
      <Footer />
    </>
  );
}
