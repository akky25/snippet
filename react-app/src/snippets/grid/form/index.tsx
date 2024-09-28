import styles from "./index.module.scss";

export const Form = () => {
  return (
    <form className={styles.form}>
      <h1 className="heading-center">アカウントを作成する</h1>
      <div className={styles.filed}>
        <label htmlFor="email">メールアドレス</label>
        <input type="email" id="email" placeholder="mail@example.com" />
        <p className="text-xsmall">メールアドレスを入力してください</p>
      </div>
      <div className={styles.filed}>
        <label htmlFor="password">パスワード</label>
        <input
          type="password"
          id="password"
          placeholder="*********"
          minLength={8}
        />
        <p className="text-xsmall">8文字以上で入力してください</p>
      </div>
      <button type="submit" className="btn-accent">
        続ける
      </button>
    </form>
  );
};
