const STORAGE_KEY = "tomatifyData";

const defaultData = {
  name: "",
  avatar: "",
  wallpaper: "material",
  isOnboardingCompleted: false,
  isFullScreen: false,
  tasks: [],
};

export const fetchStoredData = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : defaultData;
  } catch (error) {
    console.error("Error fetching data from local storage", error);
    return defaultData;
  }
};

export const saveData = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const setUserData = (key, value) => {
  const data = fetchStoredData();
  data[key] = value;
  saveData(data);
};

export const getUserData = (key) => {
  const data = fetchStoredData();
  return data[key];
};

export const addTask = (task) => {
  const data = fetchStoredData();
  if (!data.tasks) {
    data.tasks = [];
  }
  data.tasks.push(task);
  saveData(data);
};

export const updatedTaskStatus = (id, completed) => {
  const data = fetchStoredData();
  const tasks = data.tasks.map((task) => {
    if (task.id === id) {
      task.completed = !completed;
    }
    return task;
  });
  data.tasks = tasks;
  saveData(data);
};

export const deleteTask = (id) => {
  const data = fetchStoredData();
  data.tasks = data.tasks.filter((task) => task.id !== id);
  saveData(data);
};
