import './App.css';
import React,{useState} from 'react'
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


// import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';


function App() {
  const[mode,setMode]=useState("light");   //whether dark mode is enabled or not
  const[text,setText]=useState({
    color:"black"
  });

  const[alert,setAlert]=useState(null);
const showAlert =(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1500);
}

const[blueTheme,setBlueTheme]=useState("white");




const toggleBgBlue = ()=>{
  if(blueTheme==="white"){
    setText({color:"white"});
    setBlueTheme("blue");
    document.body.style.backgroundColor="blue";
  
  }
  else{
    setText({color:"black"});
    setBlueTheme("white");
    document.body.style.backgroundColor="white";
    
  }
}

  const toggleMode =()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="#212529ed";
      setText({color:"white"});

      showAlert("Dark Mode Has Been Enabled","success");

      document.title="Dark Mode Enabled";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      setText({color:"black"});

      showAlert("Light Mode Has Been Enabled","success");
      document.title="TextUtils - Home";
    }
  }
  
  return (
   <>
{/* 
<Router>
  <Routes>
    <Route path="/" element={<About/>}/>
     
  </Routes>
</Router> */}






{/* <Navbar title="textUtils" mode={mode} toggleMode={toggleMode}  toggleBgBlue={toggleBgBlue} />


<TextForm heading="Enter the text to analyze" text={text}/>



<About/>  */}

{/* <Router> */}
 <Navbar title="textUtils" mode={mode} toggleMode={toggleMode}  toggleBgBlue={toggleBgBlue} />
<TextForm heading="Enter the text to analyze" text={text}/>
<Alert alert={alert}/>

  {/* <Routes> */}
    {/* <Route path="/" element={<TextForm heading="Enter the text to analyze" text={text}/>}/> */}
    {/* <Route path="/about" element={<About/>}/> */}
     
  {/* </Routes> */}
{/* </Router> */}


<div className="container">
</div>

   </>
  );
}

export default App;
