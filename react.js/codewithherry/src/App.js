import { useState } from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import Alert from "./components/Alert";
// import About from "./components/About"; 
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const [alert,setAlert]= useState(null)
  const showAlert=(message,type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);

  }

  const toggleMode1 = () => {
    if (mode === 'light'||mode==='success' ||mode==='primary') {
      setMode('dark');
      document.body.style.backgroundColor='black';
      document.body.style.color='white';
      showAlert('Dark mode is enabled','success')
    } else {
     
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert('Light mode is enabled','success')
    }
  };
  const toggleMode2 = () => {
    if (mode === 'light'||mode==='dark' ||mode==='primary') {
      setMode('success');
      document.body.style.backgroundColor='green';
      document.body.style.color='white';
      showAlert('Green mode is enabled','success')
    } else {
     
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert('Light mode is enabled','success')
    }
  };
  const toggleMode3 = () => {
    if (mode === 'light'||mode==='success' ||mode==='dark') {
      setMode('primary');
      document.body.style.backgroundColor='blue';
      document.body.style.color='white';
      showAlert('Blue mode is enabled','success')
    } else {
     
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert('Light mode is enabled','success')
    }
  };
  return (
    <>
      <NavBar title="Text" mode={mode} toggleMode1={toggleMode1}  toggleMode2={toggleMode2}  toggleMode3={toggleMode3}/>
      <Alert alert={alert}/>
      <div className="container ">
        <TextForm showAlert={showAlert} heading="Enter the text to Analyze" mode={mode}  />
      </div>
      {/* <About /> */}
    </>
    
  );
}

export default App;
