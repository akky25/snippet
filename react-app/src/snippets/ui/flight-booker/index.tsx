import { useState } from "react";
import styles from "./index.module.css";

const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return [year, month, day].join("-");
};

const TODAY = formatDate(new Date());

export const FlightBooker = () => {
  const [flightOption, setFlightOption] = useState<string>("one-way");

  const today = new Date();
  today.setDate(today.getDate() + 1);
  const [departureDate, setDepartureDate] = useState(formatDate(today));

  const [returnDate, setReturnDate] = useState(departureDate);

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        if (flightOption === "one-way") {
          alert(`You have booked a one-way flight on ${departureDate}`);
          return;
        }

        alert(
          `You have booked a return flight, departing on ${departureDate} and returning on ${returnDate}`
        );
      }}
    >
      <select
        value={flightOption}
        onChange={(e) => {
          setFlightOption(e.target.value);
        }}
      >
        <option value="one-way">片道</option>
        <option value="return">往復</option>
      </select>
      <input
        aria-label="Departure Date"
        type="date"
        value={departureDate}
        onChange={(e) => {
          setDepartureDate(e.target.value);
        }}
        min={TODAY}
      />
      {flightOption === "return" && (
        <input
          aria-label="Return Date"
          type="date"
          value={returnDate}
          onChange={(e) => {
            setReturnDate(e.target.value);
          }}
          min={departureDate}
        />
      )}
      <button>予約</button>
    </form>
  );
};
