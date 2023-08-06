import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { Home } from "./pages/Home";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
);
