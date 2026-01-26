import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { NavPanel } from "@/components/NavPanel";
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
      </main>
    </>
  );
}
