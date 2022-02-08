import './App.css';
import { Routes, Route} from "react-router-dom";
import Login from './Componets/Login';
import Home from './Componets/Home';
import SingUp from './Componets/SingUp';
import { FilesProvider } from './context/filesContext';
function App() { 
   return (
    <div className="App">
       <FilesProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SingUp" element={<SingUp />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
      </FilesProvider>
    </div>
  );
}

export default App;

