"use client";

import { BackToTop } from "@/components/BackToTop/BackToTop";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { NavPanel } from "@/components/NavPanel/NavPanel";
import { ParallaxBackgroundImage } from "@/components/ParallaxBackgroundImage/ParallaxBackgroundImage";
import { Preloader } from "@/components/Preloader";
import { cn } from "@/utils/clsx";
import { useState } from "react";

export default function Rooms() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <>
      <Preloader />
      <div
        className={cn("layer", isOpen ? "layer-is-visible" : "")}
        onClick={toggleNav}
      />
      <Header onToggleNav={toggleNav} />
      <NavPanel isOpen={isOpen} onToggleNav={toggleNav} />
      <main>
        <ParallaxBackgroundImage />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
