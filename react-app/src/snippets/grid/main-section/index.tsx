import clsx from "clsx";
import styles from "./index.module.css";

export const MainSection = ({
  type,
  className,
  image,
}: {
  type: "1" | "2" | "2-1" | "2-2" | "3" | "3-2" | "4";
  className?: string;
  image?: string;
}) => {
  const sectionClassName = clsx([
    type === "1" && ["section-01", styles.section01],
    type === "2" && ["section-02", styles.section02],
    type === "2-1" && ["section-02-1", styles.section02_1],
    type === "2-2" && ["section-02-2", styles.section02_2],
    type === "3" && ["section-03", styles.section03],
    type === "3-2" && ["section-03-2", styles.section03_2],
    className,
  ]);

  return (
    <>
      <div className={sectionClassName}>
        <h2 className={clsx("heading")}>データを活用してプランを作ろう</h2>
        <p className={clsx("text")}>
          日々の活動データとグローバルに集積されたデータを元に効果的に目標達成を達成できるプランを作成
        </p>
        <button className={clsx("button")}>無料ではじめる</button>
        <img
          className={clsx("photo img-fill")}
          src={image ?? "/public/grid-assets/rome/1.jpg"}
          alt=""
          width="1724"
          height="2218"
        />
      </div>
    </>
  );
};
