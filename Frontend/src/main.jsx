import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './Context/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode> .....Renders Component 2 times so we use Browser Router
  <BrowserRouter>
                             {/* //Adding context API */}
  <AuthProvider>                  
  <div className=''>
  <App />
  </div>
  </AuthProvider>

  </BrowserRouter>
  // </StrictMode>,
)
