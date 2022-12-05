import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './styles.css';
import ThemeProvider from './contexts/Theme';
import ShopProvider from './contexts/Shop';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <ThemeProvider>
    <ShopProvider>
        <App />
    </ShopProvider>
    </ThemeProvider>
  // </React.StrictMode>
);