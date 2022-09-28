import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode]= useState('light');
  const toggelMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#3a3962';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
    
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggelMode} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyse below" mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
