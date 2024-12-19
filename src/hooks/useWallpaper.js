import { useCallback, useContext, useState } from "react";
import OnboardingContext from "@/contexts/OnboardingContext";
import { useNavigate } from "react-router";
import { setUserData } from "@/services/localStorageService";

export const useWallpaper = () => {
  const { setStep } = useContext(OnboardingContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleBack = useCallback(() => {
    setStep((step) => step - 1);
  }, [setStep]);

  const handleNext = useCallback(() => {
    setLoading(true);
    new Promise((resolve) => setTimeout(resolve, 3000)).then(() => {
      setUserData("isOnboardingCompleted", true);
      navigate("/", { replace: true });
    });
  }, [navigate]);

  return {
    handleNext,
    handleBack,
    loading,
  };
};
