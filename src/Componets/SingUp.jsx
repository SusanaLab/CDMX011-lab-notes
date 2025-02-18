import React from 'react';
import logo from "../assets/logo.png";
import firebase from 'firebase';
import { useState } from "react";
import { useNavigate } from "react-router";

function SingUp() {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
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
  const handleSendCorreo = e => {
    e.preventDefault();

    if (!correo && contraseña) {
      alert("Please write something")
    } else {
      firebase.auth()
        .createUserWithEmailAndPassword(correo, contraseña)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/Home");
          const userSigned = firebase.auth().currentUser;
          if (userSigned) {
            console.log("is signed")
          } else {
            console.log("is not singned")
          }
        }
        );
    }
  };
  return (
    <>
      <div id="div-login">
        <img id="img-logo" src={logo} alt="img" className="logo-img" />
        <h1 id="sing-up">Sing up</h1>
        <form id='#formRegistro'>
          <h2 className="text-login">Email</h2>
          <input className="input-login" id="correo" value={correo} onChange={handleInputCorreo} type="text" placeholder="example@gmail.com" />
          <h2 className="text-login" >Password</h2>
          <input className="input-login" id="contraseña" type="password" name="password" value={contraseña} onChange={handleInputContraseña} placeholder="**********" />
        </form>
        <button id="btn-singup" onClick={handleSendCorreo} >SING UP</button>
      </div>
    </>
  );
}

export default SingUp;