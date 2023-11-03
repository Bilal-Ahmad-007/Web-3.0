import React, {useState} from "react";

export default function TextForm(props) {
  const handleUpClick=()=>{
    // console.log("uperCase is click"+text);
    let newText= text.toUpperCase();
    setText(newText);
  }
  const handleOnClick=()=>{
    // console.log("lower Case is click"+text);
    let newText2= text.toLowerCase();
    setText(newText2);
  }
  
  const handleClearClick=()=>{
    let newText4= "";
    setText(newText4);
  }
  const handleOnChange=(event)=>{
    // console.log("Change is click");
    setText(event.target.value);
  }
  const [text, setText] = useState("");
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          placeholder="Enter text here"
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary m-1"   onClick={handleUpClick}>convert to upper case</button>
      <button className="btn btn-primary m-1" onClick={handleOnClick}>convert to Lower case</button>
      <button className="btn btn-primary m-1" onClick={handleClearClick}>Clear text</button>
    </div>
    <div className="container my-3">
      <h1>Your Text Summery</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
