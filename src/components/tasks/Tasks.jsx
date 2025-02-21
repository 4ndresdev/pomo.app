import { TaskForm } from "@/components/tasks/TaskForm";
import CustomDrawerMemo from "../ui/CustomDrawer";

export function Tasks() {
  return (
    <div className="w-full h-full rounded-2xl shadow-2xl p-5 backdrop-blur-md">
      <CustomDrawerMemo>
        <TaskForm />
      </CustomDrawerMemo>
    </div>
  );
}
