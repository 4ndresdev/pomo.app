import { ArrowRight } from "lucide-react";
import ButtonWithIcon from "@/components/buttons/ButtonWithIcon";

const NameStep = () => {
  return (
    <div className="w-full h-full p-8 flex flex-col items-center gap-2 bg-white rounded-xl shadow-xl fade-in delay-200ms">
      <div className="w-14 h-14 bg-white flex justify-center items-center rounded-md text-2xl shadow-inner-custom fade-in delay-500ms">
        📸
      </div>
      <h1 className="text-2xl font-medium text-center fade-in delay-1000ms">
        Profile
      </h1>
      <p className="text-center text-sm text-gray-500 fade-in delay-1000ms">
        Please upload your profile picture
      </p>
      <div className="mt-5 fade-in delay-1500ms flex gap-2">
        <div className="rotate-180">
          <ButtonWithIcon
            variant="flat"
            color="warning"
            size="lg"
            ariaLabel="Next step"
          >
            <ArrowRight strokeWidth={3} />
          </ButtonWithIcon>
        </div>
        <ButtonWithIcon
          variant="shadow"
          color="primary"
          size="lg"
          ariaLabel="Next step"
        >
          <ArrowRight strokeWidth={3} />
        </ButtonWithIcon>
      </div>
      <div className="mt-5 fade-in delay-1500ms"></div>
    </div>
  );
};

export default NameStep;
