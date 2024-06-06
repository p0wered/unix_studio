import React from 'react';
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import HomePage from "./routes/home-page";
import ServicesPage from "./routes/services-page";
import ContactPage from "./routes/contact-page";
import AboutPage from "./routes/about-page";

function NavBar(){
  return(
      <nav>
        <div>
          <p>UNIXSTUDIO</p>
        </div>
        <div className='links'>
          <NavLink to='/'>HOME</NavLink>
          <NavLink to='/services'>SERVICES</NavLink>
          <NavLink to='/contact'>CONTACT</NavLink>
          <NavLink to='/about'>ABOUT</NavLink>
        </div>
        <div className='menu-icon'></div>
      </nav>
  )
}

function App() {
  return (
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/services' element={<ServicesPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
