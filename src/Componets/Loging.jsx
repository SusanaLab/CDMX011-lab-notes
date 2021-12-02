import React from 'react';
import logo from "../assets/logo.png";
import Inicio from "../assets/inicio.png";
import Google from "../assets/google.png";
import firebase from 'firebase';
import { useState} from "react";
 const Loging = () => {
  const emptyNote ="";
   const [correo, setCorreo] = useState(emptyNote);
   const handleInput= e =>  {
    e.preventDefault();
    const {value} = e.target;
    console.log(value);
    setCorreo(value);
  }
  /*const handleSendd = e =>  {
        //console.log('handleSend');
        e.preventDefault();

        console.log("se guarda")
      };
function handleSendCc() {
    const formRegistro = document.querySelector('#formRegistro');
    formRegistro.addEventListener('submit', (e) => {
      e.preventDefault();
      const correo = document.querySelector('#correo').value;
      const contraseña = document.querySelector('#contraseña').value;
      firebase.auth()
        .createUserWithEmailAndPassword(correo, contraseña)
        .then((userCredential) => {
          const user = userCredential.user;
          formRegistro.reset();
          console.log(user);
          // ...
        });
    });*/
 
  function handleSend() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
      .signInWithPopup(provider)
      .then(() => {
      }).catch(() => {
        alert('Inicio de sesion exitoso');
      });
  }
 
  return (
    <div id="div-login">
    <img id="img-inicio" src={Inicio} alt="img" className="inicio-img" />
    <img id="img-logo" src={logo} alt="img" className="logo-img" />
     <h1 id="sing-up">Sing up</h1>
     <form id='#formRegistro'>
     <h2 className ="text-login">Email</h2>
     <input  className ="input-login"  id="correo" type="text" placeholder="example@gmail.com"/>
     <h2 className ="text-login" >Password</h2>
     <input className ="input-login" id="contraseña" type="text" placeholder="**********"/>
     <button id="btn-singup" >SING UP</button>
     </form> 
     <h3 id="or">- Or -</h3>
     <img id="img-google" src={Google} alt="img" className="google-img" onClick = {handleSend}/>
    
    </div>
  );

 }
export default Loging;
