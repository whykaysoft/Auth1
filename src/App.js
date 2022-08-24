import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './home/Home';
import Login from './login/Login.js'
import Dashboard from './dashboard/Dashboard.jsx';
import Footer from './components/Footer';
import "./App.css";
import Logout from './logout/Logout.jsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/Dashboard' element={<Dashboard/>}/>
            <Route path='/logout' element={<Logout/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
