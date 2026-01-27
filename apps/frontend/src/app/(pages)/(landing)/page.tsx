import { About } from "@/components/About";
// import { Booking } from "@/components/Booking";
import { Facilities } from "@/components/Facilities";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LocalAmenities } from "@/components/LocalAmenities";
import { Marquee } from "@/components/Marquee";
import { NavPanel } from "@/components/NavPanel";
import { PinnedContent } from "@/components/PinnedContent";
import { Preloader } from "@/components/Preloader";
import { RoomCategories } from "@/components/RoomCategories";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      {/* <Preloader /> */}
      <div className="layer" />
      <Header />
      <NavPanel />
      <main>
        <Hero />
        <div className="pattern_2">
          <About />
          <PinnedContent />
        </div>
        <div className="container margin_120_95">
          <RoomCategories />
          <Facilities />
        </div>
        <Marquee />
        <LocalAmenities />
        <Testimonials />
        {/* <Booking /> */}
      </main>
    </>
  );
}
