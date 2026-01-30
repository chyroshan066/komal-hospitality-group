import { cn } from "@/utils/clsx";
import styles from "./ParallaxBackgroundImage.module.css";
import { Overlay } from "../utility/Overlay/Overlay";
import { useAnimationTrigger } from "@/hooks/useAnimationTrigger";
import { HeroTitleHeader } from "../utility/TitleHeader";
import Image from "next/image";

export const ParallaxBackgroundImage = () => {
  const isAnimated = useAnimationTrigger();

  return (
    <div
      className={cn("hero jarallax", styles.mediumHeight)}
      data-jarallax
      data-speed="0.2"
    >
      <Image
        src="/images/rooms/4.jpg"
        alt="Rooms and Suites"
        className="jarallax-img"
        fill
        priority
        sizes="100vw"
        style={{
          objectFit: "cover", // Ensures the image doesn't stretch
        }}
      />
      <Overlay
        className={cn("animate_hero", isAnimated ? "is-transitioned" : "")}
      >
        <HeroTitleHeader
          subtitle="Luxury Hotel Experience"
          title="Our Rooms & Suites"
        />
      </Overlay>
    </div>
  );
};
