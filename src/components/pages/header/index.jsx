import Logo from "../../assets/svg/logo";
import styles from "./header.module.css";
import BottomArrow from "../../assets/svg/bottomArrow";
import { useState } from "react";

export default function HeaderPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  let lastScrollTop = 0;
  window.onscroll = () => {
    const header = document.getElementById("header");
    header.style.top = window.scrollY > lastScrollTop ? "-80px" : "0px";
    lastScrollTop = window.scrollY;
  };

  return (
    <header id="header" className={styles.headerContainer}>
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
          {isDropdownOpen && (
            <div className={styles.dropdownContainer}>
              <a>PT</a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
