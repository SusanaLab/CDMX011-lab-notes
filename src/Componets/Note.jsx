import { useEffect } from "react";
import { useState} from "react";
import { db} from "../secrets";
import { update, deleteNote} from "../lib/firestore";
import firebase from "firebase";
import Notes from './Notes';
//import onAuthStateChanged from "firebase";

export const Note = () => {
  //obtener el usuario actual
  /*let userSigned = firebase.auth().currentUser;
  console.log(userSigned)
  const user = firebase.auth().currentUser;
  const logUser = user.email;
   console.log(user.email)*/
  const emptyNote =[];
  const [note, setNote] =  useState(emptyNote);
  //console.log(note);
  const emptyNoteState = '';
const [currentNote, setCurrentNote] =  useState(emptyNoteState);
  //console.log(currentNote);
  //const uid = firebase.auth().currentUser.uid;
//console.log(uid) 

  useEffect(() => {
    const getNotes = firebase.auth().onAuthStateChanged((user) => {
      if (user) { 
    db.collection('noteCollection').where("email", "==", user.email).get()
      update(querySnapshot => {
        const notes = [];
        (querySnapshot).forEach(doc => {
          console.log(doc.id, doc.data())
         notes.push({...doc.data(), id:doc.id });  
        });
        setNote(notes);
        console.log(notes)
      });
  }else {
    console.log("no hay usuario");
  }
});
return getNotes;
}, []);
 

//console.log(note);
//Eliminar las publicaciones de la interfaz y firebase
const handleSendD = e =>  {
  //console.log("funciona el click de eliminar");
  e.preventDefault();
  const id= e.target.dataset.id;
//console.log(e.target.dataset.id);
  deleteNote(id).then(() => 
  console.log()
  );
};
//Editar publicaciones 

  return (
    <>
    <Notes {...{currentNote, note, Notes}} />
    <div className = "div-notas">
    {note.map((item,i) =>  {
      return (<div className = "div-note"  key ={item.id}  data-id={item.id}
      ><div className = "div-text" data-id={item.id} >
     
      <p data-id={item.id}>{ item.text}</p></div>
      <div data-id={item.id}  className= "div-button">
      <button className = "button-edit"  data-id={item.id} onClick = {() =>setCurrentNote(item.id)} >Edit</button>
     <button className = "button-delete"    data-id={item.id} onClick = {handleSendD}>Delete</button>
     </div>
     </div>)})}
     </div>
     </>
  );
}

