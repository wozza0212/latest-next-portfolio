import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "./navbar.module.css";

const NavBar = () => {
  return (
    <nav className={styles["navbar"]}>
      <ul className={styles['nav-list']}>
      <Image  className={styles['logo']}src="/vercel.svg" alt="Vercel Logo" width={100} height={24} />
        <li className={styles['left']}>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/">Projects</Link>
        </li>
        <li>
          <Link href="/">Blog</Link>
        </li>
        <li className={styles['end']}>
          <Link href="/">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
