import React from 'react';
import logo from "../assets/logo.png";
import Inicio from "../assets/inicio.png";
import Google from "../assets/google.png";

const Loging = () => {
  return (
    <div id="div-login">
    <img id="img-inicio" src={Inicio} alt="img" className="inicio-img" />
    <img id="img-logo" src={logo} alt="img" className="logo-img" />
     <h1 id="sing-up">Sing up</h1>
     <h2 className ="text-login">Email</h2>
     <input  className ="input-login" type="text" placeholder="example@gmail.com"/>
     <h2 className ="text-login" >Password</h2>
     <input className ="input-login" type="text" placeholder="**********"/>
     <button id="btn-singup">SING UP</button>
     <h3 id="or">- Or -</h3>
     <img id="img-google" src={Google} alt="img" className="google-img" />
    
    </div>
  );
}

export default Loging;
