"use client"

import Link from "next/link";
import { useScrollPosition } from "./useScrollPosition";

import styles from "./navbar.module.css";
import { useState } from "react";

export default function Navbar() {
    const scrollPosition = useScrollPosition();
    const [scrolled, setScolled] = useState(false);

    const changeNavbar = () =>{
        if(scrollPosition > 1) {
            setScolled(true);
        } else {
            setScolled(false);
        }
    }

    if(typeof window !== "undefined") window.addEventListener('scroll', changeNavbar);

    return <nav className={styles.navbar+" "+ (scrolled ? styles.active : "")}>
        <h3><Link href="/" style={{ outline: "none"}}>Vaibhav Dwivedi</Link></h3>
    </nav>
}
