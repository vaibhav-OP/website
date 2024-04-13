"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import PROJECTS_LIST from "./projects";

import styles from "./projects.module.css";

export default function ProjectSection() {
  const [isFull, setIsFull] = useState(false);
  return (
    <div className={styles.projects_wrapper}>
      <h3>Projects</h3>
      <ul
        className={styles.projects_list}
        style={{
          height: !isFull ? 384 : "fit-content",
        }}>
        {PROJECTS_LIST.map(({ name, icon, description, href }, index) => (
          <li key={name + index} className={index % 2 && styles.rev}>
            <div className={styles.detail}>
              <h2>{name}</h2>
              <blockquote>
                <p>{description}</p>
              </blockquote>
              <div>
                <Link target="_blank" href={href}>
                  Visit
                </Link>
              </div>
            </div>
            <figure>
              <Image src={icon} alt={name} loading="lazy" placeholder="blur" />
            </figure>
          </li>
        ))}
      </ul>
      {!isFull && (
        <div className={styles.view_more_container}>
          <button onClick={() => setIsFull(true)}>View More</button>
        </div>
      )}
    </div>
  );
}
