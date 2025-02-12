import TaskContext from "@/contexts/TaskContext";
import { Button } from "@heroui/button";
import { Tooltip } from "@heroui/tooltip";
import { Plus } from "lucide-react";
import { useContext } from "react";

const Dock = () => {
  const { onOpen } = useContext(TaskContext);
  return (
    <Tooltip content="Create task" showArrow={true} placement="left">
      <Button
        isIconOnly
        aria-label="Create task"
        color="warning"
        className="fixed bottom-8 right-8"
        size="lg"
        onPress={onOpen}
      >
        <Plus />
      </Button>
    </Tooltip>
  );
};

export default Dock;
