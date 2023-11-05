import { useState } from "react";


function App() {

  const[inPut,setInPut]=useState('');
  const[items,setItems]=useState([]);

  const addItems=()=>{
    setItems([...items,inPut])
  }
  const daleteAll=()=>{
    setItems([])
  }
  return (
   
     <>
     <input type="text" placeholder="Enter your to do" onChange={(e)=>setInPut(e.target.value)} value={inPut}/>
     <button onClick={addItems}>Add Items</button>
     <button onClick={daleteAll}>Dalete All</button>
     <div>
      {items.map((element,index)=>{
        return(
          <h3>{element}</h3>
        )
      })
      
      
      }
     </div>
     
     
     </>
  )
}

export default App;
