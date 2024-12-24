import { getUserData } from "@/services/localStorageService";
import { Profile } from "@/components/Profile/Profile";

const backgrounds = {
  ocean: "bg-ocean",
  catiamatos: "bg-catiamatos",
  material: "bg-material",
  bridge: "bg-bridge",
};

const Dashboard = () => {
  const wallpaper = getUserData("wallpaper");
  return (
    <div
      className={`w-screen h-svh overflow-hidden flex justify-center items-center ${backgrounds[wallpaper]} bg-cover bg-center`}
    >
      <div className="w-full h-full gap-5 py-10 px-5 xl:p-16 flex flex-col lg:flex-row">
        <div className="w-full gap-5 flex flex-col">
          <div className="w-full">
            <Profile />
          </div>
          <div className="w-full h-full">
            <Profile />
          </div>
        </div>
        <div className="w-full h-full">
          <Profile />
        </div>
      </div>
      {/* Footer */}
      <small className="absolute bottom-0 z-10 w-full text-center mb-3 lg:mb-5 text-white">
        Developed with ❤️️ by <b>4ndresdev</b>
      </small>
    </div>
  );
};

export default Dashboard;
