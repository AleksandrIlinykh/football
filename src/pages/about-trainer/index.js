import InfoCard from "@/components/info-card";
import styles from "./about-trainer.module.css";
import PageContent from "@/components/page-content";
import PhotoCard from "@/components/photo-card";

export default function Home() {
  return (
    <PageContent>
      <h2 className={styles.header}>наш Тренер</h2>
      <PhotoCard
        photoSrc={"/master.png"}
        heading="О тренере"
        text={`Главным тренером нашей школы является российский фристайлер,
            участник церемонии открытия Кубка Конфедерации 2017, чемпион России
            по мини-футболу и четырехкратный призер соревнований по футбольному
            фристайлу среди стран СНГ - Фаридонов Ришат. Тренерский стаж: 6 лет`}
      />
      <img className={styles.video} src="/video.png" alt="" />
      <p>
        Так же у Вас есть возможность записаться на индивидуальные занятия . В
        данном случае ведётся полный контроль за прогрессом и успехами ученика.
        Все вопросы решаются в индивидуальном порядке, что очень полезно , если
        необходимо подготовить футболиста в короткие сроки или ему просто
        некомфортно заниматься в группе. По любым интересующим Вас вопросам Вы
        можете обращаться по номеру: 8(912)-272-04-09 - Ришат
      </p>
      <button>Записаться</button>
    </PageContent>
  );
}
