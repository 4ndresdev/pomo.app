import { ArrowRight } from "lucide-react";
import ButtonWithIcon from "@/components/ui/ButtonWithIcon";
import { Avatar } from "@heroui/avatar";
import avatar from "@/assets/avatars/avatar.png";
import FileUpload from "@/components/ui/FileUpload";
import { useProfileStep } from "@/hooks/useProfileStep";

const ProfileStep = () => {
  const { handleBack, handleNext, selectedFile, setSelectedFile } =
    useProfileStep();
  return (
    <div className="w-full h-full px-8 py-2 flex flex-col items-center gap-2 bg-white rounded-xl shadow-xl fade-in delay-200ms relative">
      <Avatar
        className="fade-in delay-1500ms mt-2"
        isBordered
        src={selectedFile || avatar}
        size="lg"
        radius="full"
      />
      <h1 className="text-2xl font-medium text-center fade-in delay-1000ms">
        {selectedFile
          ? "Knew it, you look amazing! 😏✨"
          : "A photo of you would look good 😊"}
      </h1>
      <p className="text-center text-sm text-gray-500 fade-in delay-1000ms">
        {selectedFile
          ? "Now, we can continue 👉"
          : "Please upload your profile picture, this step is optional."}
      </p>
      <div className="fade-in delay-1500ms w-full">
        <FileUpload setSelectedFile={setSelectedFile} />
      </div>
      <div className="mt-2 fade-in delay-1500ms flex gap-2">
        <div className="rotate-180">
          <ButtonWithIcon
            variant="flat"
            color="warning"
            size="lg"
            ariaLabel="Back step"
            onPress={handleBack}
          >
            <ArrowRight strokeWidth={3} />
          </ButtonWithIcon>
        </div>
        <ButtonWithIcon
          variant="shadow"
          color="primary"
          size="lg"
          ariaLabel="Next step"
          onPress={handleNext}
        >
          <ArrowRight strokeWidth={3} />
        </ButtonWithIcon>
      </div>
      <div className="mt-5 fade-in delay-1500ms"></div>
    </div>
  );
};

export default ProfileStep;
