import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import Login from './components/Login';
import TaskDashboard from './components/TaskDashboard';
import { getCurrentUser, clearCurrentUser } from './utils/localStorage';

function App() {
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved user
    const savedUser = getCurrentUser();
    if (savedUser) {
      setCurrentUser(savedUser);
    }

    // Check for dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDarkMode = savedDarkMode ? JSON.parse(savedDarkMode) : systemPrefersDark;
    setIsDarkMode(shouldUseDarkMode);
    
    // Apply dark mode immediately
    if (shouldUseDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    // Apply dark mode class to document
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save preference
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };

  const handleLogin = (username: string) => {
    setCurrentUser(username);
  };

  const handleLogout = () => {
    clearCurrentUser();
    setCurrentUser(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {currentUser ? (
        <div className="flex flex-col min-h-screen">
          <header className="bg-white dark:bg-gray-800 shadow-sm transition-colors duration-300 sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
              <div className="flex justify-between items-center h-14 sm:h-16">
                <div className="flex items-center min-w-0 flex-1">
                  <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white truncate">
                    TaskTracker
                  </h1>
                  <span className="hidden sm:block ml-2 lg:ml-3 text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">
                    Welcome, {currentUser}
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
                  <button
                    onClick={toggleDarkMode}
                    className="p-1.5 sm:p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                    aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                  >
                    {isDarkMode ? <Sun size={18} className="sm:w-5 sm:h-5" /> : <Moon size={18} className="sm:w-5 sm:h-5" />}
                  </button>
                  <button
                    onClick={handleLogout}
                    className="px-2 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </header>
          <main className="flex-1">
            <TaskDashboard />
          </main>
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-screen p-4">
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
            <button
              onClick={toggleDarkMode}
              className="p-1.5 sm:p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <Sun size={18} className="sm:w-5 sm:h-5" /> : <Moon size={18} className="sm:w-5 sm:h-5" />}
            </button>
          </div>
          <Login onLogin={handleLogin} />
        </div>
      )}
    </div>
  );
}

export default App;