import React from 'react';
import { useNavigate } from "react-router";
const Exit = () => {
    // Aqui va algo de logica 
    const navigate = useNavigate();
    const handleSubmit = () => {
     navigate("/Login");
           
  };  
    // Imprimir en consola despues de hacer click en el boton de  enviar los
    return (
      
          <div id= "div-btn-exit" > 
          <button id= "btn-exit" onClick={handleSubmit}>
          Exit
          </button>
          </div>
            
      )  
    }
    export default Exit 
    