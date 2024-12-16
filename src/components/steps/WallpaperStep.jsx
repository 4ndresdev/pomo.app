import { ArrowRight } from "lucide-react";
import ButtonWithIcon from "@/components/buttons/ButtonWithIcon";
import { Image } from "@nextui-org/react";
import wallpaper from "@/assets/images/wallpapers/wallpaper.webp";
import wallpaper3 from "@/assets/images/wallpapers/wallpaper3.webp";

const NameStep = () => {
  return (
    <div className="w-full h-full p-5 flex flex-col items-center gap-2 bg-white rounded-xl shadow-xl fade-in delay-200ms">
      <div className="w-full flex gap-2">
        <div className="w-14 h-14 bg-white flex justify-center items-center rounded-md text-xl shadow-inner-custom fade-in delay-500ms">
          🎨
        </div>
        <div className="flex flex-col justify-center mr-2">
          <h1 className="text-lg">We are almost done 👏</h1>
          <small className="text-sm text-gray-500 fade-in delay-1000ms">
            Please select a wallpaper
          </small>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
        <div className="fade-in delay-500ms">
          <Image
            className="h-24 max-w-full cursor-pointer border-3 rounded-2xl border-warning"
            src={wallpaper}
            alt=""
            isZoomed
            isBlurred
          />
        </div>
        <div className="fade-in delay-1000ms">
          <Image
            className="h-24 max-w-full rounded-lg cursor-pointer"
            src={wallpaper3}
            alt=""
            isZoomed
            isBlurred
          />
        </div>
        <div className="fade-in delay-1500ms">
          <Image
            className="h-24 max-w-full rounded-lg cursor-pointer"
            src={wallpaper}
            alt=""
            isZoomed
            isBlurred
          />
        </div>
        <div className="fade-in delay-2000ms">
          <Image
            className="h-24 max-w-full rounded-lg cursor-pointer"
            src={wallpaper}
            alt=""
            isZoomed
            isBlurred
          />
        </div>
      </div>
      <div className="w-full flex justify-end mt-5 fade-in delay-1500ms gap-2">
        <div className="rotate-180">
          <ButtonWithIcon
            variant="flat"
            color="warning"
            size="lg"
            ariaLabel="Back step"
          >
            <ArrowRight strokeWidth={3} />
          </ButtonWithIcon>
        </div>
        <ButtonWithIcon
          variant="shadow"
          color="primary"
          size="lg"
          ariaLabel="Next step"
          isDisabled
        >
          <ArrowRight strokeWidth={3} />
        </ButtonWithIcon>
      </div>
    </div>
  );
};

export default NameStep;
