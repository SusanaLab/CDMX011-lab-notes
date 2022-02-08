import React, {useState, createContext} from 'react'
import firebase from 'firebase';

export const FilesContext = createContext();

export const FilesProvider = (props) => {

    const [userName, setUserName] = useState('');
   
    return(
        <FilesContext.Provider value ={{
          userName,
          setUserName
        }}>
            {props.children}
        </FilesContext.Provider>
    )
}