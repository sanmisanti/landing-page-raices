import Hero from "./hero-section";
import FeaturedProjects from "./featured-projects";
import Services from "./services-section";
import Testimonials from "./testimonials-section";
import CtaSection from "./cta-section";
import Navbar from "@/app/sections/navbar-section";
import Footer from "./footer-section";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <Services />
      <Testimonials />
      <CtaSection />
      <Footer />
    </main>
  );
}