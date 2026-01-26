import Link from "next/link";
import { TitleHeader } from "./utility/TitleHeader";

export const RoomCategories = () => (
  <>
    <TitleHeader
      subtitle="Luxury experience"
      title="Rooms & Suites"
      className="mb-3"
      delay={200}
    />
    <div
      className="row justify-content-center add_bottom_90"
      data-cues="slideInUp"
      data-delay="300"
    >
      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
        <Link href="#" className="box_cat_rooms">
          <figure>
            <div
              className="background-image"
              data-background="url(/images/rooms/1.jpg)"
            />
            <div className="info">
              <small>From $250/night</small>
              <h3>Junior Suite</h3>
              <span>Read more</span>
            </div>
          </figure>
        </Link>
      </div>
      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
        <Link href="#" className="box_cat_rooms">
          <figure>
            <div
              className="background-image"
              data-background="url(/images/rooms/2.jpg)"
            />
            <div className="info">
              <small>From $190/night</small>
              <h3>Deluxe Room</h3>
              <span>Read more</span>
            </div>
          </figure>
        </Link>
      </div>
      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
        <Link href="#" className="box_cat_rooms">
          <figure>
            <div
              className="background-image"
              data-background="url(/images/rooms/3.jpg)"
            />
            <div className="info">
              <small>From $240/night</small>
              <h3>Superior Room</h3>
              <span>Read more</span>
            </div>
          </figure>
        </Link>
      </div>
      <p className="text-end">
        <Link href="#" className="btn_1 outline mt-2">
          View all Rooms
        </Link>
      </p>
    </div>
  </>
);
