import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Footer from "./components/portfolio/Footer";

import Navbar from "./components/portfolio/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "David Safar Cano",
  description: "Desarrollador full stack en ibiza",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f5f5f5]`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
