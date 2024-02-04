import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "./navbar.module.css";

const NavBar = () => {
  return (
    <nav className={styles["navbar"]}>
      <ul className={styles["nav-list"]}>
        <Image
          className={styles["logo"]}
          src="/vercel.svg"
          alt="Vercel Logo"
          width={100}
          height={24}
        />
        <Link href="/" className={styles["left"]}>
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/projects">
          <li>Projects</li>
        </Link>
        <Link href="/blog">
          <li>Blog</li>
        </Link>
        <Link href="/contact" className={styles["end"]}>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
