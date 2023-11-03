import "./App.css";

import NavBar from "./components/NavBar";
// import About from "./components/About";
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <NavBar title="Text" />
      <div className='container '> 
   <TextForm heading="Enter the text to Analyze"/> 
   </div>
      {/* <About /> */}
    </>
  );
}

export default App;
