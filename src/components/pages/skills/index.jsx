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
        <img src={SkillsImg} alt="" />
        <div className={styles.skills}>
          <div className={styles.skill}>
            <h6>Languages</h6>
            <p>TypeScript Lua Python JavaScript</p>
          </div>
          <div className={styles.skill}>
            <h6>Databases</h6>
            <p>SQLite PostgreSQL Mongo</p>
          </div>
          <div className={styles.skill}>
            <h6>Other</h6>
            <p>HTML CSS EJS SCSS REST Jinja</p>
          </div>
          <div className={styles.skill}>
            <h6>Tools</h6>
            <p>VSCode Neovim Linux Figma XFCE Arch Git Font Awesome</p>
          </div>
          <div className={styles.skill}>
            <h6>Frameworks</h6>
            <p>React Vue Disnake Discord.js Flask Express.js</p>
          </div>
        </div>
      </div>
    </section>
  );
}
