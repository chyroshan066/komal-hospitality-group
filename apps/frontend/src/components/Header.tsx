import Image from "next/image";
import Link from "next/link";

export const Header = () => (
  <header className="reveal_header">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-6">
          <Link href="index.html" className="logo_normal">
            <Image src="/images/logo.png" width={135} height={45} alt="" />
          </Link>
          <Link href="index.html" className="logo_sticky">
            <Image
              src="/images/logo_sticky.png"
              width={135}
              height={45}
              alt=""
            />
          </Link>
        </div>
        <div className="col-6">
          <nav>
            <ul>
              <li>
                <a href="#booking_section" className="btn_1 btn_scrollto">
                  Book Now
                </a>
              </li>
              <li>
                <div className="hamburger_2 open_close_nav_panel">
                  <div className="hamburger__box">
                    <div className="hamburger__inner"></div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
);
