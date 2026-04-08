import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/base.css'
import './styles/header.css'
import './styles/hero.css'
import './styles/character.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)