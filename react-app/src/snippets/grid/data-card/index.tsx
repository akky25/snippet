import clsx from "clsx";
import styles from "./index.module.css";
import { createClsx } from "../ulits";

export const DataCard = ({
  type,
  className,
}: {
  type: "1" | "2" | "3";
  className: string;
}) => {
  switch (type) {
    case "1":
      return (
        <div
          className={clsx(
            "datacard-01 background-white",
            styles.dataCard01,
            className
          )}
        >
          <h2 className={createClsx("title", styles)}>エネルギー</h2>
          <div className={createClsx("subtitle", styles)}>Energy</div>
          <div className={createClsx("data", styles)}>153 kcal</div>
          <div className={createClsx("chart", styles)}>
            <img
              src="/public/grid-assets/chart/energy.svg"
              alt="グラフ"
              width="78"
              height="55"
            />
          </div>
          <div
            className={createClsx("icon", styles)}
            role="img"
            aria-label="詳細"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
              />
            </svg>
          </div>
        </div>
      );

    case "2":
      return (
        <div
          className={clsx(
            "datacard-02 background-white",
            styles.dataCard02,
            className
          )}
        >
          <h2 className={createClsx("title", styles)}>サマリー</h2>
          <div className={createClsx("chart", styles)}>
            <img
              src="/public/grid-assets/chart/summary.svg"
              alt="グラフ"
              width="441"
              height="269"
            />
          </div>
          <div
            className={createClsx("icon", styles)}
            role="img"
            aria-label="詳細"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>
      );

    case "3":
      return (
        <div
          className={clsx(
            "datacard-3 background-white",
            styles.dataCard03,
            className
          )}
        >
          <h2 className={createClsx("title", styles)}>ToDo</h2>
          <div className={clsx(createClsx("data", styles), "text-small")}>
            沖縄行きのチケットを手配する
          </div>
          <div
            className={createClsx("icon", styles)}
            role="img"
            aria-label="詳細"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </div>
        </div>
      );
  }
};
