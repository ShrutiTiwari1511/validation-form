
import './App.css';
import Home from './Components/Home';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home /> }></Route>
        <Route path='/register' element={<LoginSignup />}></Route>
        <Route path='/login' element={<LoginSignup />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
    
    
  )
}

export default App;
