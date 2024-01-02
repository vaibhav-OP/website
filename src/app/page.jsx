import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./page.module.css";
import RESUME_DATA from "@/src/data/resume-data";
import {
  Developments,
  Services,
  Applications,
  Contacts,
} from "@/src/components/Sections";

export default function Home() {
  return (
    <div className={styles.main}>
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
                  className={styles.frameworks_links}>
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
      <div className={styles.tech_wrapper}>
        <h3>TECHNOLOGIES I USE</h3>
        <Developments />
        <Applications />
        <Services />
      </div>
    </div>
  );
}
