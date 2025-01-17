import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { HeroUIProvider } from "@heroui/react";
import { BrowserRouter } from "react-router";
import "@fontsource/poppins";
import "@/assets/styles/globals.css";
import App from "@/App.jsx";
import Loading from "@/components/ui/Loading";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<Loading />}>
      <HeroUIProvider>
        <BrowserRouter basename="pomo.app">
          <App />
        </BrowserRouter>
      </HeroUIProvider>
    </Suspense>
  </StrictMode>
);
