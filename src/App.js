import './App.css';
import { Routes, Route} from "react-router-dom";
import Login from './Componets/Login';
import Home from './Componets/Home';
import SingUp from './Componets/SingUp';

function App() { 
   return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SingUp" element={<SingUp />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

