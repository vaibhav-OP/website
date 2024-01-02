import Link from "next/link";
import Image from "next/image";

import styles from "./contact.module.css";
import RESUME_DATA from "@/src/data/resume-data";

const contactLists = RESUME_DATA.contacts.map(contact => (
  <Link
    className={styles.btn_wrapper}
    href={contact.href}
    target="_blank"
    key={contact.name}>
    <Image src={contact.icon} width={16} height={16} />
  </Link>
));
export default function Contacts() {
  return <div className={styles.contact_wrapper}>{contactLists}</div>;
}
