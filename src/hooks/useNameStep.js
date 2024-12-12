import { useCallback, useEffect, useRef, useState, useContext } from "react";
import OnboardingContext from "@/contexts/OnboardingContext";

const useNameStep = () => {
  const nameRef = useRef(null);
  const [name, setName] = useState("");
  const { setStep } = useContext(OnboardingContext);

  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.focus();
    }
  }, []);

  const handleNext = useCallback(() => {
    console.log(name);
    setStep((step) => step + 1);
  }, [name, setStep]);

  const handleChange = useCallback((e) => {
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

  return { nameRef, handleChange, handleKeyDown, isDisabled, handleNext };
};

export default useNameStep;
