import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FeedbackSystem  from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FeedbackSystem />
  </StrictMode>,
)
