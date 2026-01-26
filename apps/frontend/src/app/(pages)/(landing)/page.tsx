import { About } from "@/components/About";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { NavPanel } from "@/components/NavPanel";
import { PinnedContent } from "@/components/PinnedContent";
import { Preloader } from "@/components/Preloader";

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
      </main>
    </>
  );
}
