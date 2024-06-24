import React from "react";
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';

const Routing =()=>{
    return(
        <>
    <div>
     <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
       
      </Routes>
    </Router>
            </div>
            
        </>
    )

}
export default Routing;

function Home(){
    return (
        <div> Home Page <br /> </div>
    )
}

function About(){
    return (
        <div> About Page </div>
    )
}

function Contact(){
    return (
        <div> Contact Page </div>
    )
}