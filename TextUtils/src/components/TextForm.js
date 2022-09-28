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
  const handelOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
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
      </div>
      <div className="container my-3">
        <h2>Your text summery here</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>Time to read: {0.008 * text.split(" ").length} min.</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
