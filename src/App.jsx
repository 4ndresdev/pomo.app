import { Route, Routes } from "react-router";
import Onboarding from "@/pages/Onboarding";
import Dashboard from "@/pages/Dashboard";
import { OnboardingProvider } from "@/contexts/OnboardingContext";
import { Toaster } from "react-hot-toast";
import { Navigate } from "react-router";
import { PrivateRoutes } from "@/router/PrivateRoutes";
import { PublicRoutes } from "@/router/PublicRoutes";

const App = () => {
  return (
    <Routes>
      <Route
        index
        path="onboarding"
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
            <Toaster />
            <Dashboard />
          </PrivateRoutes>
        }
      />
      <Route path="*" element={<Navigate to="onboarding" replace />} />
    </Routes>
  );
};

export default App;
