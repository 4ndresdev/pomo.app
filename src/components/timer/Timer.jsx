import { getUserData } from "@/services/localStorageService";
import { Maximize, Play } from "lucide-react";
import ButtonWithIcon from "@/components/ui/ButtonWithIcon";
import { Tab, Tabs } from "@nextui-org/tabs";

const backgrounds = {
  ocean: "bg-ocean",
  catiamatos: "bg-catiamatos",
  material: "bg-material",
  bridge: "bg-bridge",
};

export function Timer() {
  const wallpaper = getUserData("wallpaper");
  return (
    <div
      className={`w-full h-96 md:h-full ${backgrounds[wallpaper]} bg-cover bg-center rounded-2xl shadow-xl flex flex-col justify-center items-center gap-5 relative`}
    >
      <Tabs aria-label="" size="sm">
        <Tab key="focus" title="Focus 🔥" />
        <Tab key="break" title="Break" />
      </Tabs>
      <h1 className="text-white font-bold text-7xl xl:text-8xl 2xl:text-9xl">
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
      <p className="text-white text-center text-sm xl:text-lg font-sans absolute bottom-0 mb-5 w-3/5 hidden xl:flex">
        &quot;The best way to get started is to quit talking and begin lor sad
        dasdasd sad asdas doing.&quot;
      </p>
      <div className="absolute top-0 right-0 m-5">
        <ButtonWithIcon
          variant="shadow"
          color="warning"
          size="md"
          ariaLabel="Start timer"
          onPress={() => console.log("timer")}
        >
          <Maximize strokeWidth={3} size={15} />
        </ButtonWithIcon>
      </div>
    </div>
  );
}
