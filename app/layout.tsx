import type { Metadata } from "next";
import { Montserrat, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const clashGrotesk = localFont({
  src: [
    { path: "../assets/fonts/ClashGrotesk/Fonts/ClashGrotesk-Extralight.woff2", weight: "200" },
    { path: "../assets/fonts/ClashGrotesk/Fonts/ClashGrotesk-Light.woff2",      weight: "300" },
    { path: "../assets/fonts/ClashGrotesk/Fonts/ClashGrotesk-Regular.woff2",    weight: "400" },
    { path: "../assets/fonts/ClashGrotesk/Fonts/ClashGrotesk-Medium.woff2",     weight: "500" },
    { path: "../assets/fonts/ClashGrotesk/Fonts/ClashGrotesk-Semibold.woff2",   weight: "600" },
    { path: "../assets/fonts/ClashGrotesk/Fonts/ClashGrotesk-Bold.woff2",       weight: "700" },
  ],
  variable: "--font-clash-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Site name",
  description: "THE BEST WEBSITE EVER",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${montserrat.variable} ${spaceGrotesk.variable} ${clashGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}