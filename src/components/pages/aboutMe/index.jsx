import styles from "./aboutMe.module.css";
import AboutMeImg from "../../assets/imgs/aboutMe-img.png";

export default function AboutMe() {
  return (
    <section id="about-me" className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
      <div className={styles.topSection}>
        <h1>
          <span>#</span>about-me
        </h1>
        <div className={styles.line}></div>
      </div>
        <div className={styles.aboutMe}>
          <p>
            Hello, i’m Elias! 
            <br />
            <br />
             I’m a self-taught front-end developer based in
            Kyiv, Ukraine. I can develop responsive websites from scratch and
            raise them into modern user-friendly web experiences. 
            <br />
            <br />
             Transforming
            my creativity and knowledge into a websites has been my passion for
            over a year. I have been helping various clients to establish their
            presence online. I always strive to learn about the newest
            technologies and frameworks.
          </p>
          <button>{"Read More ->"}</button>
        </div> 
      </div>
        <img src={AboutMeImg} alt="white man covering his face with black jacket" />
        
    </section>
  );
}
