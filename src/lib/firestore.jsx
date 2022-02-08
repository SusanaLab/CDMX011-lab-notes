import { db, fb } from "../secrets";
export const save = (text, userRef) => 
  db.collection("blogNotas").doc().set({
    text,
    userRef,
    
});
export const update = (callback) => db.collection('blogNotas').onSnapshot(callback);
export const deleteNote = (id) => db.collection('blogNotas').doc(id).delete();
export const editUpdate = (id, note) => db.collection('blogNotas').doc(id).update({ text:note });
export const edit = (id) => db.collection('blogNotas').doc(id).get();
export const  auth = fb.auth();