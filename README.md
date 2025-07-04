# TaskTracker - Personal Task Management Application

A beautiful, responsive task management application built with React and TypeScript. Stay organized and productive with an intuitive interface that works seamlessly across all devices.

## ✨ Features

### Core Functionality
- **Simple Login System** - Username-only authentication with localStorage persistence
- **Complete Task Management** - Add, edit, delete, and toggle task completion
- **Smart Filtering** - Filter tasks by status (All, Completed, Pending) with real-time counts
- **Powerful Search** - Search tasks by title or description
- **Data Persistence** - All data stored locally with localStorage

### Enhanced Features
- **Task Priorities** - Color-coded priority levels (Low, Medium, High)
- **Task Categories** - Organize tasks by Work, Personal, or Urgent categories
- **Due Dates** - Set due dates with visual alerts for overdue and upcoming tasks
- **Dark Mode** - Beautiful dark theme with system preference detection
- **Responsive Design** - Mobile-first design that works perfectly on all devices
- **Smooth Animations** - Polished micro-interactions and transitions

## 🚀 Live Demo

🔗 **[View Live Application](https://your-deployed-url.com)**

## 📱 Screenshots

### Light Mode
![Light Mode Dashboard](https://via.placeholder.com/800x600/ffffff/333333?text=Light+Mode+Dashboard)

### Dark Mode
![Dark Mode Dashboard](https://via.placeholder.com/800x600/1f2937/ffffff?text=Dark+Mode+Dashboard)

### Mobile View
![Mobile View](https://via.placeholder.com/400x800/ffffff/333333?text=Mobile+View)

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/tasktracker.git
   cd tasktracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Building for Production

```bash
npm run build
```

The build files will be generated in the `dist` directory.

## 🏗️ Project Structure

```
tasktracker/
├── src/
│   ├── components/
│   │   ├── Login.tsx           # Login form component
│   │   ├── TaskDashboard.tsx   # Main dashboard container
│   │   ├── TaskForm.tsx        # Add/Edit task form
│   │   ├── TaskItem.tsx        # Individual task display
│   │   ├── TaskList.tsx        # Task list container
│   │   └── TaskFilter.tsx      # Filter buttons component
│   ├── types/
│   │   └── Task.ts             # TypeScript interfaces
│   ├── utils/
│   │   └── localStorage.ts     # Local storage utilities
│   ├── App.tsx                 # Main app component
│   ├── main.tsx               # Application entry point
│   └── index.css              # Global styles
├── public/
│   └── index.html
└── package.json
```

## 🎨 Design Features

- **Modern UI** - Clean, professional interface with thoughtful spacing
- **Color System** - Comprehensive color palette with semantic meaning
- **Typography** - Carefully chosen fonts with proper hierarchy
- **Responsive Grid** - Flexible layouts that adapt to any screen size
- **Accessibility** - ARIA labels, keyboard navigation, and proper contrast ratios
- **Loading States** - Smooth loading animations for better user experience

## 🔧 Technologies Used

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development with excellent IntelliSense
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Lucide React** - Beautiful, customizable icons
- **Vite** - Fast development build tool
- **localStorage** - Client-side data persistence

## 🎯 Usage Guide

### Getting Started
1. **Login** - Enter any username to access your personal task dashboard
2. **Add Tasks** - Click "Add Task" to create new tasks with priorities and categories
3. **Manage Tasks** - Edit, delete, or mark tasks as complete
4. **Filter & Search** - Use filters and search to find specific tasks
5. **Dark Mode** - Toggle between light and dark themes

### Sample Tasks
The application includes sample tasks to help you get started:
- Complete React assignment (High priority, Work category)
- Review JavaScript concepts (Medium priority, Personal category)

## 🚀 Deployment

This application can be deployed to various platforms:

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the build settings

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.



**Built with ❤️ by [Chandrakant tripathi]**