import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from './components/ui/provider';
import {ColorModeProvider} from './components/ui/color-mode';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ColorModeProvider>
  <Provider>
    <App />
  </Provider>
  </ColorModeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
