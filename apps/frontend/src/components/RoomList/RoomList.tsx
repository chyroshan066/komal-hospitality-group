import { cn } from "@/utils/clsx";
import styles from "./RoomList.module.css";
import { ROOMS } from "@/constants";
import Link from "next/link";

export const RoomList = () => (
  <div className="container margin_120_95 pb-0" id="first_section">
    {ROOMS.map((room) => (
      <div key={room.id} className={styles.row_list_version_1}>
        <div
          className={cn(
            "pinned-image pinned-image--medium",
            styles.rounded_container,
          )}
        >
          <div className="pinned-image__container">
            <img src={room.imgSrc} alt="" />
          </div>
        </div>
        {/* /pinned-image */}
        <div className="row justify-content-start">
          <div className="col-lg-8">
            <div className={styles.box_item_info} data-jarallax-element="-30">
              <small>From ${room.price}/night</small>
              <h2>{room.title}</h2>
              <p>{room.description}</p>
              <div className={cn("clearfix", styles.facilities)}>
                <ul>
                  {room.facilities.map((facility, index) => (
                    <li key={index}>
                      <i className={facility.icon} /> {facility.label}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={cn(
                  "d-flex align-items-center justify-content-between",
                  styles.box_item_footer,
                )}
              >
                <Link href="#0" className="btn_4 learn-more">
                  <span className="circle">
                    <span className="icon arrow" />
                  </span>
                  <span className="button-text">Book Now</span>
                </Link>
                <Link
                  href="room-details.html"
                  className={cn("animated_link", styles.animated_link)}
                >
                  <strong>Read more</strong>
                </Link>
              </div>
              {/* /box_item_footer */}
            </div>
            {/* /box_item_info */}
          </div>
        </div>
      </div>
    ))}
  </div>
);
