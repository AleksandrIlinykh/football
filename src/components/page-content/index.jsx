import styles from "./page-content.module.css";
import Navigation from "../navigation";

export default function PageContent({ children }) {
  return (
    <section className={styles.page}>
      <Navigation />
      <main className={styles.content}>{children}</main>
    </section>
  );
}
