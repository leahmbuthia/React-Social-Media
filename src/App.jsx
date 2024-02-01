import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss'
import Navbar from './layout/Navbar'
import Main from './layout/Main'
import Login from '../src/Pages/Login.jsx'
import Register from './Pages/Register.jsx';
import Timeline from './Pages/Timeline/Timeline.jsx';

function App() {

  return (
<div className="social-medias">
<BrowserRouter>
    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/App" element={<App />} />
                       
                        {/* Add more routes as needed */}
                    </Routes>
    {/* <Login/>
    <App /> */}
      <Navbar/> 
  <Main/> 

    </BrowserRouter>

 
</div>
  )
}

export default App
