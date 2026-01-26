import Image from "next/image";

export const About = () => (
  <div className="container margin_120_95" id="first_section">
    <div className="row justify-content-between flex-lg-row-reverse align-items-center">
      <div className="col-lg-5">
        <div className="parallax_wrapper">
          <Image 
            src="/images/home_2.jpg" 
            alt="About us background" 
            width={600} 
            height={750}
            className="img-fluid rounded-img" 
            priority 
          />
          <div data-cue="slideInUp" className="img_over">
            <span data-jarallax-element="-30">
              <Image 
                src="/images/home_1.jpg" 
                alt="Owner" 
                width={600} 
                height={830} 
                className="rounded-img" 
              />
            </span>
          </div>
        </div>
      </div>
      <div className="col-lg-5">
        <div className="intro">
          <div className="title">
            <small>About us</small>
            <h2>Tailored services and the experience of unique holidays</h2>
          </div>
          <p className="lead">
            Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat
            dignissim.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <p>
            <em>Maria...the Owner</em>  {/*  <em> tag indicate emphasis */}
          </p>
        </div>
      </div>
    </div>
  </div>
);
