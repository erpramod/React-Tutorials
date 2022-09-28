import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handelUpCase = () => {
    let upperText = text.toUpperCase();
    setText(upperText);
  };
  const handelLowerCase = () => {
    let lowerText = text.toLowerCase();
    setText(lowerText);
  };
  const handelClearCase = () => {
    let clearText = "";
    setText(clearText);
  };

  const handelCopyText = () => {
    let getText = document.getElementById("myBox");
    getText.select();
    navigator.clipboard.writeText(getText.value);
  };

  const handelExtraSpaces = () => {
    let getText = text.split(/[ ]+/);
    setText(getText.join(" "));
  };

  const handelOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "#3a3962" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            className="form-control"
            value={text}
            id="myBox"
            rows="8"
            onChange={handelOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handelUpCase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handelLowerCase}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handelClearCase}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handelCopyText}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handelExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summery here</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>Time to read: {0.008 * text.split(" ").length} min.</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview"}</p>
      </div>
    </>
  );
}
