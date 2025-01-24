export const taskSchema = {
  title: "task",
  description: "Describes a task",
  version: 0,
  primaryKey: "id",
  type: "object",
  properties: {
    id: {
      type: "string",
      maxLength: 100,
    },
    userId: {
      type: "string",
      ref: "user",
    },
    title: {
      type: "string",
    },
    completed: {
      type: "boolean",
      default: false,
    },
    prioriry: {
      type: "string",
      enum: ["low", "medium", "high"],
      default: "low",
    },
    category: {
      type: "string",
      enum: ["work", "personal", "others"],
      default: "others",
    },
  },
  required: ["id", "title", "userId"],
};
