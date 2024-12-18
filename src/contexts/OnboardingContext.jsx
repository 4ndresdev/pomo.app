import { createContext, useCallback, useState, useEffect } from "react";
import PropTypes from "prop-types";
import NameStep from "@/components/steps/NameStep";
import ProfileStep from "@/components/steps/ProfileStep";
import WallpaperStep from "@/components/steps/WallpaperStep";
import { setUserData } from "@/services/localStorageService";

const OnboardingContext = createContext();

const ONBOARDING_STEPS = [
  {
    component: <NameStep />,
    progress: 30,
  },
  {
    component: <ProfileStep />,
    progress: 60,
  },
  {
    component: <WallpaperStep />,
    progress: 100,
  },
];

export const OnboardingProvider = ({ children }) => {
  const [step, setStep] = useState(0);
  const [wallpaper, setWallpaper] = useState("");

  useEffect(() => {
    const storedWallpaper = localStorage.getItem("wallpaper");
    if (storedWallpaper) {
      setWallpaper(storedWallpaper);
    } else {
      setWallpaper("material");
    }
  }, []);

  const updateWallpaper = useCallback((newWallpaper) => {
    setWallpaper(newWallpaper);
    setUserData("wallpaper", newWallpaper);
  }, []);

  const nextStep = useCallback(() => {
    if (step === ONBOARDING_STEPS.length - 1) return;
    setStep((prevStep) => prevStep + 1);
  }, [step]);

  const prevStep = useCallback(() => {
    if (step === 0) return;
    setStep((prevStep) => prevStep - 1);
  }, [step]);

  return (
    <OnboardingContext.Provider
      value={{
        step,
        setStep,
        totalSteps: ONBOARDING_STEPS.length,
        nextStep,
        prevStep,
        isFirstStep: step === 0,
        isLastStep: step === ONBOARDING_STEPS.length - 1,
        currentStep: ONBOARDING_STEPS[step],
        wallpaper,
        updateWallpaper,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
};

OnboardingProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default OnboardingContext;
