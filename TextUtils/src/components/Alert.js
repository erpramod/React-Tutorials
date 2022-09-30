import React from "react";

export default function Alert(props) {
  const captilize = (text)=>{
    let lower = text.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    props.alert &&
    <div>
      <div
        className={`alert alert-${props.alert.type} d-flex align-items-center`}
        role="alert"
      >       
        <div><strong>{captilize(props.alert.type)}</strong>: {props.alert.msg}</div>
      </div>
    </div>
  );
}
