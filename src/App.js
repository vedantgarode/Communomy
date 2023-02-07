import logo from './logo.svg';
import './App.css';
import Sign_up from './Components/Signup/Singup.js';
import Login_user from './Components/Login/Login.js';
import Home from './Components/Home/home.js';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { auth } from './firebase';

function App() {
  const [userName,SetUserName]=useState("");
  useEffect(() => {
    auth.onAuthStateChanged(user=>{
      if(user){
        SetUserName(user.displayName)
      }
      else {
        SetUserName("")
      }
      console.log(user);
    })
  }, [userName])
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home name={userName} />} />
        <Route path="/sign" element={<Sign_up />} />
        <Route path="/login" element={<Login_user />} />
      </Routes>
    </Router>
  );
}

export default App;
