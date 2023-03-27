import styles from './index.module.css';
import { Inter } from 'next/font/google';
import Navigation from '@/components/navigation';
import classNames from 'classnames';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <section className={styles.page}>
      <Navigation />

      <main className={styles.content}>
        <section className={styles.mainImgContainer}>
          <div className={styles.mainImgTexts}>
            <h1 className={styles.h1}>Hightrick</h1>
            <p className={styles.p}>Школа фристайла и футбольной техники</p>
          </div>

          <div className={styles.mainImg}>
            <img className={styles.img} src="/main.png" alt="чел с мячём" />
          </div>
        </section>

        <h2 className={classNames(styles.h2, styles.subHeader)}>
          Что такое футбольный <br /> фристайл
        </h2>
        <p className={classNames(styles.p, styles.bottomParagraph)}>
          Футбольный фристайл - красивый и зрелищный вид спорта, суть которого
          заключается в выполнении различных трюков с футбольным мячом. Для
          этого не нужно иметь талант.
        </p>
        <div className={styles.balls}>
          <img className={styles.img} src="/balls.png" alt="чисто мячи" />
        </div>

        <button>Записаться</button>
      </main>
    </section>
  );
}
