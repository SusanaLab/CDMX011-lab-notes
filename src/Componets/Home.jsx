import React from 'react';
import logo from '../assets/logo.png'
import Exit from './Exit';
import { Note } from './Note';
const Home = (props) => {
  return (
      <>
    <Exit />

    <div id="div-logo"> <img id="img-logo" src={logo} alt="img" className="home-img" /> </div>
    <h1>Welcome + {props.email}</h1>
    <Note />       
    </>
  )
}

export default Home;
