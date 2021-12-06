import React from 'react';
import logo from '../assets/logo.png'
import Exit from './Exit';
import { Note } from './Note';
import Notes from './Notes';
const Home = () => {
  return (
      <>

    <Exit />
    <div id="div-logo"> <img id="img-logo" src={logo} alt="img" className="home-img" /> </div>
    <Notes />
    <Note />       
    </>
  )
}

export default Home;
