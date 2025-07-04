import React from 'react';
import { CheckCircle, Clock, List } from 'lucide-react';
import TaskItem from './TaskItem';
import { Task } from '../types/Task';

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (id: number) => void;
  onDeleteTask: (id: number) => void;
  onEditTask: (task: Task) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleComplete, onDeleteTask, onEditTask }) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-12 sm:py-16">
        <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
          <List className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400 dark:text-gray-500" />
        </div>
        <h3 className="text-lg sm:text-xl font-medium text-gray-900 dark:text-white mb-2">
          No tasks found
        </h3>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 px-4">
          Create your first task to get started with your productivity journey.
        </p>
      </div>
    );
  }

  const completedTasks = tasks.filter(task => task.completed);
  const pendingTasks = tasks.filter(task => !task.completed);

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Pending Tasks */}
      {pendingTasks.length > 0 && (
        <div>
          <div className="flex items-center mb-3 sm:mb-4">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mr-2" />
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
              Pending Tasks ({pendingTasks.length})
            </h3>
          </div>
          <div className="grid gap-3 sm:gap-4">
            {pendingTasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                onToggleComplete={onToggleComplete}
                onDeleteTask={onDeleteTask}
                onEditTask={onEditTask}
              />
            ))}
          </div>
        </div>
      )}

      {/* Completed Tasks */}
      {completedTasks.length > 0 && (
        <div>
          <div className="flex items-center mb-3 sm:mb-4">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2" />
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
              Completed Tasks ({completedTasks.length})
            </h3>
          </div>
          <div className="grid gap-3 sm:gap-4">
            {completedTasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                onToggleComplete={onToggleComplete}
                onDeleteTask={onDeleteTask}
                onEditTask={onEditTask}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskList;