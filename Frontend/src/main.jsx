import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Components/index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById('root')).render(
    
  <BrowserRouter>
    <App />
  </BrowserRouter>

)
