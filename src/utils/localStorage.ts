import { Task } from '../types/Task';

const TASKS_KEY = 'taskTracker_tasks';
const USER_KEY = 'taskTracker_currentUser';

export const getTasks = (): Task[] => {
  try {
    const tasks = localStorage.getItem(TASKS_KEY);
    return tasks ? JSON.parse(tasks) : [];
  } catch (error) {
    console.error('Error loading tasks from localStorage:', error);
    return [];
  }
};

export const saveTasks = (tasks: Task[]): void => {
  try {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error('Error saving tasks to localStorage:', error);
  }
};

export const getCurrentUser = (): string | null => {
  try {
    return localStorage.getItem(USER_KEY);
  } catch (error) {
    console.error('Error loading user from localStorage:', error);
    return null;
  }
};

export const setCurrentUser = (username: string): void => {
  try {
    localStorage.setItem(USER_KEY, username);
  } catch (error) {
    console.error('Error saving user to localStorage:', error);
  }
};

export const clearCurrentUser = (): void => {
  try {
    localStorage.removeItem(USER_KEY);
  } catch (error) {
    console.error('Error clearing user from localStorage:', error);
  }
};