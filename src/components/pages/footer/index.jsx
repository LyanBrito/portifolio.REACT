import styles from "./footer.module.css";
import GithubLogo from "../../assets/svg/github-logo";
import FigmaLogo from "../../assets/svg/figma-logo";
import DiscordLogo from "../../assets/svg/discord-icon";
import Logo from "../../assets/svg/logo";

export default function Footer() {
  return (
    <footer>
      <section>
        <div className={styles.footerSignature}>
          <div className={styles.footerName}>
            <div className={styles.footerTitle}>
              {Logo}
              <p>Lyan Brito</p>
            </div>
            <p>elias@elias-dev.ml</p>
          </div>
          <p>Web designer and front-end developer</p>
        </div>
        <div className={styles.footerMedia}>
          <h1>Media</h1>
          <div className={styles.mediaContainer}>
            <a target="_blank" href="https://github.com/LyanBrito">{GithubLogo}</a>
            <a target="_blank" href="https://www.figma.com/@lyanbrito">{FigmaLogo}</a>
            <a target="_blank" href="https://discord.gg/tMUWzxH2Qg">{DiscordLogo}</a>
          </div>
        </div>
      </section>
      <p>© Copyright 2022. Made by Elias</p>
    </footer>
  );
}
