import React from 'react'; // Import React library
import ReactDOM from 'react-dom/client'; // Import ReactDOM for rendering
import App from './App'; // Import the main App component
import './index.css'; // Import global styles

// Create a root for rendering the application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component into the root element
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);