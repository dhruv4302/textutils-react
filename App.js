import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
//import About from './components/About';
import { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
   const [mode, setMode] = useState('light');
   const [alert,setAlert] = useState(null);

   const showAlert = (message,type )=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },2000)
   }

   const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'blue';
      showAlert("Dark mode has been enabled","success");
      document.title = "textutils -dark mode";
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title = "textutils -light mode";

    }
   }
  return (
    <>
  {/* <Router> */}
      <Navbar title="textutils2" AboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert ={alert}/>
      {/* <Routes> */}
  {/* <Route path="/about" element={<About />} /> */}
  {/* <Route path="/textform" element={<Textform showAlert={showAlert} heading="Enter your text here to analyze" mode={mode} />} /> */}
{/* </Routes> */}
      <div className="container my-3">
      <Textform  showAlert={showAlert} heading="Enter your text here to analyze" mode={mode} />
     {/* <About/> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;