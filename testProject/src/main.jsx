import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import burgerModal from './js/Modal'
import { themeColor } from './js/index';

import { changeFlag } from './js/flag';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
themeColor()

burgerModal()
changeFlag()
