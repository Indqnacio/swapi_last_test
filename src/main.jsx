import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "../src/assets/styles/index.scss";
import { StrictMode } from "react";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
