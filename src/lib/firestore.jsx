import { db, fb } from "../secrets";
export const save = (text) => 
  db.collection("noteCollection").doc().set({
    text,
    
});
export const update = (callback) => db.collection('noteCollection').onSnapshot(callback);
export const deleteNote = (id) => db.collection('noteCollection').doc(id).delete();
export const editUpdate = (id, note) => db.collection('noteCollection').doc(id).update({ text:note });
export const edit = (id) => db.collection('noteCollection').doc(id).get();
export const  auth = fb.auth();