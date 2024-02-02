import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss'
import Login from './Pages/Login';
import Register from './Pages/Register';
import Main from './layout/Main';


function App() {

  return (
<div className="social-medias">

<Routes>
<Route path="/" element={<Register/>} />
<Route path="/register" element={<Register/>}/>
<Route path='/login' element={<Login/>}/>
<Route path="/*" element={<Main/>}/>
</Routes>
</div>
  )
}

export default App
