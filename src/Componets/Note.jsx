import React, { useEffect } from "react";
import { useState} from "react";
import { db } from "../secrets";
import { update, deleteNote, editNote } from "../lib/firestore";
export const Note = () => {
  //Traer todos nuestros documentos
  const emptyNote =[];
  const [note, setNote] =  useState(emptyNote);
  const [noteEdit, setNoteEdit] =  useState(note);
  useEffect(() => {
    db.collection('noteCollection')
      .get()
      //Actualizamos nuestras notas al instante
      update(querySnapshot => {
        const notes = [];
        (querySnapshot).forEach(doc => {
          //console.log(doc.id, doc.data());
         notes.push({...doc.data(), id:doc.id });  
        });
        setNote(notes);
        //console.log(notes)
      });
  }, []);
//console.log(note);
//Eliminar las publicaciones de la interfaz y firebase
const handleSendD = e =>  {
  console.log("funciona el click de eliminar");
  e.preventDefault();
  const id= e.target.dataset.id;
//console.log(e.target.dataset.id);
  deleteNote(id).then(() => 
  console.log()
  );
};
//Editar publicaciones 
const handleSendE = e =>  {
  //console.log("funciona el click de eliminar");
  e.preventDefault();
  const id = e.target.dataset.id;
console.log(id);

};
  return (
    <div className = "div-notas">
    {note.map((item,i) =>  {
      return (<div className = "div-note" data-id={item.id}
      ><div className = "div-text" data-id={item.id} >
      <p data-id={item.id}>{ item.text}</p></div>
      <div data-id={item.id} className= "div-button">
      <button className = "button-edit" data-id={item.id} onClick = {handleSendE} >Edit</button>
     <button className = "button-delete"  data-id={item.id} onClick = {handleSendD}>Delete</button>
     </div>
     </div>)})}
     </div>
  );
}

