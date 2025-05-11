import React from 'react';
import ReactDOM from 'react-dom/client'; // Make sure to import from 'react-dom/client' for React 18
import './index.css';  // Make sure this import exists in index.tsx (or the appropriate entry file)

import { App } from './App'; // Assuming you have an App component

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
