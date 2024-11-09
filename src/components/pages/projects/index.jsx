// import Project from "./project";
import Project from "./project";
import styles from "./project.module.css";
import Project1 from "../../assets/imgs/project1.png";
import Project2 from "../../assets/imgs/project2.png";
import Project3 from "../../assets/imgs/project3.png";

export default function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
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
          projectTitle="Nexcent"
          projectDescription="Coding dojo from Senai"
          projectLenguages="React.js, Module.CSS"
          projectImg={Project1}
          projectAlt={"Nexcent Image"}
          projectButton={"Live <~>"}
          projectHref={"https://coding-dojo-ruddy.vercel.app/"}
        />
        <Project
          projectTitle="R&R Funilaria e Pintura"
          projectDescription="Website prototype"
          projectLenguages="HTML, CSS, JS"
          projectImg={Project2}
          projectAlt={"R&R Image"}
          projectButton={"Live <~>"}
          projectHref={"https://rr-funilaria.vercel.app/"}
        />
        <Project
          projectTitle="Portifolio"
          projectDescription="My first portifiolio"
          projectLenguages="HTML, CSS, JS"
          projectImg={Project3}
          projectAlt={"Portifolio Image"}
          projectButton={"Live <~>"}
          projectHref={"https://portifolio-coral-five.vercel.app/"}
        />
      </div>
    </section>
  );
}
