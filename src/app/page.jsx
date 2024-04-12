import React from "react";

import HeroSection from "@/src/components/Hero";
import TechnologySection from "@/src/components/Technology";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <HeroSection />
      <TechnologySection />
    </div>
  );
}
