import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
// import { Merriweather } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Showcase of my work and interests",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

// const merriweather = Merriweather({
//   subsets: ["latin"],
//   weight: ["300", "400", "700"],
//   display: "swap",
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="min-h-screen bg-white text-gray-900">
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
