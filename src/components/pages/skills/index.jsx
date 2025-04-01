import SkillsImg from "../../assets/svg/skills-img.svg";
import styles from "./skills.module.css";

export default function Skills() {
  return (
    <section className={styles.skillSection}>
      <div className={styles.topSection}>
        <h1>
          <span>#</span>skills
        </h1>
        <div className={styles.line}></div>
      </div>
      <div className={styles.skillscontainer}>
        <img src={SkillsImg} alt="white squares, white dots and purple page logo" />
        <div className={styles.skills}>
          <div className={styles.skill}>
            <h6>Languages</h6>
            <p>TypeScript Java Python JavaScript</p>
          </div>
          <div className={styles.skill}>
            <h6>Databases</h6>
            <p>MySQL PostgreSQL Mongo</p>
          </div>
          <div className={styles.skill}>
            <h6>Others</h6>
            <p>HTML SCSS REST</p>
          </div>
          <div className={styles.skill}>
            <h6>Tools</h6>
            <p>VSCode IntelliJ Figma Notion Git WebStorm</p>
          </div>
          <div className={styles.skill}>
            <h6>Frameworks</h6>
            <p>React Tailwind Less Astro Express.js</p>
          </div>
        </div>
      </div>
    </section>
  );
}
