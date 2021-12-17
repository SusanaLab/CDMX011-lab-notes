//import React, { useEffect } from "react";
import { useState} from "react";
import React, { useEffect } from "react";
import { save } from "../lib/firestore";
import { editUpdate } from "../lib/firestore";

import { db } from "../secrets";


export const Notes = ({ currentNote }) => {
//console.log(props)
//Agregar el estado para ver cambios en el input
const [notes, setNotes] = useState('');
const [editNote, setEditNote] = useState(false);
//Pasamos nuestro valor a setNotes
const handleInput= e =>  {
  e.preventDefault();
  const {value} = e.target;
  //console.log( value);
  setNotes(value);
}
//guarda las notas
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
  //editar post 
  const getData = (id) => {
  var docRef = db.collection("noteCollection").doc(id);
docRef.get().then((doc) => {
    if (doc.exists) {
        //console.log("Document data:", doc.data());
        //si existe pasaselo a a mi estado actual
        const textNote = doc.data().text;
        //console.log(textNote)
        setNotes(textNote)
        setEditNote(true)
    } else {
        // doc.data() will be undefined in this case
        //console.log("No such document!");
    }
}).catch((error) => {
    //console.log("Error getting document:", error);
});
}
    useEffect(() => {
      //recibo las props que ocupo para editar 
      //console.log(currentNote)
      //si no tiene un componente seleccionado va a guardar
      if (currentNote === ''){
        //alert("vacio")
        setNotes()
        //console.log("guardandoo")
      }
      //tiene un componente seleccionado va a actualizar
      else{
        getData(currentNote)
        //console.log(currentNote)
      //console.log("editando")
      };
      //se ejecuta cuando pasamos el id
      }, [currentNote]);

  const handleUpdate = (id, nota) => {
    const idUpdate = currentNote;
    const textUpdate = notes;
    editUpdate(idUpdate, textUpdate)
//console.log("actualizar")
  }
    
return (
      <>
      <div>
      <textarea className = "textarea" type="string"id= "text"  maxLength="200" minLength="20" name="name" placeholder= "Note..." value= {notes}  onChange={handleInput} />
       </div> 
        <button className = "btn-save" type="submit"  id = "id" onClick =  {editNote?handleUpdate:handleSend} >{editNote ? "Update" : "Save" } </button> 
      
       </>
        
        
  )  
};
export default Notes