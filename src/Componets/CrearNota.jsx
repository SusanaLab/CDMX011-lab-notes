import React from "react";
import { useState } from "react";

const CrearNota = () => {
// Aqui va algo de logica 
// Imprimir en consola despues de hacer click en el boton de  enviar los
//objeto donde guardo los valores
const objectStateValues = {
  note: "",
};

const [values, setValues] = useState(objectStateValues);
//De el evento solo guardo el nombre y valor, para luego guardarlo en mi objeto
const handleInput= e =>  {
  const {name, value} = e.target;
  //console.log(name, value);
  objectStateValues.note = (name, value);
  console.log(objectStateValues);
  
}

const handleSend = e =>  {
      e.preventDefault();
      //console.log(values);
     
    }
return (
  
      <form id= "div-post" onSubmit= {handleSend}> 
      <div>
      <input type="string"id= "text" name="name" placeholder="Note..." onChange={handleInput} />
        </div> 
        <button type="submit"  id= "btn-save"> Save </button>
      </form>
        
  )  
}
export default CrearNota
