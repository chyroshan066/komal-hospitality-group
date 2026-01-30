import { cn } from "@/utils/clsx";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { OnToggleNav } from "@/types";

export const Header = ({ onToggleNav }: OnToggleNav) => (
  <header className="reveal_header">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-6">
          <Link
            href="index.html"
            className={cn("logo_normal", styles.logo_normal)}
          >
            <Image src="/images/logo.png" width={135} height={45} alt="" />
          </Link>
          <Link
            href="index.html"
            className={cn("logo_sticky", styles.logo_sticky)}
          >
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
                <div
                  className={cn("open_close_nav_panel", styles.hamburger_2)}
                  onClick={onToggleNav}
                >
                  <div className={styles.hamburger__box}>
                    <div
                      className={cn(
                        "hamburger__inner",
                        styles.hamburger__inner,
                      )}
                    />
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
