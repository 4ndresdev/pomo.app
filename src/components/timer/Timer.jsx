import { useContext, useMemo } from "react";
import { getUserData } from "@/services/localStorageService";
import { Expand, Shrink } from "lucide-react";
import ButtonWithIcon from "@/components/ui/ButtonWithIcon";
import { Tab, Tabs } from "@nextui-org/tabs";
import TimerContext from "@/contexts/TimerContext";
import TimerDisplay from "@/components/timer/TimerDisplay";
import TimerControls from "@/components/timer/TimerControls";
import { getRandomPhrase } from "@/utils/getRandomPhrase";

const backgrounds = {
  ocean: "bg-ocean",
  catiamatos: "bg-catiamatos",
  material: "bg-material",
  bridge: "bg-bridge",
};

export function Timer() {
  const wallpaper = getUserData("wallpaper");
  const { isFullScreen, handleFullScreen, timerTab, setTimerTab } =
    useContext(TimerContext);

  const motivationalPhrase = useMemo(() => getRandomPhrase(), []);

  const activeFullScreenClasses = isFullScreen
    ? "fixed top-0 left-0 w-screen h-screen z-50 h-svh"
    : "w-full h-96 lg:h-full border-5 border-white rounded-2xl shadow-xl relative";
  return (
    <div
      className={`${backgrounds[wallpaper]} bg-cover bg-center flex flex-col justify-center items-center gap-5 ${activeFullScreenClasses}`}
    >
      <Tabs
        aria-label="Timer tabs"
        size="sm"
        selectedKey={timerTab}
        onSelectionChange={setTimerTab}
      >
        <Tab key="focus" title="Focus 🔥" />
        <Tab key="break" title="Break" />
      </Tabs>
      <TimerDisplay />
      <TimerControls />
      <p
        className={`flex justify-center text-white text-center absolute bottom-0 w-96 mb-5 ${
          isFullScreen
            ? "text-md text-wrap px-5 mb-8"
            : "text-sm xl:text-md hidden xl:flex"
        }`}
      >
        {motivationalPhrase}
      </p>
      <div className="absolute top-0 right-0 m-5">
        <ButtonWithIcon
          variant="shadow"
          color="warning"
          size="md"
          ariaLabel="Start timer"
          onPress={handleFullScreen}
        >
          {isFullScreen ? (
            <Shrink strokeWidth={2} size={20} />
          ) : (
            <Expand strokeWidth={2} size={20} />
          )}
        </ButtonWithIcon>
      </div>
    </div>
  );
}
