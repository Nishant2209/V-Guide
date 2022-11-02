import Navbar from "../../Components/Navbar_Land/Navbar";
import Hero from "../../Components/Hero_Section/Hero";
import Features from "../../Components/Features_Section/Features";
import About from "../../Components/About_Section/About";
import Testimonials from "../../Components/Testimonials_Section/Testimonials";
import Footer from "../../Components/Footer/Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <hr className="bg-darkblue h-1" />
      <Features />
      <hr className="bg-darkblue h-1" />
      <About />
      <hr className="bg-darkblue h-1" />
      <Testimonials />
      <Footer />
    </>
  );
};

export default LandingPage;
