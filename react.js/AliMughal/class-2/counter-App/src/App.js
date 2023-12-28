// import logo from './logo.svg';
// import './App.css';
// import Button from "./components/button";
// import Cards from "./components/card";

import { useState } from "react";


function App() {


  const [counter,setCounter]=useState(0)
  
  const inc=()=>{
    setCounter(counter+1)
    
  }
  const dec=()=>{
   setCounter(counter-1)
    
  }
  return (
    <>

    <h1>counter app</h1>
    <h1>{counter}</h1>
    <button onClick={inc}>increment</button>
    <button onClick={dec}>dicrement</button>
    {/* <Cards imgurl='https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8fDA%3D' title='Car1' disc='my laptop is great'/>
    <Cards imgurl='https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg ' title='Car2' disc='my laptop is great'/>
    <Cards imgurl='https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D'title='Car3' disc='my laptop is great'/>
    <Cards imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQru34NswTykq1b2sw9Ip-WDgvkae5XtM0qYF3TmtuP&s' title='Car4' disc='my laptop is great'/> */}

     {/* <Button name='bilal'/>
     <Button name='login'/>
     <Button name='signup'/> */}
    </>
  );
}

export default App;
