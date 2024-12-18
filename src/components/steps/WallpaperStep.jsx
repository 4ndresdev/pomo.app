import PropTypes from "prop-types";
import { useContext } from "react";
import { ArrowRight } from "lucide-react";
import ButtonWithIcon from "@/components/buttons/ButtonWithIcon";
import { Image } from "@nextui-org/react";
import material from "@/assets/images/wallpapers/material.webp";
import catiamatos from "@/assets/images/wallpapers/catiamatos.webp";
import ocean from "@/assets/images/wallpapers/ocean.webp";
import bridge from "@/assets/images/wallpapers/bridge.webp";
import OnboardingContext from "@/contexts/OnboardingContext";

const WALLPAPERS = [
  { id: "material", src: material, delay: "500ms" },
  { id: "catiamatos", src: catiamatos, delay: "1000ms" },
  { id: "ocean", src: ocean, delay: "1500ms" },
  { id: "bridge", src: bridge, delay: "2000ms" },
];

const WallpaperOption = ({ id, src, delay, selected, onClick }) => {
  return (
    <div className={`fade-in delay-${delay}`} onClick={() => onClick(id)}>
      <Image
        className={`h-24 max-w-full cursor-pointer border-3 rounded-2xl ${
          selected ? "border-warning" : ""
        }`}
        src={src}
        alt=""
        isBlurred
      />
    </div>
  );
};

const WallpaperStep = () => {
  const { updateWallpaper, wallpaper } = useContext(OnboardingContext);
  return (
    <div className="w-full h-full p-5 flex flex-col items-center gap-2 bg-white rounded-xl shadow-xl fade-in delay-200ms">
      <div className="w-full flex gap-2">
        <div className="w-14 h-14 bg-white flex justify-center items-center rounded-md text-2xl shadow-inner-custom fade-in delay-500ms">
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
        {WALLPAPERS.map((wp) => (
          <WallpaperOption
            key={wp.id}
            id={wp.id}
            src={wp.src}
            delay={wp.delay}
            selected={wallpaper === wp.id}
            onClick={updateWallpaper}
          />
        ))}
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
          isDisabled={!wallpaper}
        >
          <ArrowRight strokeWidth={3} />
        </ButtonWithIcon>
      </div>
    </div>
  );
};

WallpaperOption.propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  delay: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default WallpaperStep;
