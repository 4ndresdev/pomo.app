import { useCallback, useEffect, useRef, useState, useContext } from "react";
import OnboardingContext from "@/contexts/OnboardingContext";
import { setUserData } from "@/services/localStorageService";

const useNameStep = () => {
  const nameRef = useRef(null);
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const { setStep } = useContext(OnboardingContext);

  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.focus();
    }
  }, []);

  const handleNext = useCallback(() => {
    if (name.trim().length === 0) {
      setError("Name is required 🚫");
      return;
    }
    setUserData("name", name.trim());
    setStep((step) => step + 1);
  }, [name, setStep]);

  const handleChange = useCallback((e) => {
    setError("");
    setName(e.target.innerText.trim());
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleNext();
      }
    },
    [handleNext]
  );

  const isDisabled = name.length === 0;

  return {
    nameRef,
    handleChange,
    handleKeyDown,
    isDisabled,
    handleNext,
    error,
  };
};

export default useNameStep;
