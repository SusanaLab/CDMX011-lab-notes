import './App.css';
import { Routes, Route} from "react-router-dom";
import Login from './Componets/Login';
import Home from './Componets/Home';

function App() { 
   return (
    <div className="App">
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

