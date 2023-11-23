import React from 'react';
import logo from "../assets/logo.png";
import Google from "../assets/google.png";
import { useState } from "react";
import firebase from 'firebase';
import { useNavigate } from "react-router";

const Loging = () => {
  const emptyUs = '';
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [userActual, setUserActual] = useState(emptyUs);

  const navigate = useNavigate();
  const handleInputCorreo = e => {
    e.preventDefault();
    const { value } = e.target;
    setCorreo(value);
  }
  const handleInputContraseña = e => {
    e.preventDefault();
    const { value } = e.target;
    setContraseña(value);
  }

  const SingIn = (e) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(correo, contraseña)
      .then((userCredential) => {
        console.log("Signed in");

        navigate("/Home");
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
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
          const email = user.email;
          const photoURL = user.photoURL;
          const emailVerified = user.emailVerified;
          const idDeUsuario = user.uid;
          setUserActual(idDeUsuario)
          console.log("Este es el id en estado :" + userActual + "en const  :" + idDeUsuario)
        }
      }).catch(() => {
        alert('Inicio de sesion exitoso');
      });
  }

  const handleSendSingUp = e => {
    navigate("/SingUp");
  };
  return (
    <div id="div-login">
      <img id="img-logo" src={logo} alt="img" className="logo-img" />
      <div id="login-container">
        <h1 id="sing-up">Log in </h1>
        <form id='#formRegistro'>
          <h2 className="text-login">Email</h2>
          <input className="input-login" id="correo" value={correo} onChange={handleInputCorreo} type="text" placeholder="example@gmail.com" />
          <h2 className="text-login" >Password</h2>
          <input className="input-login" id="contraseña" type="password" name="password" value={contraseña} onChange={handleInputContraseña} placeholder="**********" />
        </form>
        <button className="btn-singup" onClick={SingIn} >Log in</button>
        <h3 id="or">- Or -</h3>
        <button className="btn-singup" onClick={handleSendSingUp} >Sing up</button>
        <img id="img-google" src={Google} alt="img" className="google-img" onClick={handleSend} />
      </div>
    </div>
  );

}
export default Loging;
