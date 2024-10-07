// import Project from "./project";
import Project from "./project";
import styles from "./project.module.css";
import Project1 from "../../assets/imgs/project1.png";
import Project2 from "../../assets/imgs/project2.png";
import Project3 from "../../assets/imgs/project3.png";

export default function Projects() {
  return (
    <section className={styles.projectsSection}>
      <div className={styles.topSection}>
        <div className={styles.sectionTitle}>
          <h1>
            <span>#</span>projects
          </h1>
          <div className={styles.line}></div>
        </div>
        <a href="#">{"View All ~~>"}</a>
      </div>
      <div className={styles.projectsContainer}>
        <Project
          projectTitle="ChertNodes"
          projectDescription="Minecraft servers hosting"
          projectLenguages="HTML, CSS"
          projectImg={Project1}
          projectAlt={"Chert Nodes Image"}
          projectButton={"Live <~>"}
        />
        <Project
          projectTitle="ProtectX"
          projectDescription="Discord anti-crash bot"
          projectLenguages="HTML, CSS, Phyton, Flask"
          projectImg={Project2}
          projectAlt={"ProjectX Image"}
          projectButton={"Live <~>"}
        />
        <Project
          projectTitle="Kahoot Answers Viewer"
          projectDescription="Get answers to your kahoot quiz"
          projectLenguages="CSS, Express, Node.js"
          projectImg={Project3}
          projectAlt={"Kahoot! Image"}
          projectButton={"Live <~>"}
        />
      </div>
    </section>
  );
}
