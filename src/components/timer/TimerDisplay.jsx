import NumberFlow, { NumberFlowGroup } from "@number-flow/react";
import TimerContext from "@/contexts/TimerContext";
import { useContext } from "react";

const TimerDisplay = () => {
  const { isFullScreen, mm, ss } = useContext(TimerContext);

  return (
    <NumberFlowGroup>
      <div
        className={`text-white font-bold block font-sans ${
          isFullScreen
            ? "text-8xl md:text-9xl"
            : "text-7xl xl:text-8xl 2xl:text-9xl"
        }`}
      >
        <NumberFlow
          value={mm}
          digits={{ 1: { max: 5 } }}
          format={{ minimumIntegerDigits: 2 }}
        />
        <NumberFlow
          prefix=":"
          value={ss}
          digits={{ 1: { max: 5 } }}
          format={{ minimumIntegerDigits: 2 }}
        />
      </div>
    </NumberFlowGroup>
  );
};

export default TimerDisplay;
