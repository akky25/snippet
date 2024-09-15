import { useState } from "react";
import styles from "./index.module.css";

export const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <input
          type="text"
          value={celsius}
          onChange={(e) => {
            setCelsius(e.target.value);
            const value = Number(e.target.value);
            if (!isNaN(value)) {
              setFahrenheit(
                String(parseFloat(((value * 9) / 5 + 32).toFixed(4)))
              );
            } else {
              setFahrenheit("");
            }
          }}
        />
        <label>Celsius</label>
      </div>
      <p>=</p>
      <div className={styles.card}>
        <input
          type="text"
          value={fahrenheit}
          onChange={(e) => {
            setFahrenheit(e.target.value);
            const value = Number(e.target.value);
            if (!isNaN(value)) {
              setCelsius(
                String(parseFloat((((value - 32) * 5) / 9).toFixed(4)))
              );
            } else {
              setCelsius("");
            }
          }}
        />
        <label>Fahrenheit</label>
      </div>
    </div>
  );
};
