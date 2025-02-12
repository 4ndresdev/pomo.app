import { useState } from "react";
import { Form, Input, Button } from "@heroui/react";

export function TaskForm() {
  const [submitted, setSubmitted] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    setSubmitted(data);
  };

  return (
    <Form
      className="w-full max-w-xs"
      validationBehavior="native"
      onSubmit={onSubmit}
    >
      <Input
        isRequired
        errorMessage="Task name is required"
        label="Task Name"
        labelPlacement="inside"
        name="task"
        placeholder="Enter task name"
        type="text"
        isClearable
        size="md"
        classNames={{
          label: "!text-white",
          input: "bg-transparent !text-white",
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-xl",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "hover:bg-red-500/70",
            "group-data-[focus=true]:bg-default-200/50",
            "dark:group-data-[focus=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
      />
      <Button type="submit" color="warning">
        Create Task
      </Button>
      {submitted && (
        <div className="text-small text-default-500">
          You submitted: <code>{JSON.stringify(submitted)}</code>
        </div>
      )}
    </Form>
  );
}
