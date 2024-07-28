import styles from "./styles.module.css";
// import "./index.css";

function Component() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.visual}>box</div>
        <div>
          <div className={styles.meta}>
            <h1>Card Title Here</h1>
            <h2 className="time">Subtitle</h2>
          </div>
          <p className={styles.desc}>
            Here is some descriptive text to support the main idea of the card.
            It will be hidden when there is less inline space.
          </p>
          <button>I'm a button</button>
        </div>
      </div>
    </div>
  );
}

export default Component;
