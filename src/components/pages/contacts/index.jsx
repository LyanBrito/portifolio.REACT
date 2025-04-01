import styles from "./contacts.module.css";
import GitHubLogo from "../../assets/svg/github-logo"
import EmailIcon from "../../assets/svg/email-icon"
import Dot2705 from "../fixed-elements/dots/2705";

export default function Contacts() {
  return (
    <section id="contacts" className={styles.contactsContainer}>
      <div className={styles.topSection}>
        <h1>
          <span>#</span>contacts
        </h1>
        <div className={styles.line}></div>
      </div>
      <div className={styles.contactsText}>
        <p>
          I'm interested in freelance opportunities. However, if you have other
          request or question, don't hesitate to contact me
        </p>
        <div className={styles.contacts}>
          <h6>Message me here</h6>
          <a href="https://github.com/LyanBrito" className={styles.contactOption}>
            <a href="https://github.com/LyanBrito">{GitHubLogo}</a>
            /lyanbrito
          </a>
          <a href="#" className={styles.contactOption}>
            <a href="mailto:lyanbrito613@gmail.com">{EmailIcon}</a>
            lyanbrito613@gmail.com
          </a>
        </div>
      </div>
      <Dot2705 />
    </section>
  );
}
