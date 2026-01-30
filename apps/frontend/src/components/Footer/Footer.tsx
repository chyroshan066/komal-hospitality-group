"use client";

import { cn } from "@/utils/clsx";
import styles from "./Footer.module.css";
import Link from "next/link";
import { useEffect, useRef } from "react";

export const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200 && footerRef.current) {
        const height = footerRef.current.offsetHeight;
        // Apply the margin to the main element dynamically
        const main = document.querySelector("main");
        if (main) main.style.marginBottom = `${height}px`;
      } else {
        const main = document.querySelector("main");
        if (main) main.style.marginBottom = "0px";
      }
    };

    // Run on mount and on resize
    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer ref={footerRef} className={styles.revealed}>
      <div className={styles.footer_bg}>
        <div className={styles.gradient_over} />
        <div
          className={styles.backgroundImage}
          style={{ backgroundImage: 'url(/images/rooms/3.jpg)' }}
        />
      </div>
      <div className="container">
        <div className={cn("row", styles.move_content)}>
          <div className="col-lg-4 col-md-12">
            <h5>Contacts</h5>
            <ul>
              <li>
                Baker Street 567, Los Angeles 11023
                <br />
                California - US
                <br />
                <br />
              </li>
              <li>
                <strong>
                  <a href="#0">info@Paradisehotel.com</a>
                </strong>
              </li>
              <li>
                <strong>
                  <a href="#0">+434 43242232</a>
                </strong>
              </li>
            </ul>
            <div className={styles.social}>
              <ul>
                <li>
                  <a href="#0">
                    <i className="bi bi-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i className="bi bi-whatsapp" />
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i className="bi bi-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i className="bi bi-twitter-x" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 ms-lg-auto">
            <h5>Explore</h5>
            <div className={styles.footer_links}>
              <ul>
                <li>
                  <Link href="index.html">Home</Link>
                </li>
                <li>
                  <Link href="#">About Us</Link>
                </li>
                <li>
                  <Link href="#">Rooms &amp; Suites</Link>
                </li>
                <li>
                  <Link href="#">News &amp; Events</Link>
                </li>
                <li>
                  <Link href="#">Contacts</Link>
                </li>
                <li>
                  <Link href="#">Terms and Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div id="newsletter">
              <h5>Newsletter</h5>
              <div id="message-newsletter" />
              <form
                method="post"
                action="#"
                name="newsletter_form"
              >
                <div className={cn("form-group", styles.formGroup)}>
                  <input
                    type="email"
                    name="email_newsletter"
                    className={cn("form-control", styles.formControl)}
                    placeholder="Your email"
                  />
                  <button type="submit" className={styles.submitNewsletter} >
                    <i className="bi bi-send" />
                  </button>
                </div>
              </form>
              <p>
                Receive latest offers and promos without spam. You can cancel
                anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copy}>
        <div className="container">
          © Paradise - by <a href="#">Ansonika</a>
        </div>
      </div>
    </footer>
  );
};
