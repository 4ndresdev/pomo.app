import { getUserData } from "@/services/localStorageService";

const Dashboard = () => {
  const wallpaper = getUserData("wallpaper");
  return (
    <div
      className={`w-screen h-svh overflow-hidden flex justify-center items-center bg-[url('@/assets/images/wallpapers/${wallpaper}.webp')] bg-cover bg-center`}
    >
      <div className="container">saS</div>
      <small className="absolute bottom-0 z-10 w-full text-small text-center mb-8 text-white">
        Developed with ❤️️ by <b>4ndresdev</b>
      </small>
    </div>
  );
};

export default Dashboard;
