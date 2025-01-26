export const userSchema = {
  title: "user",
  description: "Describes a user",
  version: 0,
  primaryKey: "id",
  type: "object",
  properties: {
    id: {
      type: "string",
      maxLength: 100,
    },
    name: {
      type: "string",
    },
    wallpaper: {
      type: "string",
      default: "material",
    },
    avatar: {
      type: "string",
    },
    isFullScreen: {
      type: "boolean",
      default: false,
    },
    isOnboardingCompleted: {
      type: "boolean",
      default: false,
    },
    focusTime: {
      type: "number",
      default: 1500,
    },
    shortBreakTime: {
      type: "number",
      default: 300,
    },
    theme: {
      type: "string",
      default: "light",
    },
  },
  required: ["id", "name"],
};
