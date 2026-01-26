import { Header } from "@/components/Header";
import { Preloader } from "@/components/Preloader";

export default function Home() {
  return (
    <>
      <Preloader />
      <div className="layer" />
      <Header />
    </>
  );
}
