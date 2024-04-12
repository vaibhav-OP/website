import React from "react";
import Link from "next/link";
import Image from "next/image";

import RESUME_DATA from "@/src/data/resume-data";
import { Contacts } from "@/src/components/Hero/Sections";

import styles from "@/src/components/Hero/hero.module.css";

export default function HeroSection() {
  return (
    <div className={styles.hero}>
      <div className={styles.details_container}>
        <h1>{RESUME_DATA.about}</h1>
        <p>
          {RESUME_DATA.summary}

          {RESUME_DATA.shortFrameworks.map(framework => (
            <React.Fragment key={framework.name}>
              <Link
                href={framework.link}
                target="_blank"
                className="frameworks_links">
                {framework.name}
              </Link>{" "}
            </React.Fragment>
          ))}
        </p>
        <Contacts />
      </div>
      <div className={styles.image_wrapper}>
        <Image
          src={RESUME_DATA.avatarUrl}
          alt="avatar"
          width={112}
          height={112}
          placeholder="blur"
        />
      </div>
    </div>
  );
}
