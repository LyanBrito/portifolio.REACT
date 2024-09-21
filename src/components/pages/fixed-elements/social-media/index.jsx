import DribbleLogo from "../../../assets/svg/dribble-logo";
import FigmaLogo from "../../../assets/svg/figma-logo";
import GitHubLogo from "../../../assets/svg/github-logo";
import styles from "./media.module.css";

export default function SocialMedia() {
  return (
    <div className={styles.socialContainer}>
      <div className={styles.line}></div>
      <a href="">{GitHubLogo}</a>
      <a href="">{DribbleLogo}</a>
      <a href="">{FigmaLogo}</a>
    </div>
  );
}
