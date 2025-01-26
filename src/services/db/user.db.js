import { database } from "@/services/db";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

export async function getUserData(key) {
  try {
    const db = await database();
    const user = await db.user.findOne().exec();
    return user ? user[key] : null;
  } catch {
    toast.error("Error getting user data, try again in a few minutes");
    return null;
  }
}

export async function setUserData(data) {
  try {
    const db = await database();
    const user = await db.user.findOne().exec();
    if (user) {
      return await user.patch(data);
    } else {
      return await db.user.insert({
        ...data,
        id: uuidv4(),
      });
    }
  } catch {
    toast.error("Error setting user data, try again in a few minutes");
    return null;
  }
}
