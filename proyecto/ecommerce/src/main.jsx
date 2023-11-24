import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './Components/navBar/NavBar.jsx'
import Items from './Pages/items/Items.jsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <h1></h1>
    <Items/>
  </React.StrictMode>,
)
