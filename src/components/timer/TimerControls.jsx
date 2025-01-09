import React, { useContext } from "react";
import TimerContext from "@/contexts/TimerContext";
import ButtonWithIcon from "@/components/ui/ButtonWithIcon";
import { Pause, Play } from "lucide-react";

const TimerControls = () => {
  const { handlePlay, isPlaying } = useContext(TimerContext);

  return (
    <div className="controls">
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
