import React from "react";
import ReactDOM from "react-dom/client";
import { Component } from "./snippets/Tmp";
// import Component from "./snippets/TemperatureConverter";
// import { Component } from "./snippets/Tmp";
// import Component from "./snippets/ContactForm/index.tsx";
// import Component from "./snippets/HolyGrail";
// import Component from "./snippets/ToDo";
async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const { worker } = await import("./mocks/browser");

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <Component />
    </React.StrictMode>
  );
});
