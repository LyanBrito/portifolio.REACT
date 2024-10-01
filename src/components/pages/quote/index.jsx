import styles from "./quote.module.css";
import Quote from "../../assets/svg/quote";

export default function QuotePage() {
  return (
    <div className={styles.quote}>
      <div className={styles.quoteFrase}>
        {Quote}
        {Quote}
        <p>With great power comes great electricity bill</p>
      </div>
      <p>-Dr. Who</p>
    </div>
  );
}
