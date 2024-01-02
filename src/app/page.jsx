import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./page.module.css";
import RESUME_DATA from "@/src/data/resume-data";
import { Developments, Services, Applications } from "@/src/components/Sections";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.hero}>
        <div>
          <h1>{RESUME_DATA.about}</h1>
          <p>
            {RESUME_DATA.summary}

            {RESUME_DATA.shortFrameworks.map(framework => (
              <React.Fragment key={framework.name}>
                <Link href={framework.link} target="_blank">
                  {framework.name}
                </Link>{" "}
              </React.Fragment>
            ))}
          </p>
        </div>
        <div className={styles.image_wrapper}>
          <Image
            src={RESUME_DATA.avatarUrl}
            alt="avatar"
            width={100}
            height={100}
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
