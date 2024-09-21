import BottomArrow from "../../assets/img/arrow-bottom.svg"
import Logo from "../../assets/img/header-logo.svg"
import styles from "./header.module.css";

export default function HeaderPage() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerTitle}>
        <img src={Logo} alt="header-logo" />
        <p>Elias</p>
      </div>
      <nav className={styles.navBar}>
        <a href="#"><span>#</span>home</a>
        <a href="#"><span>#</span>works</a>
        <a href="#"><span>#</span>about-me</a>
        <a href="#"><span>#</span>contacts</a>
        <div className={styles.langContainer}>
            <p>EN</p>
            <img src={BottomArrow} alt="bottom-arrow" />
        </div>
      </nav>
    </div>
  );
}
