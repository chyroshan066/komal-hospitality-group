import { TESTIMONIALS } from "@/constants/Testimonials";
import { Overlay } from "./utility/Overlay";

export const Testimonials = () => (
  <div className="parallax_section_1 jarallax" data-jarallax data-speed="0.2">
    <img
      className="jarallax-img kenburns-2"
      src="/images/hero_home_1.jpg"
      alt=""
    />
    <Overlay>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="title white">
              <small className="mb-1">Testimonials</small>
              <h2>What Clients Says</h2>
            </div>
            <div className="carousel_testimonials owl-carousel owl-theme nav-dots-orizontal">
              {TESTIMONIALS.map((review, index) => (
                <div className="box_overlay" key={index}>
                  <div className="pic">
                    <figure>
                      <img src={review.imgSrc} alt="" className="img-circle" />
                    </figure>
                    <h4>
                      {review.name}
                      <small>{review.date}</small>
                    </h4>
                  </div>
                  <div className="comment">"{review.comment}"</div>
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
