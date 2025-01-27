import { useCallback, useContext, useState, useEffect } from "react";
import OnboardingContext from "@/contexts/OnboardingContext";
import { getUserData, setUserData } from "@/services/db/user.db";

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
    async function fetchData() {
      const avatar = await getUserData("avatar");
      if (avatar) {
        setSelectedFile(avatar);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function saveData() {
      if (selectedFile) {
        await setUserData({ avatar: selectedFile });
      }
    }
    saveData();
  }, [selectedFile]);

  return {
    handleNext,
    handleBack,
    selectedFile,
    setSelectedFile,
  };
};
