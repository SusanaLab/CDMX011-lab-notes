import { useEffect } from "react";
import { useState} from "react";
import { db} from "../secrets";
import { useContext } from "react";
import { update, deleteNote} from "../lib/firestore";
import { FilesContext } from "../context/filesContext";
import firebase from "firebase";
import Notes from './Notes';


export const Note = (props) => {
 const { userName} = useContext(FilesContext);
  console.log( userName); 
  const emptyNote =[];
  const emptyNoteState = '';
  const [note, setNote] =  useState(emptyNote);
  const [email, setEmail] =  useState("");
  const [currentNote, setCurrentNote] =  useState(emptyNoteState);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    let uid = user.email;
    setEmail(uid)
    console.log(uid)
    const displayName = user.displayName;
    console.log(displayName)
    const email = user.email;
    console.log(email)
    const photoURL = user.photoURL;
    console.log(photoURL)
    // ...
  } else {

  }
});
  useEffect(() => {
    const getNotes = firebase.auth().onAuthStateChanged((user) => {

      if (user) { 
    db.collection('blogNotas').where("usuario", "==", userName).get()
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

const handleSendD = e =>  {
  e.preventDefault();
  const id= e.target.dataset.id;
  deleteNote(id).then(() => 
  console.log()
  );
};
//Editar publicaciones 

  return (
    <>
    <Notes {...{currentNote, note, Notes, email}} />
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

