import Hero from "@/app/sections/hero-section";
import FeaturedProjects from "@/app/sections/featured-projects";
import Services from "@/app/sections/services-section";
import Testimonials from "@/app/sections/testimonials-section";
import CtaSection from "@/app/sections/cta-section";
import Navbar from "@/app/sections/navbar-section";
import Footer from "@/app/sections/footer-section";

export default function Home() {
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