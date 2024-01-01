import Image from "next/image";

import styles from "../sections.module.css";
import RESUME_DATA from "@/src/data/resume-data";

const developmentsList = RESUME_DATA.development.map(framework => (
  <div className={styles.btn_container} key={framework.name}>
    <Image
      src={framework.icon}
      width={20}
      height={20}
      className="icon"
      alt={`${framework.name} icon`}
    />
    <span>{framework.name}</span>
  </div>
));

export default function Developments() {
  return (
    <section>
      <h5>Development</h5>
      <div className={styles.button_wrapper}>{developmentsList}</div>
    </section>
  );
}
