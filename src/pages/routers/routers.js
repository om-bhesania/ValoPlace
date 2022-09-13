import React from 'react'
import { Route,Routes  } from 'react-router-dom'
import Home from '../home';
import Marketplace from '../marketplace';
import Contact from '../contact';
import Community from '../community';
const routers = () => {
  return (
    <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/Marketplace' element={<Marketplace/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Community' element={<Community/>}/>
    </Routes>
  )
}

export default routers;