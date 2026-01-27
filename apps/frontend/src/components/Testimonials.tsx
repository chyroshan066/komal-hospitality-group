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
              <div>
                <div className="box_overlay">
                  <div className="pic">
                    <figure>
                      <img
                        src="/images/testimonials/testimonial_1.jpg"
                        alt=""
                        className="img-circle"
                      />
                    </figure>
                    <h4>
                      Roberta<small>12 Oct</small>
                    </h4>
                  </div>
                  <div className="comment">
                    "Mea ad postea meliore fuisset. Timeam repudiare id eum, ex
                    paulo dictas elaboraret sed, mel cu unum nostrud."
                  </div>
                </div>
                {/* End box_overlay */}
              </div>
              <div>
                <div className="box_overlay">
                  <div className="pic">
                    <figure>
                      <img
                        src="/images/testimonials/testimonial_1.jpg"
                        alt=""
                        className="img-circle"
                      />
                    </figure>
                    <h4>
                      Roberta<small>2 Nov</small>
                    </h4>
                  </div>
                  <div className="comment">
                    "Mea ad postea meliore fuisset. Timeam repudiare id eum, ex
                    paulo dictas elaboraret sed, mel cu unum nostrud."
                  </div>
                </div>
                {/* End box_overlay */}
              </div>
              <div>
                <div className="box_overlay">
                  <div className="pic">
                    <figure>
                      <img
                        src="/images/testimonials/testimonial_1.jpg"
                        alt=""
                        className="img-circle"
                      />
                    </figure>
                    <h4>
                      Roberta<small>3 Dec</small>
                    </h4>
                  </div>
                  <div className="comment">
                    "Mea ad postea meliore fuisset. Timeam repudiare id eum, ex
                    paulo dictas elaboraret sed, mel cu unum nostrud."
                  </div>
                </div>
                {/* End box_overlay */}
              </div>
            </div>
            {/* End carousel_testimonials  */}
          </div>
        </div>
      </div>
    </Overlay>
  </div>
);
