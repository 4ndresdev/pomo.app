import { useContext } from "react";
import { getUserData } from "@/services/localStorageService";
import { Expand, Play, Shrink } from "lucide-react";
import ButtonWithIcon from "@/components/ui/ButtonWithIcon";
import { Tab, Tabs } from "@nextui-org/tabs";
import TimerContext from "@/contexts/TimerContext";

const backgrounds = {
  ocean: "bg-ocean",
  catiamatos: "bg-catiamatos",
  material: "bg-material",
  bridge: "bg-bridge",
};

export function Timer() {
  const wallpaper = getUserData("wallpaper");
  const { isFullScreen, handleFullScreen } = useContext(TimerContext);

  const activeFullScreenClasses = isFullScreen
    ? "fixed top-0 left-0 w-screen h-screen z-50 h-svh"
    : "w-full h-96 md:h-full border-5 border-white rounded-2xl shadow-xl relative";
  return (
    <div
      className={`${backgrounds[wallpaper]} bg-cover bg-center flex flex-col justify-center items-center gap-5 ${activeFullScreenClasses}`}
    >
      <Tabs aria-label="" size="sm">
        <Tab key="focus" title="Focus 🔥" />
        <Tab key="break" title="Break" />
      </Tabs>
      <h1
        className={`text-white font-bold ${
          isFullScreen
            ? "text-8xl md:text-9xl"
            : "text-7xl xl:text-8xl 2xl:text-9xl"
        }`}
      >
        25:00
      </h1>
      <div className="controls">
        <ButtonWithIcon
          variant="shadow"
          color="primary"
          size="lg"
          ariaLabel="Start timer"
          onPress={() => console.log("timer")}
        >
          <Play strokeWidth={2} />
        </ButtonWithIcon>
      </div>
      <p
        className={`text-white text-center absolute bottom-0 w-96 mb-8 ${
          isFullScreen
            ? "text-md text-wrap px-5"
            : "text-sm xl:text-lg hidden xl:flex"
        }`}
      >
        &quot;The best way to get started is to quit talking and begin lor sad
        dasdasd sad asdas doing.&quot;
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
