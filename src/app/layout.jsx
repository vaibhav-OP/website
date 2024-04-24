import "./globals.css";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

export const metadata = {
  title: "Self taught Full-stack web developer",
  description:
    "Hi there, my name is Vaibhav Dwivedi, I am from India and I am a self taught web developer.",
};

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
