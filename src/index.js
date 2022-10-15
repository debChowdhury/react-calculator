import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//the root element
const root = ReactDOM.createRoot(document.getElementById('root'));
//rendering our app component inside the root element
window.onload = () => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}



