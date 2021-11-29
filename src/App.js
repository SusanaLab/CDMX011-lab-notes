import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Exit from './Componets/Exit.jsx';
import logo from "./assets/logo.png";
import Notes from './Componets/Notes';
import { Note } from './Componets/Note';
function App() {
   //logica de firebase 
   function Home() {
    return (
      <><>

        <nav>+
          <button to="/about">About</button>
        </nav>
      </><Exit /><div id="div-logo"> <img id="img-logo" src={logo} alt="img" className="home-img" /> </div>
      <Notes />
      <Note />
      </>
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

