import "./globals.css";

import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <Navbar />
        <div style={{ paddingTop: "4rem" }}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
