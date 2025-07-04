import React from 'react';
import { List, CheckCircle, Clock } from 'lucide-react';

interface TaskFilterProps {
  filterStatus: 'all' | 'completed' | 'pending';
  onFilterChange: (status: 'all' | 'completed' | 'pending') => void;
  taskCounts: {
    all: number;
    completed: number;
    pending: number;
  };
}

const TaskFilter: React.FC<TaskFilterProps> = ({ filterStatus, onFilterChange, taskCounts }) => {
  const filters = [
    {
      key: 'all' as const,
      label: 'All',
      icon: List,
      count: taskCounts.all,
      color: 'text-gray-600 dark:text-gray-400',
      activeColor: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    },
    {
      key: 'pending' as const,
      label: 'Pending',
      icon: Clock,
      count: taskCounts.pending,
      color: 'text-gray-600 dark:text-gray-400',
      activeColor: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    },
    {
      key: 'completed' as const,
      label: 'Completed',
      icon: CheckCircle,
      count: taskCounts.completed,
      color: 'text-gray-600 dark:text-gray-400',
      activeColor: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-2 mb-4 sm:mb-6">
      {filters.map((filter) => {
        const Icon = filter.icon;
        const isActive = filterStatus === filter.key;
        
        return (
          <button
            key={filter.key}
            onClick={() => onFilterChange(filter.key)}
            className={`flex items-center justify-center sm:justify-start space-x-2 px-3 py-2 sm:px-4 rounded-lg transition-all duration-200 text-sm sm:text-base ${
              isActive
                ? `${filter.bgColor} ${filter.activeColor} font-medium`
                : `${filter.color} hover:bg-gray-100 dark:hover:bg-gray-700`
            }`}
          >
            <Icon className="w-4 h-4" />
            <span className="hidden sm:inline">{filter.label}</span>
            <span className="sm:hidden">{filter.label.charAt(0)}</span>
            <span className={`px-1.5 py-0.5 sm:px-2 sm:py-1 text-xs rounded-full ${
              isActive
                ? 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-400'
            }`}>
              {filter.count}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default TaskFilter;