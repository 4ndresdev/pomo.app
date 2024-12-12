import { Route, Routes } from "react-router";
import Onboarding from "@/pages/Onboarding";
import { OnboardingProvider } from "@/contexts/OnboardingContext";

const App = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <OnboardingProvider>
            <Onboarding />
          </OnboardingProvider>
        }
      />
    </Routes>
  );
};

export default App;
