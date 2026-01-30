import styles from "./Testimonials.module.css";
import { TESTIMONIALS } from "@/constants";
import { Overlay } from "../utility/Overlay/Overlay";
import { cn } from "@/utils/clsx";
import { TitleHeader } from "../utility/TitleHeader";

export const Testimonials = () => (
  <div
    className={cn("jarallax", styles.parallax_section_1)}
    data-jarallax
    data-speed="0.2"
  >
    <img
      className="jarallax-img kenburns-2"
      src="/images/hero_home_1.jpg"
      alt=""
    />
    <Overlay>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <TitleHeader
              subtitle="Testimonials"
              title="What Clients Says"
              className="white"
              subTitleClassName="mb-1"
              animation={false}
            />
            <div className="carousel_testimonials owl-carousel owl-theme nav-dots-orizontal">
              {TESTIMONIALS.map((review, index) => (
                <div className={styles.box_overlay} key={index}>
                  <div className={styles.pic}>
                    <figure>
                      <img src={review.imgSrc} alt="" className="img-circle" />
                    </figure>
                    <h4>
                      {review.name}
                      <small>{review.date}</small>
                    </h4>
                  </div>
                  <div className={styles.comment}>"{review.comment}"</div>
                </div>
              ))}
            </div>
            {/* End carousel_testimonials  */}
          </div>
        </div>
      </div>
    </Overlay>
  </div>
);
