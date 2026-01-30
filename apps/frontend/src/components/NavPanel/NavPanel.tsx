"use client";

import { cn } from "@/utils/clsx";
import styles from "./NavPanel.module.css";
import Image from "next/image";
import Link from "next/link";
import { OnToggleNav } from "@/types";
import { useEffect, useRef, useState } from "react";

interface NavPanelProps extends OnToggleNav {
  isOpen: boolean;
}

export const NavPanel = ({ isOpen, onToggleNav }: NavPanelProps) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const navPanelRef = useRef<HTMLDivElement>(null);

  const handleSubMenuClick = (menuName: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveMenu(menuName);
  };

  const handleBackClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveMenu(null);
  };

  const handleCloseClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveMenu(null);
    onToggleNav();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveMenu(null);
    onToggleNav();
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navPanelRef.current &&
        !navPanelRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        setActiveMenu(null);
        onToggleNav();
      }
    };

    // Close on escape key press
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setActiveMenu(null);
        onToggleNav();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);
      // Prevent scrolling when menu is open
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.classList.add("no_scroll");
    } else {
      document.body.style.paddingRight = "";
      document.body.classList.remove("no_scroll");
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.paddingRight = "";
      document.body.classList.remove("no_scroll");
    };
  }, [isOpen, onToggleNav]);

  return (
    <>
      {isOpen && (
        <div
          className={styles.overlay}
          onClick={handleOverlayClick}
          role="button"
          tabIndex={0}
          aria-label="Close menu"
        />
      )}

      <div
        className={cn(styles.nav_panel, isOpen && styles.show)}
        ref={navPanelRef}
      >
        <Link
          href="#0"
          className={cn("open_close_nav_panel", styles.closebt)}
          onClick={handleCloseClick}
        >
          <i className="bi bi-x" />
        </Link>
        <div className={styles.logo_panel}>
          <Image src="/images/logo_sticky.png" width={135} height={45} alt="" />
        </div>
        <div className={styles.sidebarNavigation}>
          <nav>
            <ul
              className={cn(
                !activeMenu && styles.active,
                activeMenu && styles.hidden,
              )}
            >
              <li className={styles.parent}>
                <Link href="#0" onClick={(e) => handleSubMenuClick("home", e)}>
                  Home
                </Link>
              </li>
              <li className={styles.parent}>
                <Link href="#0" onClick={(e) => handleSubMenuClick("rooms", e)}>
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link href="#" onClick={(e) => handleCloseClick(e)}>
                  About
                </Link>
              </li>
              <li>
                <Link href="#" onClick={(e) => handleCloseClick(e)}>
                  Restaurant
                </Link>
              </li>
              <li>
                <Link href="#" onClick={(e) => handleCloseClick(e)}>
                  News & events
                </Link>
              </li>
              <li>
                <Link href="#" onClick={(e) => handleCloseClick(e)}>
                  Contact
                </Link>
              </li>
              <li className={styles.parent}>
                <Link href="#0" onClick={(e) => handleSubMenuClick("other", e)}>
                  Other Pages
                </Link>
              </li>
            </ul>

            {/* Home Sub-menu */}
            <ul
              className={cn(
                activeMenu === "home" && styles.active,
                activeMenu !== "home" && styles.hidden,
              )}
            >
              <li className={styles.back}>
                <Link href="#0" onClick={handleBackClick}>
                  Back
                </Link>
              </li>
              <li>
                <Link href="index.html" onClick={(e) => handleCloseClick(e)}>
                  Home Video Bg
                </Link>
              </li>
              <li>
                <Link href="#" onClick={(e) => handleCloseClick(e)}>
                  Home Carousel
                </Link>
              </li>
              <li>
                <Link href="#" onClick={(e) => handleCloseClick(e)}>
                  Home FlexSlider
                </Link>
              </li>
              <li>
                <Link href="#" onClick={(e) => handleCloseClick(e)}>
                  Home Youtube/Vimeo
                </Link>
              </li>
              <li>
                <Link href="#" onClick={(e) => handleCloseClick(e)}>
                  Home Parallax
                </Link>
              </li>
              <li>
                <Link href="#" onClick={(e) => handleCloseClick(e)}>
                  Home Parallax 2
                </Link>
              </li>
              <li>
                <Link href="#" onClick={(e) => handleCloseClick(e)}>
                  Home Working Booking
                </Link>
              </li>
              <li>
                <Link href="#" onClick={(e) => handleCloseClick(e)}>
                  Home Working Booking 2
                </Link>
              </li>
              <li>
                <Link href="#" onClick={(e) => handleCloseClick(e)}>
                  Home Category Hover
                </Link>
              </li>
              <li>
                <Link href="#" onClick={(e) => handleCloseClick(e)}>
                  Home Category Hover 2
                </Link>
              </li>
            </ul>

            {/* Rooms Sub-menu */}
            <ul
              className={cn(
                activeMenu === "rooms" && styles.active,
                activeMenu !== "rooms" && styles.hidden,
              )}
            >
              <li className={styles.back}>
                <Link href="#0" onClick={handleBackClick}>
                  Back
                </Link>
              </li>
              <li>
                <Link href="#" onClick={(e) => handleCloseClick(e)}>
                  Room list 1
                </Link>
              </li>
              <li>
                <Link href="#" onClick={(e) => handleCloseClick(e)}>
                  Room list 2
                </Link>
              </li>
              <li>
                <Link href="#" onClick={(e) => handleCloseClick(e)}>
                  Room list 3
                </Link>
              </li>
              <li>
                <Link href="#" onClick={(e) => handleCloseClick(e)}>
                  Room details
                </Link>
              </li>
              <li>
                <Link href="#" onClick={(e) => handleCloseClick(e)}>
                  Working Booking Request
                </Link>
              </li>
            </ul>

            {/* Other Pages Sub-menu */}
            <ul
              className={cn(
                activeMenu === "other" && styles.active,
                activeMenu !== "other" && styles.hidden,
              )}
            >
              <li className={styles.back}>
                <Link href="#0" onClick={handleBackClick}>
                  Back
                </Link>
              </li>
              <li>
                <Link href="#" onClick={(e) => handleCloseClick(e)}>
                  Error Page
                </Link>
              </li>
              <li>
                <Link href="#" onClick={(e) => handleCloseClick(e)}>
                  Masonry Gallery
                </Link>
              </li>
              <li>
                <Link href="#" onClick={(e) => handleCloseClick(e)}>
                  Menu of the day
                </Link>
              </li>
              <li>
                <Link href="#" onClick={(e) => handleCloseClick(e)}>
                  Modal Advertise
                </Link>
              </li>
              <li>
                <Link href="#" onClick={(e) => handleCloseClick(e)}>
                  GDPR Cookie Bar
                </Link>
              </li>
              <li>
                <Link href="#" onClick={(e) => handleCloseClick(e)}>
                  Coming Soon
                </Link>
              </li>
            </ul>

            <div className={styles.panel_footer}>
              <div className={styles.phone_element}>
                <a href="tel://423424234">
                  <i className="bi bi-telephone" />
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
    </>
  );
};
