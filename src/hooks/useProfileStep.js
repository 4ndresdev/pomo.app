import { useCallback, useContext, useState, useEffect } from "react";
import OnboardingContext from "@/contexts/OnboardingContext";
import { setUserData, getUserData } from "@/services/localStorageService";

export const useProfileStep = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const { setStep } = useContext(OnboardingContext);

  const handleBack = useCallback(() => {
    setStep((step) => step - 1);
  }, [setStep]);

  const handleNext = useCallback(() => {
    setStep((step) => step + 1);
  }, [setStep]);

  useEffect(() => {
    const avatar = getUserData("avatar");
    if (avatar) {
      setSelectedFile(avatar);
    }
  }, []);

  useEffect(() => {
    if (selectedFile) {
      setUserData("avatar", selectedFile);
    }
  }, [selectedFile]);

  return {
    handleNext,
    handleBack,
    selectedFile,
    setSelectedFile,
  };
};
