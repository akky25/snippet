import clsx from "clsx";
import styles from "./index.module.scss";
import { createClsx } from "../ulits";

export const GridViewLayout = () => {
  return (
    <div className={styles.cards}>
      <div className={clsx("card-01", styles.card01)}>
        <img
          className="photo img-fill"
          src="/public/grid-assets/rome/1.jpg"
          alt=""
          width="1724"
          height="2218"
        />
        <h2 className="title">Basilica di San Pietro</h2>
        <p className="subtitle">サン・ピエトロ大聖堂</p>
        <div className={createClsx("avatar", styles)}>
          <img
            src="/public/grid-assets/avatar/1.jpg"
            alt="account"
            width="32"
            height="32"
          />
        </div>
      </div>
      <div className={clsx("card-01", styles.card01)}>
        <img
          className="photo img-fill"
          src="/public/grid-assets/rome/2.jpg"
          alt=""
          width="1980"
          height="1485"
        />
        <h2 className="title">Colosseo e dintorni</h2>
        <p className="subtitle">コロッセオとその周辺</p>
        <div className={createClsx("avatar", styles)}>
          <img
            src="/public/grid-assets/avatar/2.jpg"
            alt="account"
            width="32"
            height="32"
          />
        </div>
      </div>
      <div className={clsx("card-01", styles.card01)}>
        <img
          className="photo img-fill"
          src="/public/grid-assets/rome/3.jpg"
          alt=""
          width="1980"
          height="1316"
        />
        <h2 className="title">Via della Conciliazione</h2>
        <p className="subtitle">コンチリアツィオーネ通り</p>
        <div className={createClsx("avatar", styles)}>
          <img
            src="/public/grid-assets/avatar/3.jpg"
            alt="account"
            width="32"
            height="32"
          />
        </div>
      </div>
      <div className={clsx("card-01", styles.card01)}>
        <img
          className="photo img-fill"
          src="/public/grid-assets/rome/4.jpg"
          alt=""
          width="1980"
          height="1321"
        />
        <h2 className="title">Via Margutta</h2>
        <p className="subtitle">マルグッタ通り</p>
        <div className={createClsx("avatar", styles)}>
          <img
            src="/public/grid-assets/avatar/4.jpg"
            alt="account"
            width="32"
            height="32"
          />
        </div>
      </div>
      <div className={clsx("card-01", styles.card01)}>
        <img
          className="photo img-fill"
          src="/public/grid-assets/rome/5.jpg"
          alt=""
          width="1980"
          height="1321"
        />
        <h2 className="title">Porta di Legno</h2>
        <p className="subtitle">緑色のドア</p>
        <div className={createClsx("avatar", styles)}>
          <img
            src="/public/grid-assets/avatar/5.jpg"
            alt="account"
            width="32"
            height="32"
          />
        </div>
      </div>
      <div className={clsx("card-01", styles.card01)}>
        <img
          className="photo img-fill"
          src="/public/grid-assets/rome/6.jpg"
          alt=""
          width="1980"
          height="1321"
        />
        <h2 className="title">Buona Trattoria</h2>
        <p className="subtitle">トラットリア</p>
        <div className={createClsx("avatar", styles)}>
          <img
            src="/public/grid-assets/avatar/6.jpg"
            alt="account"
            width="32"
            height="32"
          />
        </div>
      </div>
      <div className={clsx("card-01", styles.card01)}>
        <img
          className="photo img-fill"
          src="/public/grid-assets/rome/7.jpg"
          alt=""
          width="1980"
          height="1321"
        />
        <h2 className="title">Caffè espresso</h2>
        <p className="subtitle">カフェ・エスプレッソ</p>
        <div className={createClsx("avatar", styles)}>
          <img
            src="/public/grid-assets/avatar/7.jpg"
            alt="account"
            width="32"
            height="32"
          />
        </div>
      </div>
      <div className={clsx("card-01", styles.card01)}>
        <img
          className="photo img-fill"
          src="/public/grid-assets/rome/8.jpg"
          alt=""
          width="1980"
          height="1321"
        />
        <h2 className="title">Scooter in un vicolo</h2>
        <p className="subtitle">路地裏のスクーター</p>
        <div className={createClsx("avatar", styles)}>
          <img
            src="/public/grid-assets/avatar/8.jpg"
            alt="account"
            width="32"
            height="32"
          />
        </div>
      </div>
    </div>
  );
};
