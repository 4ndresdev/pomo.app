import { useContext } from "react";
import { Image } from "@nextui-org/image";
import material from "@/assets/images/wallpapers/material.webp";
import ocean from "@/assets/images/wallpapers/ocean.webp";
import bridge from "@/assets/images/wallpapers/bridge.webp";
import catiamatos from "@/assets/images/wallpapers/catiamatos.webp";
import { Progress } from "@nextui-org/react";
import OnboardingContext from "@/contexts/OnboardingContext";

const wallPaperConfig = { ocean, catiamatos, material, bridge };

const Onboarding = () => {
  const { step, totalSteps, currentStep, wallpaper } =
    useContext(OnboardingContext);

  return (
    <div className="w-screen h-svh overflow-hidden flex justify-center items-center">
      <Image
        alt="Natural landscape with a forest and lake from above"
        src={wallPaperConfig[wallpaper] || material}
        radius="none"
        className="w-screen h-screen object-cover"
      />
      <div className="absolute z-10 w-[95%] max-w-sm mt-[-5rem]">
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
