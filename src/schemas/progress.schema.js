export const progressSchema = {
  title: "progress",
  description: "Tracks user's daily progress",
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
    date: {
      type: "string",
      format: "date-time",
    },
    isCompleted: {
      type: "boolean",
      default: false,
    },
    streak: {
      type: "number",
      default: 0,
    },
  },
  required: ["id", "userId", "date"],
};
