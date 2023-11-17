import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Alert from "./components/Alert";
import About from "./components/About";
import TextForm from "./components/TextForm";
import React from "react";
import { BrowserRouter as Router, Route ,Routes} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "success"||mode === "dark"||mode === "primary"||mode==="light") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("light mode is enabled", "success");
      document.title = "TextCorrection-light Mode ";

    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode is enabled", "success");
      document.title = "TextCorrection";
    }
  };
  const toggleMode1 = () => {
    if (mode === "success"||mode === "dark"||mode === "primary"||mode==="light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark mode is enabled", "success");
      document.title = "TextCorrection-dark Mode ";

    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode is enabled", "success");
      document.title = "TextCorrection";
    }
  };
  const toggleMode2 = () => {
    if (mode === "success"||mode === "dark"||mode === "primary"||mode==="light") {
      setMode("success");
      document.body.style.backgroundColor = "green";
      document.body.style.color = "white";
      showAlert("Green mode is enabled", "success");
      document.title = "TextCorrection-green Mode ";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode is enabled", "success");
      document.title = "TextCorrection ";
    }
  };
  const toggleMode3 = () => {
    if (mode === "success"||mode === "dark"||mode === "primary"||mode==="light") {
      setMode("primary");
      document.body.style.backgroundColor = "blue";
      document.body.style.color = "white";
      showAlert("Blue mode is enabled", "success");
      document.title = "TextCorrection-Blue Mode ";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode is enabled", "success");
      document.title = "TextCorrection";
    }
  };
  return (
    <>
      <Router>
        <NavBar
          title="TextCorrection"
          mode={mode}
          toggleMode={toggleMode}
          toggleMode1={toggleMode1}
          toggleMode2={toggleMode2}
          toggleMode3={toggleMode3}
        />
        <Alert alert={alert} />
        <div className="container ">
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/" element={ <TextForm
                showAlert={showAlert}
                heading="Enter the text to Analyze"
                mode={mode}
              />} />
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
