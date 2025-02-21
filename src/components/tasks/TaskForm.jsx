import {
  Form,
  Button,
  Select,
  SelectItem,
  Textarea,
  Input,
} from "@heroui/react";
import useTask from "@/hooks/useTask";

export function TaskForm() {
  const { createTask, loading } = useTask();
  const onSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    createTask(data);
  };

  return (
    <Form
      className="w-full justify-center items-center space-y-4"
      validationBehavior="native"
      onSubmit={onSubmit}
    >
      <div className="w-full flex flex-col gap-4 max-w-md">
        <Input
          errorMessage="Task name is required"
          label="Task Name"
          labelPlacement="inside"
          name="task"
          placeholder="Write your task"
          size="lg"
          radius="sm"
          autoComplete="off"
          isRequired
        />
        <Textarea
          name="detail"
          label="Detail"
          placeholder="Enter your task details"
          errorMessage="Task detail is required"
          labelPlacement="inside"
          size="lg"
          required
        />

        <div className="grid grid-cols-2 gap-4">
          <Select
            name="priority"
            label="Priority"
            placeholder="Select a priority"
            defaultSelectedKeys={["low"]}
            required
          >
            <SelectItem key="low">Low</SelectItem>
            <SelectItem key="medium">Medium</SelectItem>
            <SelectItem key="high">High</SelectItem>
          </Select>
          <Select
            name="category"
            label="Category"
            placeholder="Select a category"
            defaultSelectedKeys={["work"]}
            required
          >
            <SelectItem key="work">Work</SelectItem>
            <SelectItem key="personal">Personal</SelectItem>
            <SelectItem key="others">Others</SelectItem>
          </Select>
        </div>

        <div className="flex gap-4">
          <Button
            className="w-full"
            color="primary"
            type="submit"
            isLoading={loading}
          >
            Create task
          </Button>
          <Button type="reset" variant="bordered">
            Reset
          </Button>
        </div>
      </div>
    </Form>
  );
}
