import styles from "./project.module.css";

export default function Project({
  projectTitle,
  projectDescription,
  projectAlt,
  projectLenguages,
  projectImg, projectButton }) {
  return (
    <div className={styles.project}>
      <img src={projectImg} alt={projectAlt} />
      <p>{projectLenguages}</p>
      <div className={styles.projectName}>
        <h5>{projectTitle}</h5>
        <p>{projectDescription}</p>
        <button>{projectButton}</button>
      </div>
    </div>
  );
}
