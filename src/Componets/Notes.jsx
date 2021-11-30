//import React, { useEffect } from "react";
import { useState} from "react";
import { save } from "../lib/firestore";
export const Notes = () => {

const emptyNote =[];
//Agregar el estado para ver cambios en el input
const [notes, setNotes] = useState(emptyNote);

//Pasamos nuestro valor a setNotes
const handleInput= e =>  {
  e.preventDefault();
  const {value} = e.target;
  //console.log(name, value);
  setNotes(value);
}
const handleSend = e =>  {
      //console.log('handleSend');
      e.preventDefault();
      
      if(!notes){
        alert("Please write something")
      }
      save(notes).then(() => 
      console.log("se guarda")
      ); 
    
    };
    //Actualizar documentos
    
return (
      <>
      <div>
      <input type="string"id= "text"  maxLength="200" minLength="20" name="name" placeholder= "Note..." value= {notes.value} onChange={handleInput} />
        <button className = "btn-save" type="submit"  id = "id" onClick = {handleSend} > Save </button> 
       </div> 
      
       </>
        
        
  )  
};
export default Notes