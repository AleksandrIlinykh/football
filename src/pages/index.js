import styles from "./index.module.css";
import { Inter } from "next/font/google";
import Navigation from "@/components/navigation";
import classNames from "classnames";
import PageContent from "@/components/page-content";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <PageContent>
      <section className={styles.mainImgContainer}>
        <div className={styles.mainImgTexts}>
          <h1>Hightrick</h1>
          <p className={styles.p}>Школа фристайла и футбольной техники</p>
        </div>

        <div className={styles.mainImg}>
          <img className={styles.img} src="/main.png" alt="чел с мячём" />
        </div>
      </section>
      <h2>
        Что такое футбольный <br /> фристайл
      </h2>
      <p className={styles.bottomParagraph}>
        Футбольный фристайл - красивый и зрелищный вид спорта, суть которого
        заключается в выполнении различных трюков с футбольным мячом. Для этого
        не нужно иметь талант.
      </p>
      <div className={styles.balls}>
        <img className={styles.img} src="/balls.png" alt="чисто мячи" />
      </div>
      <button>Записаться</button>
    </PageContent>
  );
}
