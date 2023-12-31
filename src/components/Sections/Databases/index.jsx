import Image from "next/image";

import styles from "../sections.module.css";
import RESUME_DATA from "@/src/data/resume-data";

const databasesList = RESUME_DATA.databases.map(database => (
  <div className={styles.btn_container} key={database.name}>
    <Image
      src={database.icon}
      width={20}
      height={20}
      className="icon"
      alt={`${database.name} icon`}
    />
    <span>{database.name}</span>
  </div>
));

export default function Databases() {
  return (
    <section>
      <h5>Database</h5>
      <div className={styles.button_wrapper}>{databasesList}</div>
    </section>
  );
}
