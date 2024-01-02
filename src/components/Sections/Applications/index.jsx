import Image from "next/image";

import styles from "../sections.module.css";
import RESUME_DATA from "@/src/data/resume-data";

const applicationsList = RESUME_DATA.applications.map(application => (
  <div className={styles.btn_container} key={application.name}>
    <Image
      src={application.icon}
      width={20}
      height={20}
      className="icon"
      alt={`${application.name} icon`}
    />
    <span>{application.name}</span>
  </div>
));

export default function Services() {
  return (
    <section>
      <h5>Applicaitons</h5>
      <div className={styles.button_wrapper}>{applicationsList}</div>
    </section>
  );
}
