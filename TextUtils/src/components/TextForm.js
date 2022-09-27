import React, {useState} from "react";

export default function TextForm(props) {    
    const[text, setText] = useState("My text is good");

    const handelUpCase = ()=>{
        let upperText = text.toUpperCase();
        setText(upperText);
    }
    const handelOnChange = (event)=>{
        setText(event.target.value);
    }
  return (
    <div>  
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
      <button className="btn btn-primary" onClick={handelUpCase}>Convert to Uppercase</button>
    </div>
  );
}
