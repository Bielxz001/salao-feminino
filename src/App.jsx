import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Services } from "./components/Services";
import { gallery } from "./data/content";
import { Testimonials } from "./components/Testimonials";
import { Booking } from "./components/Booking";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Features />
      <Services gallery={gallery} />
      <Testimonials />
      <Booking />
      <Footer />
    </div>
  );
}
