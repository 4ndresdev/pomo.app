import { useCallback, useState } from "react";
import NameStep from "@/components/steps/NameStep";

const ONBOARDING_STEPS = [
  {
    component: <NameStep />,
    progress: 30,
  },
  {
    title: "Step 2",
    description: "This is the second step",
    progress: 60,
  },
  {
    title: "Step 3",
    description: "This is the final step",
    progress: 100,
  },
];

const useOnboarding = () => {
  const [step, setStep] = useState(0);

  const nextStep = useCallback(() => {
    if (step === ONBOARDING_STEPS.length - 1) return;
    setStep((prevStep) => prevStep + 1);
  }, [step]);

  const prevStep = useCallback(() => {
    if (step === 0) return;
    setStep((prevStep) => prevStep - 1);
  }, [step]);

  return {
    step,
    totalSteps: ONBOARDING_STEPS.length,
    nextStep,
    prevStep,
    isFirstStep: step === 0,
    isLastStep: step === ONBOARDING_STEPS.length - 1,
    currentStep: ONBOARDING_STEPS[step],
  };
};

export default useOnboarding;
