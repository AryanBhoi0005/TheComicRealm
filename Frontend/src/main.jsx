import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  // <StrictMode> .....Renders Component 2 times so we use Browser Router
  <BrowserRouter>
  <div className=''>
  <App />
  </div>
  </BrowserRouter>
  // </StrictMode>,
)
