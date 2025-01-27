import { useCallback, useContext, useState } from "react";
import OnboardingContext from "@/contexts/OnboardingContext";
import { useNavigate } from "react-router";
import { setUserData } from "@/services/db/user.db";
import { wait } from "@/utils/wait";

export const useWallpaperStep = () => {
  const { setStep } = useContext(OnboardingContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleBack = useCallback(() => {
    setStep((step) => step - 1);
  }, [setStep]);

  const handleNext = useCallback(async () => {
    setLoading(true);
    const user = await setUserData({ isOnboardingCompleted: true });

    await wait(5000);

    if (!user) {
      setLoading(false);
      return;
    }

    navigate("/", { replace: true });
  }, [navigate]);

  return {
    handleNext,
    handleBack,
    loading,
  };
};
