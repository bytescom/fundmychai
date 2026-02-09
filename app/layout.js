import { Manrope } from "next/font/google";
import "./globals.css";
import SessionWrapper from "@/components/SessionWrapper";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

export const fontManrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = {
  title: "Fundmychai",
  description: "Generated for next generation chai lover creator's",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fontManrope.variable}`}>
      <body>
        <SessionWrapper>
          {children}
        </SessionWrapper>

        <Analytics />

        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
