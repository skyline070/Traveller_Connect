import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Toaster } from 'react-hot-toast';


const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Toaster position="top-center" />
  </React.StrictMode>,
);
