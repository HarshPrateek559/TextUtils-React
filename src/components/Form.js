import React, { useState } from "react";

export default function Form(props) {
  const [text, setText] = useState("");
  const handleUpCase = () => {
    setText(text.toUpperCase());
    props.showAlert("Text converted to upper case", "success");
  };
  const handleDownCase = () => {
    setText(text.toLowerCase());
    props.showAlert("Text converted to lower case", "success");
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleClear = () => {
    setText("");
    props.showAlert("Text cleared!", "success");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied!","success");
  };
  const handleSpace =()=>{
    let sen = text.replace(/\s+/g, ' ').trim();
    setText(sen);
  }
    return (
    <>
      <div className="container">
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleChange}
            rows="8"
            style={{backgroundColor : props.mode==="dark"?"#202124":"#bcdee9",color : props.mode==="dark"?"white":"black"}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3 my-1" onClick={handleUpCase}>
          Click to UpperCase
        </button>
        <button className="btn btn-primary mx-3 my-1" onClick={handleDownCase}>
          Click to LowerCase
        </button>
        <button className="btn btn-primary mx-3 my-1" onClick={handleClear}>
          Click to Clear
        </button>
        <button className="btn btn-primary mx-3 my-1" onClick={handleCopy}>
          Click to Copy the text
        </button>
        <button className="btn btn-primary mx-3 my-1" onClick={handleSpace}>
          Remove extra space
        </button>
      </div>
      <div className="container">
        <h3>Text Analyzer</h3>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.replace(/\s+/g,"").length} character are there
        </p>
        <p>{Math.round(0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length * 60)} seconds to read</p>
        <h3>Text Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
