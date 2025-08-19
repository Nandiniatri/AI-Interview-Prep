import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DatasContextApi from './contextApi/DatasContectApi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DatasContextApi>
      <App />
    </DatasContextApi>
  </StrictMode>,
)
