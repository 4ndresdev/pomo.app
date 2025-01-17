import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HeroUIProvider } from "@heroui/react";
import { BrowserRouter } from "react-router";
import "@fontsource/poppins";
import "@/assets/styles/globals.css";
import App from "@/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HeroUIProvider>
      <BrowserRouter basename="pomo.app">
        <App />
      </BrowserRouter>
    </HeroUIProvider>
  </StrictMode>
);
