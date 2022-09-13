import './App.css';
import React from 'react';
import Header from './pages/Header'
import Home from './pages/home'
import Marketplace from './pages/marketplace';
import Contact from './pages/contact'
import Community from './pages/community'
import {BrowserRouter ,Route,Routes } from 'react-router-dom'
// import { Route } from 'react-router-dom';
function App() {
  return (
   <>
  <Header/>
<BrowserRouter>  
   
   <Routes>
<Route exact path='/' element={<Home/>} />
<Route exact path="Marketplace" element={<Marketplace/>} />
<Route exact path="Community" element={<Community/>} />
<Route exact path="Contact" element={<Contact/>} />
   </Routes>
</BrowserRouter>

   </>
  );
}

export default App;
