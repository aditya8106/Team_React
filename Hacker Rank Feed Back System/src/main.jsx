import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FeedbackSystem  from './App'
import Students from './Students'
import ProductPage from './Products'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FeedbackSystem />
    <br></br>
        <br></br>
    <br></br>

    <Students />
        <br></br>
    <br></br>
    <br></br>
    <br></br>
<ProductPage />

  </StrictMode>,
)
