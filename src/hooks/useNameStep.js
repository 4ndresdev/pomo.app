import { useCallback, useEffect, useRef, useState, useContext } from "react";
import OnboardingContext from "@/contexts/OnboardingContext";
import { setUserData, getUserData } from "@/services/localStorageService";
import useSound from "use-sound";
import keyPressSound from "@/assets/sounds/keyPressSound.wav";

const useNameStep = () => {
  const nameRef = useRef(null);
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const { setStep } = useContext(OnboardingContext);
  const [play] = useSound(keyPressSound, { volume: 0.25 });

  const handleNext = useCallback(() => {
    if (name.trim().length === 0) {
      setError("Name is required 🚫");
      return;
    }
    setUserData("name", name.trim());
    setStep((step) => step + 1);
  }, [name, setStep]);

  const handleChange = useCallback(
    (e) => {
      play();
      setError("");
      setName(e.target.innerText.trim());
    },
    [play]
  );

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        play();
        handleNext();
      }
    },
    [handleNext, play]
  );

  useEffect(() => {
    const storedName = getUserData("name");
    if (storedName) {
      nameRef.current.innerText = storedName;
      setName(storedName);
    } else {
      nameRef.current.focus();
    }
  }, []);

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
