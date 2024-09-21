import clsx from "clsx";
import styles from "./index.module.scss";

export const Card = ({ type }: { type: "1" | "2" }) => {
  const cartClass = clsx(
    type === "1" && ["card-01", styles.cart01],
    type === "2" && ["card-02", styles.cart02]
  );

  return (
    <div className={cartClass}>
      <img
        className={clsx("photo img-fill")}
        src="/public/grid-assets/rome/1.jpg"
        alt=""
        width="1724"
        height="2218"
      />
      <h2 className={clsx("title")}>Basilica di San Pietro</h2>
      <p className={clsx("subtitle")}>サン・ピエトロ大聖堂</p>
      <div className={clsx("avatar", styles.avatar)}>
        <img
          src="/public/grid-assets/avatar/1.jpg"
          alt="account"
          width="32"
          height="32"
        />
      </div>
    </div>
  );
};
