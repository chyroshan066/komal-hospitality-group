import localFont from "next/font/local";

export const caveat = localFont({
  src: [
    {
      path: "../../public/fonts/caveat/Caveat-Regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../../public/fonts/caveat/Caveat-500.woff2",
      weight: "500",
      style: "normal"
    },
  ],
  display: 'swap',
  variable: '--font-caveat'
});

export const montserrat = localFont({
  src: [
    {
      path: "../../public/fonts/montserrat/Montserrat-300.woff2",
      weight: "300",
      style: "normal"
    },
    {
      path: "../../public/fonts/montserrat/Montserrat-Regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../../public/fonts/montserrat/Montserrat-500.woff2",
      weight: "500",
      style: "normal"
    },
    {
      path: "../../public/fonts/montserrat/Montserrat-600.woff2",
      weight: "600",
      style: "normal"
    },
    {
      path: "../../public/fonts/montserrat/Montserrat-700.woff2",
      weight: "700",
      style: "normal"
    },
  ],
  display: 'swap',
  variable: '--font-montserrat'
});

export const lora = localFont({
  src: [
    {
      path: "../../public/fonts/lora/Lora-Italic-Regular.woff2",
      weight: "400",
      style: "italic"
    },
    {
      path: "../../public/fonts/lora/Lora-Italic-500.woff2",
      weight: "500",
      style: "italic"
    },
  ],
  display: 'swap',
  variable: '--font-lora'
});