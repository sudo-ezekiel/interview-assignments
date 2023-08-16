"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className={styles.navigation}>
        <div className="">#LIVEINGREECE</div>
        <div className={styles.links}>
          <div>For</div>
          <Link href="/">TALENTS</Link>
          <Link href="/">ENTREPRENEURS</Link>
          <Link href="/">INVESTORS</Link>
          <div className={styles.extraLinks}>
            <Link href="/">Innitiatives</Link>
            <Link href="/">Q&A</Link>
          </div>
        </div>
        <div className={styles.hamburgerLines} onClick={() => setOpen(!open)}>
          <span className={styles.hamburgerLines1}></span>
          <span className={styles.hamburgerLines2}></span>
          <span className={styles.hamburgerLines3}></span>
        </div>
      </div>
      {open && (
        <div className={styles.mobileLinks}>
          <div>For</div>
          <Link href="/">TALENTS</Link>
          <Link href="/">ENTREPRENEURS</Link>
          <Link href="/">INVESTORS</Link>
          <div className={styles.extraLinks}>
            <Link href="/">Innitiatives</Link>
            <Link href="/">Q&A</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
