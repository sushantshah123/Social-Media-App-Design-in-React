import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeMode } from './context/themeMode.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeMode>
    <App />
    </ThemeMode>
  </React.StrictMode>,
)
