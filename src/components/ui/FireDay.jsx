import PropTypes from "prop-types";
import { Image } from "@heroui/react";
import fire from "@/assets/images/fire.png";

export function FireDay({ day, active = false }) {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-2 ${
        !active && "grayscale"
      }`}
    >
      <Image src={fire} width={25} />
      {day && <h1 className="text-white">{day}</h1>}
    </div>
  );
}

FireDay.propTypes = {
  day: PropTypes.string,
  active: PropTypes.bool,
};

export default FireDay;
