"use client";

import { useEffect } from "react";

export const Booking = () => {
  useEffect(() => {
    // We check if easepick is available on the window object
    const initEasepick = () => {
      // @ts-ignore
      if (typeof easepick !== "undefined") {
        // @ts-ignore
        const DateTime = easepick.DateTime;

        const bookedDates = [
          ["2023-09-01", "2023-09-04"],
          "2023-09-07",
          ["2023-10-11", "2023-10-17"],
        ].map((d) => {
          if (Array.isArray(d)) {
            const start = new DateTime(d[0], "YYYY-MM-DD");
            const end = new DateTime(d[1], "YYYY-MM-DD");
            return [start, end];
          }
          return new DateTime(d, "YYYY-MM-DD");
        });

        // @ts-ignore
        new easepick.create({
          element: document.getElementById("date_booking"),
          css: [
            "https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css",
            "/css/daterangepicker_v2.css",
          ],
          lang: "en-EN",
          format: "DD/MM/YYYY",
          calendars: 2,
          grid: 2,
          zIndex: 10,
          inline: true,
          plugins: ["LockPlugin", "RangePlugin"],
          RangePlugin: {
            tooltipNumber(num: number) {
              return num - 1;
            },
            locale: { one: "night", other: "nights" },
          },
          LockPlugin: {
            minDate: new Date(),
            minDays: 1,
            inseparable: false,
            filter(date: any) {
              return bookedDates.some((d) => {
                if (Array.isArray(d)) {
                  return date.isBetween(d[0], d[1], "[]");
                }
                return date.isSame(d, "day");
              });
            },
          },
        });
      }
    };

    // Small delay to ensure scripts are fully parsed
    const timer = setTimeout(initEasepick, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container margin_120_95" id="booking_section">
      <div className="row justify-content-between">
        <div className="col-xl-4">
          <div data-cue="slideInUp">
            <div className="title">
              <small>Paradise Hotel</small>
              <h2>Check Availability</h2>
            </div>
            <p>
              Mea nibh meis philosophia eu. Duis legimus efficiantur ea sea. Id
              placerat tacimates definitionem sea, prima quidam vim no. Duo
              nobis persecuti cu.
            </p>
            <p className="phone_element no_borders">
              <a href="tel://423424234">
                <i className="bi bi-telephone" />
                <span>
                  <em>Info and bookings</em>+41 934 121 1334
                </span>
              </a>
            </p>
          </div>
        </div>
        <div className="col-xl-7">
          <div data-cue="slideInUp" data-delay="200">
            <div className="booking_wrapper">
              <div className="col-12">
                <input
                  type="hidden"
                  id="date_booking"
                  name="date_booking"
                  readOnly
                />
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="custom_select">
                    <select className="wide">
                      <option>Select Room</option>
                      <option>Double Room</option>
                      <option>Deluxe Room</option>
                      <option>Superior Room</option>
                      <option>Junior Suite</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-6">
                      <div className="qty-buttons mb-3 version_2">
                        <input
                          type="button"
                          value="+"
                          className="qtyplus"
                          name="adults_booking"
                        />
                        <input
                          type="text"
                          name="adults_booking"
                          id="adults_booking"
                          defaultValue="Adult"
                          className="qty form-control"
                          placeholder="Adults"
                        />
                        <input
                          type="button"
                          value="-"
                          className="qtyminus"
                          name="adults_booking"
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="mb-3 qty-buttons mb-3 version_2">
                        <input
                          type="button"
                          value="+"
                          className="qtyplus"
                          name="childs_booking"
                        />
                        <input
                          type="text"
                          name="childs_booking"
                          id="childs_booking"
                          defaultValue="Child"
                          className="qty form-control"
                          placeholder="Childs"
                        />
                        <input
                          type="button"
                          value="-"
                          className="qtyminus"
                          name="childs_booking"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-end mt-4">
              <a href="#0" className="btn_1 outline">
                Book Now
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
