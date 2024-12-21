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
      className={`w-screen h-screen overflow-hidden flex justify-center items-center ${backgrounds[wallpaper]} bg-cover bg-center`}
    >
      <div className="w-full h-full grid grid-cols-2 gap-5 p-10">
        <div className="w-full h-1/3">
          <Profile />
        </div>
        <div className="right w-full text-white">Tasks container</div>
      </div>
      {/* Footer */}
      <small className="absolute bottom-0 z-10 w-full text-center mb-8 text-white">
        Developed with ❤️️ by <b>4ndresdev</b>
      </small>
    </div>
  );
};

export default Dashboard;
