const STORAGE_KEY = "tomatifyData";

const defaultData = {
  name: "",
  avatar: "",
  wallpaper: "",
  isOnboardingCompleted: false,
  tasks: [],
};

export const fetchStoredData = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : defaultData;
};

export const saveData = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const setUserData = (key, value) => {
  const data = fetchStoredData();
  data[key] = value;
  saveData(data);
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
      task.completed = completed;
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