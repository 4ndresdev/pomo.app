import { Route, Routes } from "react-router";
import Onboarding from "@/pages/Onboarding";
import { OnboardingProvider } from "@/contexts/OnboardingContext";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <OnboardingProvider>
            <Toaster />
            <Onboarding />
          </OnboardingProvider>
        }
      />
    </Routes>
  );
};

export default App;
