import PropTypes from "prop-types";
import { Image } from "@nextui-org/react";
import fire from "@/assets/images/fire.png";

export function FireDay({ day, active = false }) {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-2 ${
        !active && "grayscale"
      }`}
    >
      <Image src={fire} width={30} />
      {day && <h1 className="text-white">{day}</h1>}
    </div>
  );
}

FireDay.propTypes = {
  day: PropTypes.number,
  active: PropTypes.bool.isRequired,
};

export default FireDay;
