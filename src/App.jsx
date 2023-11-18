import Navbar from './components/Navbar';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import {About_Us} from './pages/About_Us'
import {Contact_Us} from './pages/Contact_Us'
import {Home} from './pages/Home'
import { Login } from './pages/Login';
import { Create_account } from './pages/Create_account';
function App() {
  return (
  <div className='App'>
  <Navbar></Navbar>
  <Routes>
    <Route path="/about-us" element ={<About_Us/>}/>
    <Route path="/contact-us" element ={<Contact_Us/>}/>
    <Route path="/" element ={<Home/>}/>
    <Route path="/login" element ={<Login/>}/>
    <Route path="/create-account" element ={<Create_account/>}/>
    

  </Routes>
  </div>
  );
}

export default App;
