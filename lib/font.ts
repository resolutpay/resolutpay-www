import {
  Darker_Grotesque,
  Sora,
  M_PLUS_1,
  Instrument_Sans,
  Lexend,
} from "next/font/google";
import localFont from "next/font/local";

export const darkerGrotesque = Darker_Grotesque({
  variable: "--font-darker-grotesque",
  subsets: ["latin"],
});

export const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const mPlus1 = M_PLUS_1({
  variable: "--font-m-plus-1",
  subsets: ["latin"],
});

export const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

export const canaro = localFont({
  src: [
    {
      path: "../public/fonts/canaro/canaro-extra-bold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/canaro/canaro-extra-bold.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/canaro/canaro-black-italic.woff2",
      weight: "900",
      style: "italic",
    },
    {
      path: "../public/fonts/canaro/canaro-black-italic.woff",
      weight: "900",
      style: "italic",
    },
    {
      path: "../public/fonts/canaro/canaro-thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/canaro/canaro-thin.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/canaro/canaro-thin-italic.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/fonts/canaro/canaro-thin-italic.woff",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/fonts/canaro/canaro-extra-light-italic.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "../public/fonts/canaro/canaro-extra-light-italic.woff",
      weight: "200",
      style: "italic",
    },
    {
      path: "../public/fonts/canaro/canaro-black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/canaro/canaro-black.woff",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/canaro/canaro-medium-italic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/canaro/canaro-medium-italic.woff",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/canaro/canaro-semi-bold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/canaro/canaro-semi-bold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/canaro/canaro-extra-bold-italic.woff2",
      weight: "800",
      style: "italic",
    },
    {
      path: "../public/fonts/canaro/canaro-extra-bold-italic.woff",
      weight: "800",
      style: "italic",
    },
    {
      path: "../public/fonts/canaro/canaro-light-italic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/canaro/canaro-light-italic.woff",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/canaro/canaro-semi-bold-italic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/canaro/canaro-semi-bold-italic.woff",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/canaro/canaro-extra-light.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/canaro/canaro-extra-light.woff",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/canaro/canaro-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/canaro/canaro-medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/canaro/canaro-light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/canaro/canaro-light.woff",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-canaro",
});

export const canaroBook = localFont({
  src: [
    {
      path: "../public/fonts/canaro/canaro-book.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/canaro/canaro-book.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/canaro/canaro-bold-italic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/canaro/canaro-bold-italic.woff",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/canaro/canaro-book-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/canaro/canaro-book-italic.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/canaro/canaro-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/canaro/canaro-bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-canaro-book",
});

export const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});
