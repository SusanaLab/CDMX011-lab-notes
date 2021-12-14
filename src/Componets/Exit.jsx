import React from 'react';
import { useNavigate } from "react-router";  
import firebase from 'firebase';

const Exit = () => {

    // Aqui va algo de logica 
    const navigate = useNavigate();
   
   function handleSend() {
    firebase.auth().signOut()
      .then(() => {
     navigate("/"); 
      }).catch(() => {
        alert('Inicio de sesion exitoso');
      });
 
    }
    // Imprimir en consola despues de hacer click en el boton de  enviar los
    return (
      
          <div id= "div-btn-exit" > 
          <button id= "btn-exit" onClick={handleSend}>
          Exit
          </button>
          </div>
            
      )  
    }
    export default Exit 
    