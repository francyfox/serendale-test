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
  src: "./assets/fonts/ClashGrotesk/Fonts/ClashGrotesk-Variable.woff2",
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
    <html lang="en">
      <body
        className={`${montserrat.variable} ${spaceGrotesk.variable} ${clashGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}