import styles from "./styles.module.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color: "red" | "blue";
};

export default function Button({ color, ...props }: ButtonProps) {
  return (
    <button className={styles.button} {...props}>
      <span className={styles.spanBackground}></span>
      <span className={styles.spanText} style={{ color }}>
        Work with us
      </span>
    </button>
  );
}
