import InfoCard from "@/components/info-card";
import styles from "./index.module.css";
import Navigation from "@/components/navigation";
import PageContent from "@/components/page-content";
import classNames from "classnames";

export default function AboutSchool() {
  return (
    <PageContent>
      <h2>о нашей школе</h2>
      <p>
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
        <div className={styles.right}>
          <h3>Расписание</h3>
        </div>
      </section>
      <button>Записаться</button>
    </PageContent>
  );
}
