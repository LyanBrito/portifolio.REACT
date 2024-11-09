import styles from "./project.module.css";

export default function Project({
  projectTitle,
  projectDescription,
  projectAlt,
  projectLenguages,
  projectImg, projectButton,
  projectHref }) {
  return (
    <div className={styles.project}>
      <img src={projectImg} alt={projectAlt} />
      <p>{projectLenguages}</p>
      <div className={styles.projectName}>
        <h5>{projectTitle}</h5>
        <p>{projectDescription}</p>
        <a target="_blank" href={projectHref}>{projectButton}</a>
      </div>
    </div>
  );
}
