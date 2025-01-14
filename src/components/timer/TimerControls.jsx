import { useContext } from "react";
import TimerContext from "@/contexts/TimerContext";
import ButtonWithIcon from "@/components/ui/ButtonWithIcon";
import { Pause, Play, RotateCcw } from "lucide-react";

const TimerControls = () => {
  const { handlePlay, handleReset, isPlaying, isDirty } =
    useContext(TimerContext);

  return (
    <div className="controls flex gap-3">
      {isPlaying ||
        (isDirty && (
          <ButtonWithIcon
            variant="shadow"
            color="warning"
            size="lg"
            ariaLabel="Reset timer"
            onPress={handleReset}
          >
            <RotateCcw strokeWidth={2} />
          </ButtonWithIcon>
        ))}
      <ButtonWithIcon
        variant="shadow"
        color="primary"
        size="lg"
        ariaLabel="Start timer"
        onPress={handlePlay}
      >
        {isPlaying ? <Pause strokeWidth={2} /> : <Play strokeWidth={2} />}
      </ButtonWithIcon>
    </div>
  );
};

export default TimerControls;
