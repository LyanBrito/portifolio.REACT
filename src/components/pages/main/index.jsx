import styles from "./main.module.css";
import HeroImg from "../../assets/svg/hero-img.svg";

export default function HeroPage() {
  return (
    <main className={styles.heroContainer}>
      <section className={styles.heroText}>
        <h1>
          Elias is a <span>web designer </span>
          and
          <span> front-end developer</span>
        </h1>
        <p>He crafts responsive websites where technologies meet creativity</p>
        <button>Contact me!!</button>
      </section>
      <section className={styles.heroImage}>
        <img src={HeroImg} alt="hero-img" />
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
