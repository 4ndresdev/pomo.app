import { useContext } from "react";
import { Image } from "@nextui-org/image";
import wallpaper from "@/assets/images/wallpaper.webp";
import { Progress } from "@nextui-org/react";
import OnboardingContext from "@/contexts/OnboardingContext";

const Onboarding = () => {
  const { step, totalSteps, currentStep } = useContext(OnboardingContext);

  return (
    <div className="w-screen h-svh overflow-hidden flex justify-center items-center">
      <Image
        alt="Natural landscape with a forest and lake from above"
        src={wallpaper}
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
      <small className="absolute bottom-0 z-10 w-full text-small text-center mb-8">
        Developed with ❤️️ by <b>4ndresdev</b>
      </small>
    </div>
  );
};

export default Onboarding;
