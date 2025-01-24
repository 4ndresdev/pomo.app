import { addRxPlugin, createRxDatabase } from "rxdb";
import { getRxStorageDexie } from "rxdb/plugins/storage-dexie";
import { wrappedValidateAjvStorage } from "rxdb/plugins/validate-ajv";
import { taskSchema } from "@/schemas/task.schema";
import { userSchema } from "@/schemas/user.schema";
import { progressSchema } from "@/schemas/progress.schema";

let db = null;

export async function createDatabase() {
  if (import.meta.env.MODE === "development") {
    await import("rxdb/plugins/dev-mode").then((module) =>
      addRxPlugin(module.RxDBDevModePlugin)
    );
  }

  if (db) {
    return db;
  }

  db = await createRxDatabase({
    name: "pomo",
    storage: wrappedValidateAjvStorage({
      storage: getRxStorageDexie(),
    }),
    multiInstance: true,
    eventReduce: true,
  });

  const existingCollections = Object.keys(db.collections);

  if (!existingCollections.includes("user")) {
    await db.addCollections({
      user: {
        schema: userSchema,
      },
    });
  }

  if (!existingCollections.includes("tasks")) {
    await db.addCollections({
      tasks: {
        schema: taskSchema,
      },
    });
  }

  if (!existingCollections.includes("progress")) {
    await db.addCollections({
      progress: {
        schema: progressSchema,
      },
    });
  }

  return db;
}
