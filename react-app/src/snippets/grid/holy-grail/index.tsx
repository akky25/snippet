import clsx from "clsx";
import { Header } from "../header";
import styles from "./index.module.scss";
import { Card } from "../card";

export const HolyGrail = () => {
  return (
    <div className={clsx(styles.holy, "background-bluesmoke")}>
      <Header renderHeader="1" className={clsx("no-padding", styles.header)} />

      <main className={styles.main}>
        <iframe
          className="fill radius"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11212.458560028217!2d12.489896629287582!3d41.89723933403795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sjp!4v1700020720019!5m2!1sen!2sjp"
          width="600"
          height="450"
          style={{ border: 0 }}
          // allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </main>

      <div className={clsx(styles["side-a"], "scrollbar")}>
        <ul
          className={clsx(
            "menu-vertical menu-horizontal text-xsmall-mobile",
            styles["menu-vertical"],
            styles["menu-horizontal"]
          )}
        >
          <li>
            <a
              href="#"
              className={clsx(
                "with-icon-vertical",
                styles["with-icon-vertical"]
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              ホーム
            </a>
          </li>
          <li>
            <a
              href="#"
              className={clsx(
                "with-icon-vertical",
                styles["with-icon-vertical"]
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
              地図
            </a>
          </li>
          <li>
            <a
              href="#"
              className={clsx(
                "with-icon-vertical",
                styles["with-icon-vertical"]
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              ポイント
            </a>
          </li>
          <li>
            <a
              href="#"
              className={clsx(
                "with-icon-vertical",
                styles["with-icon-vertical"]
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              フォト
            </a>
          </li>
          <li>
            <a
              href="#"
              className={clsx(
                "with-icon-vertical",
                styles["with-icon-vertical"]
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              評価
            </a>
          </li>
        </ul>
      </div>

      <div className={clsx(styles["side-b"], "scrollbar")}>
        <div className={styles.cards}>
          <Card type="1" />
          <Card type="1" />
          <Card type="1" />
          <button className="btn-accent">行きたい場所を追加する</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const Footer = () => (
  <footer className={styles.footer}>
    <ul className={clsx(styles.horizontal, "text-small")}>
      <li>
        <a href="#">利用規約</a>
      </li>
      <li>
        <a href="#">プライバシーポリシー</a>
      </li>
      <li>
        <a href="#">お問い合わせ</a>
      </li>
    </ul>
  </footer>
);
