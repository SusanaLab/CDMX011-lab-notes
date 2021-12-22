import React from 'react';
import { useNavigate } from "react-router";  
import firebase from 'firebase';

const Exit = () => {

    // Aqui va algo de logica 
    const navigate = useNavigate();
   
   function handleSend() {
    firebase.auth().signOut().then(() => {
       alert("se cerro la sesion") 
       navigate("/"); // Sign-out successful.
    }).catch((error) => {
      alert("ocurrio un error")
    });
 
    }
    //    Imprimir en consola despues de hacer click en el boton de  enviar los
    return (
      
          <div id= "div-btn-exit" > 
          <button id= "btn-exit" onClick={handleSend}>
          Exit
          </button>
          </div>
            
      )  
    }
    export default Exit 
  