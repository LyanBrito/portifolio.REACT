import DribbleLogo from "../../../assets/svg/dribble-logo";
import FigmaLogo from "../../../assets/svg/figma-logo";
import GitHubLogo from "../../../assets/svg/github-logo";
import styles from "./media.module.css";

export default function SocialMedia() {
  return (
    <div className={styles.socialContainer}>
      <div className={styles.line}></div>
      <a target="_blank" href="https://github.com/LyanBrito">{GitHubLogo}</a>
      <a target="_blank" href="https://dribbble.com/lyanbrito">{DribbleLogo}</a>
      <a target="_blank" href="https://www.figma.com/@lyanbrito">{FigmaLogo}</a>
    </div>
  );
}
