import React from 'react'
import './main.css'
import logo from '../assets/logo.svg'
// import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <> 

        <nav className="wrapper">
                <div className="logo">
                  <h1><a href="/"><img src={logo} alt="NA" /></a></h1>
                </div>
                <div className="nav-links">
                  <ul>
                    <li><a id='link' href="/">Home</a></li>
                    <li><a id='link' href="/Marketplace">Marketplace</a></li>
                    <li><a id='link' href="/Community">Community</a></li>
                    <li><a id='link' href="/Contact">Contact Us</a></li>
               <a href="/" id='cta' ><div className="cta"><button className='btn-cta'>Buy Now</button></div></a> 
                  </ul>
                </div>
          </nav> 
        
    </>
  )
}

export default Header