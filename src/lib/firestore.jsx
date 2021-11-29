import { db } from "../secrets";
export const save = (text) => 
  db.collection("noteCollection").doc().set({
    text,
});
export const update = (callback) => db.collection('noteCollection').onSnapshot(callback);
export const deleteNote = (id) => db.collection('noteCollection').doc(id).delete();