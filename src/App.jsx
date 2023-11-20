import Navbar from './components/Navbar';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import {About_Us} from './pages/About_Us'
import {Contact_Us} from './pages/Contact_Us'
import {Home} from './pages/Home'
import { Login } from './pages/Login';
import { Create_account } from './pages/Create_account';
import { Select_allergies } from "./pages/Select_allergies";
import { Profile } from "./pages/Profile";
import { useState } from "react";

function App() {
  const mockUserData = {
    fullName: "Yassine Errakkas",
    email: "yassine.errakkas@email.com",
    // Add more user details as needed
  };
  const mockAllergies = ["Produits de la mer", "Collations sans gluten"];
  const [islogin, changestate] = useState(true);
  return (
    <div className="App">
      <Navbar islogin={islogin}></Navbar>
      <Routes>
        <Route path="/about-us" element={<About_Us />} />
        <Route path="/contact-us" element={<Contact_Us />} />
        <Route path="/" element={<Home islogin={islogin} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<Create_account />} />
        <Route path="/select_allergies" element={<Select_allergies />} />
        <Route
          path="/profile"
          element={<Profile user={mockUserData} allergies={mockAllergies} />}
        />
      </Routes>
    </div>
  );
}

export default App;
