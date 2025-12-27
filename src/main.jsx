import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import QuizContext from './context/QuizContext.jsx'
import ScoreContext from './context/ScoreContext.jsx'

createRoot(document.getElementById('root')).render(
   <ScoreContext>
  <QuizContext>
    <App />
  </QuizContext>
  </ScoreContext>
  ,

)
