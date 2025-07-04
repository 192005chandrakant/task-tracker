import React from 'react';
import { CheckCircle, Circle, Edit, Trash2, Calendar, Flag, Tag, AlertCircle } from 'lucide-react';
import { Task, TaskPriority, TaskCategory } from '../types/Task';

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: number) => void;
  onDeleteTask: (id: number) => void;
  onEditTask: (task: Task) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggleComplete, onDeleteTask, onEditTask }) => {
  const priorityColors = {
    [TaskPriority.LOW]: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    [TaskPriority.MEDIUM]: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    [TaskPriority.HIGH]: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  };

  const categoryColors = {
    [TaskCategory.WORK]: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    [TaskCategory.PERSONAL]: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    [TaskCategory.URGENT]: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const isOverdue = (dueDate?: string) => {
    if (!dueDate) return false;
    return new Date(dueDate) < new Date() && !task.completed;
  };

  const isDueSoon = (dueDate?: string) => {
    if (!dueDate) return false;
    const due = new Date(dueDate);
    const now = new Date();
    const diffDays = Math.ceil((due.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    return diffDays <= 1 && diffDays >= 0 && !task.completed;
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      onDeleteTask(task.id);
    }
  };

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6 transition-all duration-300 hover:shadow-lg ${
      task.completed ? 'opacity-75' : ''
    }`}>
      <div className="flex items-start space-x-3 sm:space-x-4">
        <button
          onClick={() => onToggleComplete(task.id)}
          className={`flex-shrink-0 mt-0.5 sm:mt-1 transition-colors duration-200 ${
            task.completed
              ? 'text-green-500 hover:text-green-600'
              : 'text-gray-400 hover:text-green-500'
          }`}
        >
          {task.completed ? (
            <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          ) : (
            <Circle className="w-5 h-5 sm:w-6 sm:h-6" />
          )}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0 pr-2">
              <h3 className={`text-base sm:text-lg font-semibold text-gray-900 dark:text-white break-words ${
                task.completed ? 'line-through text-gray-500 dark:text-gray-400' : ''
              }`}>
                {task.title}
              </h3>
              {task.description && (
                <p className={`text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1 break-words ${
                  task.completed ? 'line-through' : ''
                }`}>
                  {task.description}
                </p>
              )}
            </div>
            
            <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
              <button
                onClick={() => onEditTask(task)}
                className="p-1.5 sm:p-2 text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <Edit className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
              <button
                onClick={handleDelete}
                className="p-1.5 sm:p-2 text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-200"
              >
                <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-3 sm:mt-4">
            <span className={`inline-flex items-center px-2 py-0.5 sm:px-2.5 sm:py-0.5 rounded-full text-xs font-medium ${priorityColors[task.priority]}`}>
              <Flag className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
              <span className="hidden sm:inline">{task.priority}</span>
              <span className="sm:hidden">{task.priority.charAt(0)}</span>
            </span>
            
            <span className={`inline-flex items-center px-2 py-0.5 sm:px-2.5 sm:py-0.5 rounded-full text-xs font-medium ${categoryColors[task.category]}`}>
              <Tag className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
              <span className="hidden sm:inline">{task.category}</span>
              <span className="sm:hidden">{task.category.charAt(0)}</span>
            </span>

            {task.dueDate && (
              <span className={`inline-flex items-center px-2 py-0.5 sm:px-2.5 sm:py-0.5 rounded-full text-xs font-medium ${
                isOverdue(task.dueDate)
                  ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  : isDueSoon(task.dueDate)
                  ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                  : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
              }`}>
                {isOverdue(task.dueDate) && <AlertCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />}
                <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
                <span className="hidden sm:inline">Due: {new Date(task.dueDate).toLocaleDateString()}</span>
                <span className="sm:hidden">{new Date(task.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
              </span>
            )}
          </div>

          <div className="mt-2 sm:mt-3 text-xs text-gray-500 dark:text-gray-400">
            <span className="hidden sm:inline">Created: {formatDate(task.createdAt)}</span>
            <span className="sm:hidden">{new Date(task.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;