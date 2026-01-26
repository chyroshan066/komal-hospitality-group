import Image from "next/image";

export const PinnedContent = () => (
  <div className="pinned-image pinned-image--medium">
    <div className="pinned-image__container" id="section_video">
      <Image
        src="/images/home_1.jpg"
        alt="Luxury Hotel Experience"
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }} 
        priority 
      />
      <div className="pinned-image__container-overlay" />
    </div>
    <div className="pinned_over_content">
      <div className="title white">
        <small data-cue="slideInUp" data-delay="200">
          Luxury Hotel Experience
        </small>
        <h2 data-cue="slideInUp" data-delay="300">
          Enjoy in a very
          <br /> Immersive Relax
        </h2>
      </div>
    </div>
  </div>
);
