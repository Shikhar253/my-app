import React,{useState} from "react";

const TextForm = () => {
  const handleUpClick = () => {
      let newText=text.toUpperCase();
      setText(newText)
  };
  const handleOnChange=(e)=>{
setText(e.target.value)
  }
  const[text,setText]= useState("original state");

  return (
    <div className="container">
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3" value={text} onChange={handleOnChange}
        ></textarea>
      </div>
      <div class="col-auto">
        <button class="btn btn-primary mb-3" onClick={handleUpClick}>
          uppercase
        </button>
      </div>
    </div>
  );
};

export default TextForm;
