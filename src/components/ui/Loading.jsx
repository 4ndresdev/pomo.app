import { Spinner } from "@heroui/spinner";

const Loading = () => {
  return (
    <div className="w-full h-full fixed top-0 left-0 z-50">
      <Spinner size="lg" />
    </div>
  );
};

export default Loading;
