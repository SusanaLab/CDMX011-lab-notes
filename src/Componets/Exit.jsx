import React from 'react';
import { useNavigate } from "react-router";
import firebase from 'firebase';

const Exit = () => {

  const navigate = useNavigate();
  function handleSend() {
    firebase.auth().signOut().then(() => {
      alert("se cerro la sesion")
      navigate("/");
    }).catch((error) => {
      alert("ocurrio un error")
    });
  }

  return (
    <div id="div-btn-exit" >
      <button id="btn-exit" onClick={handleSend}>
        Exit
      </button>
    </div>
  )
}
export default Exit
