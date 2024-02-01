import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from '../src/Pages/Login.jsx'
import Register from './Pages/Register.jsx';
import Timeline from './Pages/Timeline/Timeline.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <App/>
  </React.StrictMode>,
)
