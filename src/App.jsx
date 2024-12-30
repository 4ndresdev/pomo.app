import { Route, Routes } from "react-router";
import Onboarding from "@/pages/Onboarding";
import Dashboard from "@/pages/Dashboard";
import { OnboardingProvider } from "@/contexts/OnboardingContext";
import { Toaster } from "react-hot-toast";
import { Navigate } from "react-router";
import { PrivateRoutes } from "@/router/PrivateRoutes";
import { PublicRoutes } from "@/router/PublicRoutes";
import { TimerProvider } from "./contexts/TimerContext";

const App = () => {
  return (
    <Routes>
      <Route
        path="/onboarding"
        element={
          <PublicRoutes>
            <OnboardingProvider>
              <Toaster />
              <Onboarding />
            </OnboardingProvider>
          </PublicRoutes>
        }
      />
      <Route
        path="/"
        element={
          <PrivateRoutes>
            <TimerProvider>
              <Toaster />
              <Dashboard />
            </TimerProvider>
          </PrivateRoutes>
        }
      />
      <Route path="*" element={<Navigate to="/onboarding" />} />
    </Routes>
  );
};

export default App;
