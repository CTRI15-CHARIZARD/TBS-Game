import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/style.css';

// Creates a container element within document.body
const container = document.createElement('div');
document.body.appendChild(container);

// Renders the app inside the container
const root = createRoot(container);
root.render(<App />);
