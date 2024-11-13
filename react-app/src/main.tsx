import React from "react";
import ReactDOM from "react-dom/client";
import { ColumnGrid } from "./snippets/grid/12column-grid-2";
// import { ColumnGrid } from "./snippets/grid/12column-grid";
// import { Component } from "./snippets/Tmp";
// import { default as Component } from "./snippets/Tmp/Form";
// import { Form1, Form2 } from "./snippets/Tmp/Form2";
// import Component from "./snippets/TemperatureConverter";
// import { Component } from "./snippets/Tmp";
// import Component from "./snippets/ContactForm/index.tsx";
// import Component from "./snippets/layout/HolyGrail";
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
      {/* <Form1 /> */}
      {/* <Form2 /> */}
      {/* <Component /> */}
      <ColumnGrid />
    </React.StrictMode>
  );
});
