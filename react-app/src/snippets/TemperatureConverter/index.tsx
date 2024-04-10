import { useState } from "react";
import "./styles.css";

const convert = (
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
  calculation: (value: number) => number
) => {
  if (value === "" || isNaN(Number(value))) {
    setValue("");
    return;
  }

  const fahrenheit = calculation(Number(value));
  setValue(String(Number(fahrenheit.toFixed(4))));
};

function Component() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCelsius(value);
    convert(value, setFahrenheit, (value) => (value * 9) / 5 + 32);
  };

  const handleFahrenheitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFahrenheit(value);
    convert(value, setCelsius, (value) => ((value - 32) * 5) / 9);
  };

  return (
    <>
      <div className="container">
        <input type="number" onChange={handleCelsiusChange} value={celsius} />
        =
        <input
          type="number"
          onChange={handleFahrenheitChange}
          value={fahrenheit}
        />
      </div>
    </>
  );
}

export default Component;
