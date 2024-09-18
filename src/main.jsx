import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppWrapper from "./App.jsx";
import "./index.css";
import { AppProvider } from "./components/context.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <AppWrapper />
    </AppProvider>
  </StrictMode>
);
