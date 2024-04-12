import {
  Services,
  Applications,
  Developments,
} from "@/src/components/Technology/Sections";

import styles from "./technology.module.css";

export default function TechnologySection() {
  return (
    <div className={styles.tech_wrapper}>
      <h3>TECHNOLOGIES I USE</h3>
      <Developments />
      <Applications />
      <Services />
    </div>
  );
}
