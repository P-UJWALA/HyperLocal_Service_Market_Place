import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Categories from "../components/Categories";
import WhyChooseUs from "../components/WhyChooseUs";
import HowItWorks from "../components/HowItWorks";
import FeaturedWorkers from "../components/FeaturedWorkers";
import Testimonials from "../components/Testimonials";
import DownloadApp from "../components/DownloadApp";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Categories />
      <WhyChooseUs />
      <HowItWorks />
      <FeaturedWorkers />
      <Testimonials />
      <DownloadApp />
      <Footer />
    </>
  );
}