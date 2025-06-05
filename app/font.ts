import { Work_Sans } from "next/font/google";

export const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});