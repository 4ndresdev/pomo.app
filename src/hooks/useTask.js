import TaskContext from "@/contexts/TaskContext";
import { setTaskData } from "@/services/db/task.db";
import { getUserData } from "@/services/db/user.db";
import { useState, useContext } from "react";

const useTask = () => {
  const { onOpenChange } = useContext(TaskContext);
  const [loading, setLoading] = useState(false);

  const createTask = async (data) => {
    const userId = await getUserData("id");
    setLoading(true);
    await setTaskData({ ...data, userId });
    setLoading(false);
    onOpenChange();
  };

  return { createTask, loading };
};

export default useTask;
