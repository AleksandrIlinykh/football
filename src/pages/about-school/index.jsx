import InfoCard from "@/components/info-card";
import styles from "./about-school.module.css";
import PageContent from "@/components/page-content";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/map"), { ssr: false });

export default function AboutSchool() {
  return (
    <PageContent>
      <h2 className={styles.header}>о нашей школе</h2>
      <p className={styles.locationInfo}>
        Мы находимся по адресу: <br /> г. Екатеринбург <br /> Куйбышева 32а к1,
        ДС “Снежинка”
      </p>
      <section className={styles.info}>
        <div className={styles.left}>
          <h3>Стоимость занятий</h3>
          <InfoCard heading="Первая тренировка" text="Бесплатно" />
          <InfoCard heading="Разовое посещение" text="500 рублей" />
          <InfoCard
            heading="Абонемент на месяц"
            text="3000 рублей (2 раза в неделю)"
          />
        </div>
        <div className={styles.left}>
          <h3>Расписание</h3>
          <InfoCard heading="Суббота:" text="" />
          <InfoCard heading="Воскресенье:" text="" />
        </div>
      </section>
      <div className={styles.mapContainer}>
        <Map />
      </div>
      <button>Записаться</button>
    </PageContent>
  );
}
