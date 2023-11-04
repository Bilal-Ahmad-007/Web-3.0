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

  const toggleMode = () => {
    if (mode === 'light') {
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
  return (
    <>
      <NavBar title="Text" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container ">
        <TextForm showAlert={showAlert} heading="Enter the text to Analyze" mode={mode}  />
      </div>
      {/* <About /> */}
    </>
    
  );
}

export default App;
