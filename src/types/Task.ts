export enum TaskPriority {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
}

export enum TaskCategory {
  WORK = 'Work',
  PERSONAL = 'Personal',
  URGENT = 'Urgent',
}

export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  priority: TaskPriority;
  category: TaskCategory;
  createdAt: string;
  dueDate?: string;
}