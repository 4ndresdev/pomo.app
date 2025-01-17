import { useContext } from "react";
import { Progress } from "@heroui/react";
import OnboardingContext from "@/contexts/OnboardingContext";

const backgrounds = {
  ocean: "bg-ocean",
  catiamatos: "bg-catiamatos",
  material: "bg-material",
  bridge: "bg-bridge",
};

const Onboarding = () => {
  const { step, totalSteps, currentStep, wallpaper } =
    useContext(OnboardingContext);

  return (
    <div
      className={`w-screen h-dvh overflow-hidden flex justify-center items-center ${backgrounds[wallpaper]} bg-cover bg-center`}
    >
      <div className="absolute z-10 w-[95%] max-w-sm mt-[-2rem]">
        {currentStep.component}
        <Progress
          className="w-60 max-w-xs mx-auto mt-8 font-sans text-white"
          color="warning"
          formatOptions={{ style: "percent" }}
          label={`Step ${step + 1} of ${totalSteps}`}
          maxValue={100}
          showValueLabel={true}
          size="lg"
          value={currentStep.progress}
        />
      </div>
      <small className="absolute bottom-0 z-10 w-full text-small text-center mb-8 text-white">
        Developed with ❤️️ by <b>4ndresdev</b>
      </small>
    </div>
  );
};

export default Onboarding;
