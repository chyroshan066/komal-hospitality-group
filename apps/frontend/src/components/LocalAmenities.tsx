import Image from "next/image";
import Link from "next/link";

export const LocalAmenities = () => (
  <div className="bg_white">
    <div className="container margin_120_95">
      <div className="row justify-content-between d-flex align-items-center add_bottom_90">
        <div className="col-lg-6">
          <div className="pinned-image rounded_container pinned-image--small mb-4">
            <div className="pinned-image__container">
              <Image
                src="/images/local_amenities_1.jpg" 
                alt="Restaurants" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="title">
            <small>Local Amenities</small>
            <h3>Restaurants</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <p>
              <Link href="about.html" className="btn_1 mt-1 outline">
                Read more
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="row justify-content-between d-flex align-items-center">
        <div className="col-lg-6 order-lg-2">
          <div className="pinned-image rounded_container pinned-image--small mb-4">
            <div className="pinned-image__container">
              <Image 
                src="/images/local_amenities_3.jpg" 
                alt="Art & Culture" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-5 order-lg-1">
          <div className="title">
            <small>Local Amenities</small>
            <h3>Art & Culture</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <p>
              <Link href="about.html" className="btn_1 mt-1 outline">
                Read more
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
