import { getUserData } from "@/services/localStorageService";
import { Profile } from "@/components/Profile/Profile";
import { Timer } from "@/components/Timer/Timer";
import { Tasks } from "@/components/Tasks/Tasks";
import { useContext } from "react";
import TimerContext from "@/contexts/TimerContext";

const backgrounds = {
  ocean: "bg-ocean",
  catiamatos: "bg-catiamatos",
  material: "bg-material",
  bridge: "bg-bridge",
};

const Dashboard = () => {
  const wallpaper = getUserData("wallpaper");
  const { isFullScreen } = useContext(TimerContext);
  return (
    <div
      className={`w-screen min-h-dvh flex justify-center items-center ${backgrounds[wallpaper]} bg-cover bg-center`}
    >
      <div className={`w-full min-h-dvh gap-5 ${!isFullScreen ? "py-8 px-2 2xl:px-36 2xl:py-16" : ""} flex flex-col lg:flex-row`}>
        <div className="w-full gap-5 flex flex-col">
          <div className="w-full">
            <Profile />
          </div>
          <div className="w-full h-full">
            <Timer />
          </div>
        </div>
        <div className="w-full min-h-full">
          <Tasks />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
