"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "./navbar.module.css";
import RESUME_DATA from "@/src/data/resume-data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80 ? true : false);

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [])

  return (
    <nav className={styles.navbar + " " + (scrolled ? styles.active : "")}>
      <h3>
        <Link href="/" style={{ outline: "none" }}>
          {RESUME_DATA.name}
        </Link>
      </h3>
    </nav>
  );
}
