import React from "react";
import ReactDOM from "react-dom/client";
import { Component } from "./snippets/Tmp";
// import Component from "./snippets/ContactForm/index.tsx";
// import Component from "./snippets/HolyGrail";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Component count={false} />
  </React.StrictMode>
);
