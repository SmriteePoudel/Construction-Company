import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BuildRight Construction - Building Your Dreams Into Reality",
  description:
    "Professional construction services for residential and commercial projects. Quality craftsmanship, expert team, and exceptional results since 1995.",
  keywords:
    "construction, building, renovation, remodeling, residential, commercial, contractor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-pink-50 text-black min-h-screen font-sans">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
