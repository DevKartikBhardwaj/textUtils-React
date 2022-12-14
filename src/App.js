import './App.css';
import React,{useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';



function App() {

const [about,updateAbout]=useState({
  backgroundColor:'white',
  color:'black'
})

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
    setText({color:"black"});
    if(mode==="light"){
updateAbout({
  backgroundColor:"#303438",
  color:'white',
  border:'2px solid white'
})

      setMode("dark");
      document.body.style.backgroundColor="#212529ed";
      setText({color:"white"});

      showAlert("Dark Mode Has Been Enabled","success");

      // document.title="Dark Mode Enabled";
    }
    else{
    setText({color:"white"});

      updateAbout({
        backgroundColor:"white",
        color:'black'
      })

      setMode("light");
      document.body.style.backgroundColor="white";
      setText({color:"black"});

      showAlert("Light Mode Has Been Enabled","success");
      // document.title="TextUtils - Home";
    }
  }
  
  return (
   <>
{/* 
<Router>
  <Routes>
    // <Route path="/" element={<About/>}/>
     
  </Routes>
</Router> */}






{/* <Navbar title="textUtils" mode={mode} toggleMode={toggleMode}  toggleBgBlue={toggleBgBlue} />


<TextForm heading="Enter the text to analyze" text={text}/>



<About/>  */}

<Router>
 <Navbar title="textUtils" mode={mode} toggleMode={toggleMode} text={text} toggleBgBlue={toggleBgBlue} />
{/* <TextForm heading="Enter the text to analyze" text={text}/> */}
<Alert alert={alert}/>
{/* <TextForm heading="Enter the text to analyze" text={text}/> */}

   <Routes>
    <Route path="/" element={<TextForm heading="Enter the text to analyze" text={text}/>}/>
    <Route path="/about" element={<About about={about}/>} />
     
  </Routes>
</Router>


<div className="container">
</div>

   </>
  );
}

export default App;
