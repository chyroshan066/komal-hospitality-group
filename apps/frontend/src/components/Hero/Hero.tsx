"use client";

import styles from "./Hero.module.css";
import Link from "next/link";
import { useRef, useState } from "react";
import { Overlay } from "../utility/Overlay/Overlay";
import { cn } from "@/utils/clsx";
import { useAnimationTrigger } from "@/hooks/useAnimationTrigger";
import { HeroTitleHeader } from "../utility/TitleHeader";

export const Hero = () => {
  const [adults, setAdults] = useState<number>(1);
  const [children, setChildren] = useState<number>(0);
  const [dates, setDates] = useState<string>("");
  const heroRef = useRef<HTMLDivElement>(null);
  const isAnimated = useAnimationTrigger();

  // handlers for quantity buttons
  const handleQuantityChange = (
    type: "adults" | "children",
    operation: "increment" | "decrement",
  ) => {
    if (type === "adults") {
      setAdults((prev) =>
        operation === "increment" ? prev + 1 : Math.max(1, prev - 1),
      );
    } else {
      setChildren((prev) =>
        operation === "increment" ? prev + 1 : Math.max(0, prev - 1),
      );
    }
  };

  // search handler
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ dates, adults, children });
    // Implement search logic here
  };

  return (
    <div
      ref={heroRef}
      className={cn(
        "hero full-height jarallax",
        styles.homeSearch,
        styles.hero,
        styles.fullHeight,
      )}
      style={{
        backgroundImage: `url(/images/hero_home_1.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
      data-speed="0.2"
    >
      {/* <img
      className="jarallax-img kenburns-2"
      src="/images/hero_home_1.jpg"
      alt=""
    /> */}
      <Overlay className={isAnimated ? "is-transitioned" : ""}>
        <HeroTitleHeader
          subtitle="Luxury Hotel Experience"
          title="A unique Experience"
          title2="where to stay"
        >
          <div className="row justify-content-center slide-animated three">
            <div className="col-xl-10">
              <form onSubmit={handleSearch}>
                <div className={cn("row g-0", styles.booking_form)}>
                  <div className="col-lg-4 ">
                    <div className={cn("form-group", styles.formGroup)}>
                      <input
                        className="form-control"
                        type="text"
                        name="dates"
                        placeholder="Check in / Check out"
                        value={dates}
                        onChange={(e) => setDates(e.target.value)}
                      />
                      <i className="bi bi-calendar2" />
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 pe-lg-0 pe-sm-1">
                    <div className={cn("qty-buttons", styles.qtyButtons)}>
                      <label>Adults</label>
                      <input
                        type="button"
                        value="+"
                        className="qtyplus"
                        onClick={() =>
                          handleQuantityChange("adults", "increment")
                        }
                      />
                      <input
                        type="text"
                        name="adults"
                        id="adults"
                        value={adults}
                        onChange={(e) => setAdults(Number(e.target.value) || 1)}
                        className="qty form-control"
                      />
                      <input
                        type="button"
                        value="-"
                        className="qtyminus"
                        onClick={() =>
                          handleQuantityChange("adults", "decrement")
                        }
                      />
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 ps-lg-0 ps-sm-1">
                    <div className={cn("qty-buttons", styles.qtyButtons)}>
                      <label>Childs</label>
                      <input
                        type="button"
                        value="+"
                        className="qtyplus"
                        onClick={() =>
                          handleQuantityChange("children", "increment")
                        }
                      />
                      <input
                        type="text"
                        name="childs"
                        id="childs"
                        value={children}
                        onChange={(e) =>
                          setChildren(Number(e.target.value) || 0)
                        }
                        className="qty form-control"
                      />
                      <input
                        type="button"
                        value="-"
                        className="qtyminus"
                        onClick={() =>
                          handleQuantityChange("children", "decrement")
                        }
                      />
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <input
                      type="submit"
                      className={styles.btn_search}
                      value="Search"
                      onClick={handleSearch}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </HeroTitleHeader>
        <div className="mouse_wp slide-animated four">
          <Link href="#first_section" className="btn_scrollto">
            <div className="mouse" />
          </Link>
        </div>
        {/* mouse_wp  */}
      </Overlay>
    </div>
  );
};
