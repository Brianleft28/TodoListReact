import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { SprintProvider } from './context/SprintContext.jsx';
import { TaskProvider } from './context/TaskContext.jsx';
import { TaskContextProvider } from './context/FilteredTaskContent.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskContextProvider>
      <SprintProvider>
        <TaskProvider>
          <App />
        </TaskProvider>
      </SprintProvider>
    </TaskContextProvider>
  </React.StrictMode>,
);
