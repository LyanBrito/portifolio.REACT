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
            I'm a developer passionate about technology and always looking for new challenges. 
            Throughout my journey, I gained experience in several areas, from front-end development to
            modern frameworks and agile methodologies. Based on personal study and free courses at SENAI.
            
            I started a technical systems development course at SENAI Suíço-Brasileiro, where I am further 
            enhancing my skills and knowledge. I am constantly looking to improve and expand my expertise 
            in the world of technology.
          </p>
          <button>{"Read More ->"}</button>
        </div> 
      </div>
        <img src={AboutMeImg} alt="white man covering his face with black jacket" />
        
    </section>
  );
}
