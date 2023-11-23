import { useEffect } from "react";
import { useState } from "react";
import { db } from "../secrets";
import { update, deleteNote } from "../lib/firestore";
import firebase from "firebase";
import Notes from './Notes';
import React from 'react';
export const Note = () => {
  const emptyNote = [];
  const [note, setNote] = useState(emptyNote);

  const emptyNoteState = '';
  const emptyUserState = '';
  const emptyNameState = '';

  const [currentNote, setCurrentNote] = useState(emptyNoteState);
  const [currentUser, setCurrentUser] = useState(emptyUserState);
  const [currentName, setCurrentName] = useState(emptyNameState);

  useEffect(() => {
    const getNotes = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        db.collection('noteCollection').where("email", "==", user.email).get()
        update(querySnapshot => {
          const notes = [];
          (querySnapshot).forEach(doc => {
            notes.push({ ...doc.data(), id: doc.id });
              console.log(doc)
          });
          setNote(notes);
          console.log(notes)
          setCurrentUser(user.uid)
          setCurrentName(user.displayName)
        });
      } else {
        console.log("no hay usuario");
      }
    });
    return getNotes;
  }, []);

  const handleSendD = e => {
    e.preventDefault();
    const id = e.target.dataset.id;
    deleteNote(id).then(() =>
      console.log()
    );
  };

  return (
    <>
      <Notes {...{ currentNote, note, Notes, currentUser, currentName }} />
      <div className="div-notas">
        {note.map((item, i) => {

          if (item.user === currentUser) {
            return (
              <div className="div-note" key={item.id} data-id={item.id}>
                <div className="div-text" data-id={item.id}>
                  <p data-id={item.id}>{item.text}</p>
                </div>
                <div data-id={item.id} className="div-button">
                  <button
                    className="button-edit"
                    data-id={item.id}
                    onClick={() => setCurrentNote(item.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="button-delete"
                    data-id={item.id}
                    onClick={handleSendD}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>

    </>
  );
}

