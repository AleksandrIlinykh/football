import styles from "./first-lesson.module.css";
import PageContent from "@/components/page-content";
import PhotoCard from "@/components/photo-card";
import SmallCard from "@/components/photo-card-small";

export default function FirstLesson() {
  return (
    <PageContent>
      <h2 className={styles.header}>Чему вы научитесь</h2>
      <p>
        На занятиях по фристайлу мы обучаем чеканке и трюкам футбольного
        фристайла, а также уделяем внимание работе над техническими навыками
        футболиста и его индивидуальному мастерству на тренировках по технике.
      </p>
      <p calssNames={styles.dda}>dadw</p>
      <div calssNames={styles.skills}>
        <SmallCard
          photoSrc={"/Vector1.png"}
          heading="Дисциплины"
          text="Разностороннее развитие фристайлера:
        Upper (Трюки на шее и голове)
        Lower (Выполнение трюков с чеканки)
        Sitting (трюки с чеканки сидя)"
        />
        <SmallCard
          photoSrc={"/Vector2.png"}
          heading="Совершенствование"
          text="Индивидуальный подход к каждому ученику, отслеживание прогресса и подготовка к соревнованиям"
        />
        <SmallCard
          photoSrc={"/Vector3.png"}
          heading="Футбольная техника"
          text="Обучение чеканке, работа над техническики навыками игрока и развитие его индивидуального мастерства"
        />
      </div>
      <h2 className={styles.header}>Что взять на тренировку</h2>
      <PhotoCard
        photoSrc={"/photo3_1.png"}
        heading="Мяч"
        text={
          <p>
            Ваш главный инструмент. Большинство фристайлеров используют
            профессиональные мячи, преимущественно фирмы Adidas, прославившиеся
            своим зацепом и удобством для любого стиля. Если у Вас нет
            профессионального, для начала подойдёт любой футбольный мяч
          </p>
        }
      />
      <PhotoCard
        photoSrc={"/photo3_2.png"}
        heading="Спортивная одежда и обувь"
        text={
          <p>
            Берите с собой спортивную одежду и обувь, в которой удобно работать
            с мячом - желательно с гладкой подошвой. Впоследствии Вы подберете
            наиболее удобную обувь для занятий, исходя из личного опыта и совета
            опытных фристайлеров
          </p>
        }
      />
      <PhotoCard
        photoSrc={"/photo3_3.png"}
        heading="Вода"
        text={
          <p>
            Полноценная тренировка никогда не обойдётся без бутылки воды. Во
            время занятий очень важно пополнять водный запас для наиболее
            продуктивной работы
          </p>
        }
      />
      <button>Записаться</button>
    </PageContent>
  );
}
