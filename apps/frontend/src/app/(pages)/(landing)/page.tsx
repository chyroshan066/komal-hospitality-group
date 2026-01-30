"use client";

import { About } from "@/components/About/About";
import { BackToTop } from "@/components/BackToTop/BackToTop";
import { Booking } from "@/components/Booking/Booking";
import { Facilities } from "@/components/Facilities";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { LocalAmenities } from "@/components/LocalAmenities/LocalAmenities";
import { Marquee } from "@/components/Marquee/Marquee";
import { NavPanel } from "@/components/NavPanel/NavPanel";
import { PinnedContent } from "@/components/PinnedContent";
import { Preloader } from "@/components/Preloader";
import { RoomCategories } from "@/components/RoomCategories/RoomCategories";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { cn } from "@/utils/clsx";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <>
      <Preloader />
      <div className={cn("layer", isOpen ? "layer-is-visible" : "")} onClick={toggleNav} />
      <Header onToggleNav={toggleNav} />
      <NavPanel isOpen={isOpen} onToggleNav={toggleNav} />
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
        <Booking />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
