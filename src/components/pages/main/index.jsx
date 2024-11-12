import styles from "./main.module.css";
import HeroImg from "../../assets/svg/hero-img.svg";

export default function HeroPage() {
  return (
    <main id="main" className={styles.heroContainer}>
      <section className={styles.heroText}>
        <h1>
          Lyan is a <span>web designer </span>
          and
          <span> front-end developer</span>
        </h1>
        <p>He crafts responsive websites where technologies meet creativity</p>
        <a href="#contacts">Contact me!!</a>
      </section>
      <section className={styles.heroImage}>
        <img src={HeroImg} alt="man with black jacket and a gray cap" />
        <div className={styles.status}>
          <div className={styles.statusSigner}></div>
          <p>
            Currently working on <b>Portfolio</b>
          </p>
        </div>
      </section>
    </main>
  );
}
