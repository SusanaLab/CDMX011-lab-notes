//import React, { useEffect } from "react";
import { useState} from "react";
import React, { useEffect, useContext } from "react";
import { save } from "../lib/firestore";
import { editUpdate } from "../lib/firestore";
import { FilesContext } from "../context/filesContext";
//import firebase from 'firebase';
import { db } from "../secrets";
export const Notes = ({ currentNote, email }, props ) => {
  const { 
    userName,
    setUserName 
  } = useContext(FilesContext)
const [notes, setNotes] = useState('');
const [editNote, setEditNote] = useState(false);

const handleInput= e =>  {
  e.preventDefault();
  const {value} = e.target;
  setNotes(value);
  setUserName(email)
}
//guarda las notas
const handleSend = e =>  {
      e.preventDefault();
      
      if(!notes){
        alert("Please write something")
      }
      save(notes, userName).then(() => 
      console.log("se guarda")
    
      ); 
    
    }; 
  //editar post 
  const getData = (id) => {
  var docRef = db.collection("noteCollection").doc(id);
docRef.get().then((doc) => {
    if (doc.exists) {
        const textNote = doc.data().text;
        setNotes(textNote)
        setEditNote(true)
    } else {
    }
}).catch((error) => {
});
}
    useEffect(() => {
      if (currentNote === ''){
        setNotes()

      }
      //tiene un componente seleccionado va a actualizar
      else{
        getData(currentNote)

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
        <h1 id="logUser" >Welcome {email} </h1>
      <div>
      <textarea className = "textarea" type="string"id= "text"  maxLength="200" minLength="20" name="name" placeholder= "Note..." value= {notes}  onChange={handleInput} />
       </div> 
        <button className = "btn-save" type="submit"  id = "id" onClick =  {editNote?handleUpdate:handleSend} >{editNote ? "Update" : "Save" } </button> 
      
       </>
        
        
  )  
};
export default Notes