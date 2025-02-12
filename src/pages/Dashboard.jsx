import { useContext, useEffect, useState } from "react";
import { getUserData } from "@/services/db/user.db";
import { Profile } from "@/components/profile/Profile";
import { Timer } from "@/components/timer/Timer";
import { Tasks } from "@/components/tasks/Tasks";
import TimerContext from "@/contexts/TimerContext";
import Loading from "@/components/ui/Loading";
import { BACKGROUNDS } from "@/constants/styleConstants";
import Dock from "@/components/ui/Dock";

const Dashboard = () => {
  const [wallpaper, setWallpaper] = useState(null);
  const { isFullScreen } = useContext(TimerContext);

  useEffect(() => {
    async function fetchData() {
      const storedWallpaper = await getUserData("wallpaper");
      if (storedWallpaper) {
        setWallpaper(storedWallpaper);
      }
    }
    fetchData();
  }, []);

  if (!wallpaper) return <Loading />;

  return (
    <div
      className={`w-screen min-h-dvh flex justify-center items-center ${BACKGROUNDS[wallpaper]} bg-cover bg-center`}
    >
      <div
        className={`w-full min-h-dvh gap-5 ${
          !isFullScreen ? "py-8 px-2 container" : ""
        } flex flex-col lg:flex-row`}
      >
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
      <Dock />
    </div>
  );
};

export default Dashboard;
