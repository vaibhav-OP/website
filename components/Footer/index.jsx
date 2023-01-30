import Link from "next/link";

import styles from "./footer.module.css";

export default function Footer() {
    return <footer className={styles.footer}>
        <span><Link href='https://github.com/vaibhav-OP/website' target="_blank">This project is open-source on github.</Link></span>
    </footer>
}