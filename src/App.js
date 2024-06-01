import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Aboutus from './components/Aboutus';
import React,{useState} from 'react'
import Alerts from './components/Alerts';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  const[mode,setMode]=useState('light')
  const[alert,setAlert]=useState(null)
  const togglemode = () =>{
    if(mode==='dark'){
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert('Light mode has been enabled','success')
      document.title='TextUtils-LightMode'
    }else{
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showAlert('Dark mode has been enabled','success')
      document.title='TextUtils-DarkMode'
    }
  }
  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  return (
    <>
      <>
      {/* <Router> */}
        <Navbar title="TextUtils" aboutText="About Textutils" mode={mode} toggleMode={togglemode} />
        <Alerts alert={alert} />
        <div className="container my-3">
          {/* <Routes>
            <Route exact path="/about" element={<Aboutus />} /> */}
            {/* <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter your text to analyze:" mode={mode} />} /> */}
          {/* </Routes> */}
          <Textform showAlert={showAlert} heading="Enter your text to analyze:" mode={mode} />
        </div>
      {/* </Router> */}
    </>
      
    </>
  );
}

export default App;
