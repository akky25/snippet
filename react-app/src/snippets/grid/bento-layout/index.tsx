import clsx from "clsx";
import styles from "./index.module.scss";

const cardData = [
  {
    title: "Basilica di San Pietro",
    subtitle: "サン・ピエトロ大聖堂",
    avatar: "/public/grid-assets/avatar/1.jpg",
    photo: "/public/grid-assets/rome/1.jpg",
    size: "l",
  },
  {
    title: "Colosseo",
    subtitle: "コロッセオ",
    avatar: "/public/grid-assets/avatar/2.jpg",
    photo: "/public/grid-assets/rome/2.jpg",
    size: "s",
  },
  {
    title: "Fontana di Trevi",
    subtitle: "トレヴィの泉",
    avatar: "/public/grid-assets/avatar/3.jpg",
    photo: "/public/grid-assets/rome/3.jpg",
    size: "m",
  },
  {
    title: "Pantheon",
    subtitle: "パンテオン",
    avatar: "/public/grid-assets/avatar/4.jpg",
    photo: "/public/grid-assets/rome/4.jpg",
    size: "m",
  },
  {
    title: "Piazza di Spagna",
    subtitle: "スペイン広場",
    avatar: "/public/grid-assets/avatar/5.jpg",
    photo: "/public/grid-assets/rome/5.jpg",
    size: "s",
  },
  {
    title: "Piazza Navona",
    subtitle: "ナヴォーナ広場",
    avatar: "/public/grid-assets/avatar/6.jpg",
    photo: "/public/grid-assets/rome/6.jpg",
    size: "l",
  },
  {
    title: "Piazza Venezia",
    subtitle: "ヴェネツィア広場",
    avatar: "/public/grid-assets/avatar/7.jpg",
    photo: "/public/grid-assets/rome/7.jpg",
    size: "s",
  },
  {
    title: "Vaticano",
    subtitle: "バチカン市国",
    avatar: "/public/grid-assets/avatar/8.jpg",
    photo: "/public/grid-assets/rome/8.jpg",
    size: "s",
  },
] as const;

export const BentoLayout = () => {
  return (
    <div className={styles.bento}>
      {cardData.map((data) => (
        <Card key={data.title} {...data} />
      ))}
    </div>
  );
};

type CardProps = {
  title: string;
  subtitle: string;
  avatar: string;
  photo: string;
  size?: "s" | "m" | "l"; // sizeの型は変更しない
};

export const Card = (props: CardProps) => {
  return (
    <div
      className={clsx(
        "card-01",
        styles.cart01,
        clsx(
          props.size === "m" && styles.medium,
          props.size === "l" && styles.large
        )
      )}
    >
      <img
        className={clsx("photo img-fill")}
        src={props.photo}
        alt=""
        width="1724"
        height="2218"
      />
      <h2 className={clsx("title")}>{props.title}</h2>
      <p className={clsx("subtitle")}>{props.subtitle}</p>
      <div className={clsx("avatar", styles.avatar)}>
        <img src={props.avatar} alt="account" width="32" height="32" />
      </div>
    </div>
  );
};
