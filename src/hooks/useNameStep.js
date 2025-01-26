import { useCallback, useEffect, useRef, useState, useContext } from "react";
import OnboardingContext from "@/contexts/OnboardingContext";
import { getUserData, setUserData } from "@/services/db/user.db";
import useSound from "use-sound";
import keyPressSound from "@/assets/sounds/keyPressSound.wav";

const useNameStep = () => {
  const nameRef = useRef(null);
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const { setStep } = useContext(OnboardingContext);
  const [play] = useSound(keyPressSound, { volume: 0.25 });

  const handleNext = useCallback(async () => {
    if (name.trim().length === 0) {
      setError("Name is required 🚫");
      return;
    }
    const user = await setUserData({ name: name.trim() });

    if (!user) return;

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
    async function fetchData() {
      const storedName = await getUserData("name");
      if (storedName) {
        nameRef.current.innerText = storedName;
        setName(storedName);
      } else {
        nameRef.current.focus();
      }
    }
    fetchData();
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
