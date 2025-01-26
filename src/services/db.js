import { addRxPlugin, createRxDatabase } from "rxdb";
import { getRxStorageDexie } from "rxdb/plugins/storage-dexie";
import { wrappedValidateAjvStorage } from "rxdb/plugins/validate-ajv";
import { taskSchema } from "@/schemas/task.schema";
import { userSchema } from "@/schemas/user.schema";
import { progressSchema } from "@/schemas/progress.schema";

let db = null;
const DATABASE_NAME = "pomo";

export async function database() {
  if (db) return db;

  if (import.meta.env.MODE === "development") {
    await import("rxdb/plugins/dev-mode").then((module) =>
      addRxPlugin(module.RxDBDevModePlugin)
    );
  }

  db = await createRxDatabase({
    name: DATABASE_NAME,
    storage: wrappedValidateAjvStorage({
      storage: getRxStorageDexie(),
    }),
    multiInstance: true,
    eventReduce: true,
    ignoreDuplicate: true,
  });

  const collections = {
    user: { schema: userSchema },
    tasks: { schema: taskSchema },
    progress: { schema: progressSchema },
  };

  for (const [key, value] of Object.entries(collections)) {
    await db.addCollections({ [key]: value });
  }

  return db;
}
