import React, {useState} from "react";

export default function TextForm(props) {
  const handleUpClick=()=>{
    // console.log("uperCase is click"+text);
    let newText= text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upperCase", "success")
    
  }
  const handleOnClick=()=>{
    // console.log("lower Case is click"+text);
    let newText2= text.toLowerCase();
    setText(newText2);
    props.showAlert("Converted to lowerCase", "success")
    
  }
  
  const handleClearClick=()=>{
    let newText4= "";
    setText(newText4);
    props.showAlert("Text is cleared", "success")
  }
  const handleCopy=()=>{

    const copy=document.getElementById("myBox");
    copy.select();
   
    navigator.clipboard.writeText(copy.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text is copied", "success")
  }
  const handleSpaces=()=>{
    const space=text.split(/[ ]+/);
    setText(space.join(" "))
    props.showAlert("Extra spaces is Removed", "success")
  }
  const handleOnChange=(event)=>{
    // console.log("Change is click");
    setText(event.target.value);
  }
  const [text, setText] = useState("");
  return (
    <>
    <div className="container ">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === 'dark' ? 'black' : (props.mode === 'success' ? 'green' : (props.mode === 'primary' ? 'blue' : 'white')),
            color: props.mode === 'dark' ? 'white' : (props.mode === 'success' ? 'white' : (props.mode === 'primary' ?' white' : 'black')),
          }}
          
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary m-1"   onClick={handleUpClick}>convert to upper case</button>
      <button  disabled={text.length===0} className="btn btn-primary m-1" onClick={handleOnClick}>convert to Lower case</button>
      <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleCopy}>copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleSpaces}>Remove Extra Spaces</button>
      <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleClearClick}>Clear text</button>
    </div>
    <div className="container my-3">
      <h1>Your Text Summery</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
