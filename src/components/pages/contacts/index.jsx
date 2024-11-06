import styles from "./contacts.module.css";
import DiscordIcon from "../../assets/svg/discord-icon"
import EmailIcon from "../../assets/svg/email-icon"
import Dot2705 from "../fixed-elements/dots/2705";

export default function Contacts() {
  return (
    <section className={styles.contactsContainer}>
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
          <a href="#" className={styles.contactOption}>
            <a href="#">{DiscordIcon}</a>
            !Elias#3519
          </a>
          <a href="#" className={styles.contactOption}>
            <a href="#">{EmailIcon}</a>
            elias@elias.me
          </a>
        </div>
      </div>
      <Dot2705 />
    </section>
  );
}
