//import React, { useEffect } from "react";
import { useState} from "react";
import { db } from "../secrets";
import { save } from "../lib/firestore";
export const Notes = () => {

const emptyNote =[];

const [notes, setNotes] = useState(emptyNote);
//
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
    //Traer todos nuestros documentos
    
return (
      <>
      <div>
      <input type="string"id= "text"  maxlength="200" minlength="20" name="name" placeholder="Note..." value= {notes.value} onChange={handleInput} />
        <button class = "btn-save" type="submit"  id = "id" onClick = {handleSend} > Save </button> 
       </div> 
      
       </>
        
        
  )  
};
export default Notes