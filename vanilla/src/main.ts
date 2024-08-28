import "./reset.css";
import "./style.css";
// import "./form.css";
import { setupCounter } from "./counter.ts";

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
