import Logo from "../../assets/svg/logo";
import styles from "./header.module.css";
import BottomArrow from "../../assets/svg/bottomArrow";
import { useState } from "react";

export default function HeaderPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerTitle}>
        {Logo}
        <p>Lyan Brito</p>
      </div>
      <nav className={styles.navBar}>
        <a href="#main">
          <span>#</span>home
        </a>
        <a href="#projects">
          <span>#</span>works
        </a>
        <a href="#about-me">
          <span>#</span>about-me
        </a>
        <a href="#contacts">
          <span>#</span>contacts
        </a>
        <div
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className={styles.langContainer}
        >
          <a>EN</a>
          {BottomArrow}
        </div>
      </nav>
      {isDropdownOpen && (
        <div className={styles.dropdownContainer}>
          <a>PT</a>
        </div>
      )}
    </div>
  );
}

// select e option -> dropdown nativo sla
