import { database } from "@/services/db";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

export async function getAllTasks(key, all = false) {
  try {
    const db = await database();
    const user = await db.user.findOne().exec();

    if (all) return user;

    return user ? user[key] : null;
  } catch {
    toast.error("Error getting user data, try again in a few minutes");
    return null;
  }
}

export async function setTaskData(data) {
  try {
    const db = await database();
    await db.tasks.insert({
      ...data,
      id: uuidv4(),
    });
  } catch {
    toast.error("Error creating task, try again in a few minutes");
    return null;
  }
}
