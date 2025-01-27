import { Spinner } from "@heroui/spinner";

const Loading = () => {
  return (
    <div className="w-full h-full fixed left-0 top-0 text-black z-50 flex justify-center items-center backdrop-blur-md">
      <Spinner />
    </div>
  );
};

export default Loading;
