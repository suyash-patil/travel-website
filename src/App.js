import React from "react";
import Navbar from "./components/Navbar";
import About from './components/About';
import Contact from './components/Contact';
import "./styles/App.css";

function App() {
  return (
    <div>
      <Navbar/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
