import React, { useEffect } from "react";
import { useState} from "react";
import { db } from "../secrets";
import { update, deleteNote } from "../lib/firestore";
export const Note = () => {
  //Traer todos nuestros document
  const emptyNote =[];
  const [note, setNote] =  useState(emptyNote);
  useEffect(() => {
    db.collection('noteCollection')
      .get()
      .then(querySnapshot => {
        const notes = [];
        querySnapshot.forEach(doc => {
          //console.log(doc.id, doc.data());
         notes.push({...doc.data(), id:doc.id });  
        });
        setNote(notes);
        console.log(notes)
      });
  }, []);
console.log(note);

/*const handleSend = e =>  {
  //console.log('handleSend');
  e.preventDefault();
 const currentId = (doc.id)
  deleteNote(currentId).then(() => 
  console.log("se borra")
  );
};*/
const handleSendE = e =>  {
  console.log('handleSend');
  e.preventDefault();
const getId = note;
console.log();
};
const handleSendD = e =>  {
  console.log('handleSend');
  e.preventDefault();
const getId = note "";
console.log();
  deleteNote(note.id).then(() => 
  console.log("se borra")
  );
};
  return (
    <div class = "div-notas">
    {note.map((item,i) =>  {
      return (<div class = "div-note" data-id={item.id}
      ><div class = "div-text" data-id={item.id} key = {i}>
      <p data-id={item.id}>{ item.text}</p></div>
      <div data-id={item.id} class= "div-button">
      <button class = "button-edit" data-id={item.id} onClick = {handleSendE}>Edit</button>
     <button class = "button-delete" data-id={item.id} onClick = {handleSendD}>Delete</button>
     </div>
     </div>)})}
     </div>
  );
}

