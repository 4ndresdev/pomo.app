import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter } from "react-router";
import "@fontsource/poppins";
import "@/assets/styles/globals.css";
import App from "@/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NextUIProvider>
      <BrowserRouter basename="/pomodo-timer">
        <App />
      </BrowserRouter>
    </NextUIProvider>
  </StrictMode>
);
