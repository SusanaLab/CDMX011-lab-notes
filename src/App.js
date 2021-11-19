import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import CrearNota from './Componets/CrearNota.jsx';
import Exit from './Componets/Exit';
import logo from "./assets/logo.png";
function App() {
   //logica de firebase 
   function Home() {
    return (
      <><>

        <nav>+
          <Link to="/about">About</Link>
        </nav>
      </><Exit /><div id="div-logo"> <img id="img-logo" src={logo} alt="img" className="home-img" /> </div>
      <CrearNota /></>
    );
  }
  
  function About() {
    return (
      <>
        <main>
          <h2> Aqui va el login </h2>
         
        </main>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </>
    );
  } 
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    
     
    </div>
  );
}
export default App;

