import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata, Viewport } from "next";
import "@/styles/vendors.min.css";
import "@/styles/globals.css";
import AnalyticsWrapper from "@/utils/AnalyticsWrapper";
import { caveat, lora, montserrat } from "./fonts";
import Script from "next/script";

export const metadata: Metadata = {
  title: "<website_title>",
  description: "<website_description>",
  keywords: [
    "<search_keyword1>",
    "<search_keyword2>",
    // ..... and so on
  ],
  authors: [{ name: "<website_name>" }],
  creator: "<website_name>",
  publisher: "<website_name>",
  // metadataBase: new URL("https://<domain_name>"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/favicon_io/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon_io/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon_io/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/favicon_io/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        url: "/favicon_io/favicon.ico",
        sizes: "32x32",
      },
    ],
    shortcut: "/favicon_io/favicon.ico",
    apple: "/favicon_io/apple-touch-icon.png",
  },
  manifest: "/favicon_io/site.webmanifest",
  openGraph: {
    title: "<website_title>",
    description: "<website_description>",
    type: "website",
    locale: "en_US",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    siteName: "<website_name>",
    images: [
      {
        url: "/images/preview.webp",
        width: 1200,
        height: 630,
        alt: "<website_name> Preview",
      },
    ],
  },
  category: "<website_category>",
  classification: "<website_classification>",
  referrer: "origin-when-cross-origin",
  applicationName: "<website_name>",
  generator: "Next.js",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify("structured_data_from_constants"),
          }}
        />
      </head>

      <body
        className={`${caveat.variable} ${montserrat.variable} ${lora.className}`}
        suppressHydrationWarning={true}
      >
        {children}
        <AnalyticsWrapper />

        <Script src="/js/common_scripts.js" strategy="afterInteractive" />
        <Script src="/js/common_functions.js" strategy="afterInteractive" />
        <Script src="/js/datepicker_search.js" strategy="afterInteractive" />
        <Script src="/js/datepicker_inline.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
