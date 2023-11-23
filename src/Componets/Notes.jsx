import { useState } from "react";
import React, { useEffect } from "react";
import { save } from "../lib/firestore";
import { editUpdate } from "../lib/firestore";
import { db } from "../secrets";
export const Notes = ({ currentNote, currentUser, currentName }) => {
  const [notes, setNotes] = useState('');
  const [editNote, setEditNote] = useState(false);
  const [updateComplete, setUpdateComplete] = useState(false);

  const handleInput = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setNotes(value);
  };

  const handleSend = (e) => {
    e.preventDefault();

    if (!notes) {
      alert("Please write something");
      return;
    }

    save(notes, currentUser).then(() => {
      console.log("Note saved: " + notes);
      setUpdateComplete(false); // Cambia el estado para que el botón vuelva a "Save"
      setNotes(''); // Limpia el input
    });
  };

  const getData = (id) => {
    var docRef = db.collection("noteCollection").doc(id);
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const textNote = doc.data().text;
          setNotes(textNote);
          setEditNote(true);
        }
      })
      .catch((error) => {
        console.error("Error getting document:", error);
      });
  };

  const handleUpdate = (id, nota) => {
    const idUpdate = currentNote;
    const textUpdate = notes;
    editUpdate(idUpdate, textUpdate).then(() => {
      setUpdateComplete(true); // Cambia el estado para indicar que la actualización está completa
    });
  };

  useEffect(() => {
    if (currentNote === '') {
      setNotes('');
    } else {
      getData(currentNote);
    }
  }, [currentNote, updateComplete]);

  return (
    <>
      <h1 id="logUser"> Welcome {currentName}</h1>
      <div id="input-content">
        <textarea
          className="textarea"
          type="string"
          id="text"
          maxLength="200"
          minLength="20"
          name="name"
          placeholder="Note..."
          value={notes}
          onChange={handleInput}
        /> 
          <button
        className="btn-save"
        type="submit"
        id="id"
        onClick={editNote ? handleUpdate : handleSend}
      >
        {editNote ? "Update" : "Save"}
      </button>
      </div>
   
    </>
  );
};

export default Notes;
