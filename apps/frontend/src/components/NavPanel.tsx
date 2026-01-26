import Image from "next/image";
import Link from "next/link";

export const NavPanel = () => (
  <div className="nav_panel">
    <Link href="#0" className="closebt open_close_nav_panel">
      <i className="bi bi-x"></i>
    </Link>
    <div className="logo_panel">
      <Image src="/images/logo_sticky.png" width={135} height={45} alt="" />
    </div>
    <div className="sidebar-navigation">
      <nav>
        <ul className="level-1">
          <li className="parent">
            <a href="#0">Home</a>
            <ul className="level-2">
              <li className="back">
                <Link href="#0">Back</Link>
              </li>
              <li>
                <Link href="index.html">Home Video Bg</Link>
              </li>
              <li>
                <Link href="#">Home Carousel (Missing)</Link>
              </li>
              <li>
                <Link href="#">Home FlexSlider (Missing)</Link>
              </li>
              <li>
                <Link href="#">Home Youtube/Vimeo (Missing)</Link>
              </li>
              <li>
                <Link href="#">Home Parallax (Missing)</Link>
              </li>
              <li>
                <Link href="#">Home Parallax 2 (Missing)</Link>
              </li>
              <li>
                <Link href="#">Home Working Booking (Missing)</Link>
              </li>
              <li>
                <Link href="#">Home Working Booking 2 (Missing)</Link>
              </li>
              <li>
                <Link href="#">Home Category Hover (Missing)</Link>
              </li>
              <li>
                <Link href="#">Home Category Hover 2 (Missing)</Link>
              </li>
            </ul>
          </li>
          <li className="parent">
            <Link href="#0">Rooms & Suites</Link>
            <ul className="level-2">
              <li className="back">
                <Link href="#0">Back</Link>
              </li>
              <li>
                <Link href="#">Room list 1 (Missing)</Link>
              </li>
              <li>
                <Link href="#">Room list 2 (Missing)</Link>
              </li>
              <li>
                <Link href="#">Room list 3 (Missing)</Link>
              </li>
              <li>
                <Link href="#">Room details (Missing)</Link>
              </li>
              <li>
                <Link href="#">Working Booking Request (Missing)</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="#">About (Missing)</Link>
          </li>
          <li>
            <Link href="#">Restaurant (Missing)</Link>
          </li>
          <li>
            <Link href="#">News & events (Missing)</Link>
          </li>
          <li>
            <Link href="#">Contact (Missing)</Link>
          </li>
          <li className="parent">
            <Link href="#0">Other Pages</Link>
            <ul className="level-2">
              <li className="back">
                <Link href="#0">Back</Link>
              </li>
              <li>
                <Link href="#">Error Page (Missing)</Link>
              </li>
              <li>
                <Link href="#">Masonry Gallery (Missing)</Link>
              </li>
              <li>
                <Link href="#">Menu of the day (Missing)</Link>
              </li>
              <li>
                <Link href="#">Modal Advertise (Missing)</Link>
              </li>
              <li>
                <Link href="#">GDPR Cookie Bar (Missing)</Link>
              </li>
              <li>
                <Link href="#">Coming Soon (Missing)</Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className="panel_footer">
          <div className="phone_element">
            <a href="tel://423424234">
              <i className="bi bi-telephone"></i>
              <span>
                <em>Info and bookings</em>+41 934 121 1334
              </span>
            </a>
          </div>
        </div>
        {/* panel_footer  */}
      </nav>
    </div>
    {/* sidebar-navigation  */}
  </div>
);
