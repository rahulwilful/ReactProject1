import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text Here");
  const handleCONVERT = () => {
    let newText = text.toUpperCase();
    setText(newText);
    console.log(text);
    props.showAlert("Converted To Upper Case", "success");
  };

  const handleconvert = () => {
    let newText = text.toLowerCase();
    setText(newText);
    console.log(text);
    props.showAlert("Converted To Lower Case", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };

  return (
    <>
      <div className="container" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
        <div className="mb-3">
          <h3 htmlFor="myBox" className="form-label">
            {props.heading}
          </h3>
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "#042743" }} id="myBox" rows="7"></textarea>
          <button className="btn btn-primary mx-2 my-2" onClick={handleCONVERT}>
            CONVERT
          </button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleconvert}>
            convert
          </button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>
      <div className="container my-2" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
        <h3>Your Text Summary</h3>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h5>Privew</h5>
        <p>{text.length > 0 ? text : "No Text To Preview"}</p>
      </div>
    </>
  );
}

TextForm.propTypes = { heading: PropTypes.string.isRequired };
TextForm.defaultProps = { heading: "Enter Text" };
