import React from 'react';
import logo from "../assets/logo.png";
import Inicio from "../assets/inicio.png";
import Google from "../assets/google.png";
import { useState} from "react";
import firebase from 'firebase';
import { useNavigate } from "react-router";
//import { useState} from "react";
 const Loging = () => {
   const [correo, setCorreo] = useState('');
   const [contraseña, setContraseña] = useState('');
   //const [userId, setUserId] = useState('');
   
  const navigate = useNavigate();
   const handleInputCorreo= e =>  {
    e.preventDefault();
    const {value} = e.target;
    //console.log( value);
    setCorreo(value);
  }
  const handleInputContraseña= e =>  {
    e.preventDefault();
    const {value} = e.target;
    //console.log( value);
    setContraseña(value);
  }
  
  const SingIn = (e) =>  {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(correo, contraseña)
    .then((userCredential) => {
      console.log ("Signed in");
     /*  let user = userCredential.user;
      setUserId(user) */
      navigate("/Home"); 
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorCode, errorMessage)
    });
  }; 
  
  function handleSend() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
      .signInWithPopup(provider)
      .then(() => {
     navigate("/Home"); 
     const user = firebase.auth().currentUser;
if (user !== null) {
  const displayName = user.displayName;
  console.log(displayName)
  const email = user.email;
  console.log(email)
  const photoURL = user.photoURL;
  console.log(photoURL)
  const emailVerified = user.emailVerified;
console.log(emailVerified)
  const uid = user;
  console.log(uid)
}
      }).catch(() => {
        alert('Inicio de sesion exitoso');
      });
    }
    const handleSendSingUp = e =>  {
          navigate("/SingUp"); 
    }; 
  return (
    <div id="div-login">
    <img id="img-inicio" src={Inicio} alt="img" className="inicio-img" />
    <img id="img-logo" src={logo} alt="img" className="logo-img" />
     <h1 id="sing-up">Log in </h1>
     <form id='#formRegistro'>
     <h2 className ="text-login">Email</h2>
     <input  className ="input-login"  id="correo"  value= {correo}  onChange={handleInputCorreo} type="text" placeholder="example@gmail.com"/>
     <h2 className ="text-login" >Password</h2>
     <input className ="input-login" id="contraseña" type="password" name="password" value= {contraseña}  onChange={handleInputContraseña} placeholder="**********"/>
     </form>
      <button className="btn-singup" onClick = {SingIn} >LOG IN</button>
     <h3 id="or">- Or -</h3>
     <button className="btn-singup" onClick = {handleSendSingUp} >SING UP</button>
     <img id="img-google" src={Google} alt="img" className="google-img" onClick = {handleSend}/>
    </div>
  );

  }
export default Loging;
