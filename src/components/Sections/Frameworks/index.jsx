import Image from "next/image";

import styles from "../sections.module.css";
import RESUME_DATA from "@/src/data/resume-data";

const frameworkList = RESUME_DATA.frameworks.map(framework => (
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

export default function Frameworks() {
  return (
    <section>
      <h5>Frameworks</h5>
      <div className={styles.button_wrapper}>{frameworkList}</div>
    </section>
  );
}
