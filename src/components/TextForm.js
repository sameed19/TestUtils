import React, { useState } from "react";
// import { createGlobalStyle } from "styled-components";

function TextForm(props) {
  const handleUpClick = () => {
    console.log("Upper case was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLwClick = () => {
    console.log("Lower case was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const clearText = () => {
    console.log("clear text");
    let newText = "";
    setText(newText);
    props.showAlert("Clear the Textbox", "success");
  };

  const replaceText = () => {
    console.log("Remove Extra Spaces");
    let newText = text.replace(/\s/g, "");
    setText(newText);
    props.showAlert("Remove the extra spaces", "success");
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  // const addText = () => {
  //   console.log("add text");

  //   let newText = text;
  //   setText(newText);
  //   artists.push({
  //     id: nextId++,
  //     text: text,
  //   });
  // };

  // props.setArtists(
  //   // Replace the state
  //   [
  //     // with a new array
  //     ...artists, // that contains all the old items
  //     { id: nextId++, name: name }, // and one new item at the end
  //   ]
  // );

  const [text, setText] = useState("Enter the Text");

  let nextId = 0;

  // setArtists(
  //   // Replace the state
  //   [
  //     // with a new array
  //     ...artists, // that contains all the old items
  //     { id: nextId++, text: text }, // and one new item at the end
  //   ]
  // );

  // const [name, setName] = useState("");
  // const [artists, setArtists] = useState([]);

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "#042743" : "white",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "#042743" : "white",
            }}
            id="myBox"
            rows="9"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>

        <button className="btn btn-warning mx-1" onClick={handleLwClick}>
          Convert to Lowercase
        </button>

        <button className="btn btn-danger mx-1" onClick={clearText}>
          Clear Text
        </button>

        <button className="btn btn-success mx-1" onClick={replaceText}>
          Remove Extra Spaces
        </button>
        {/* <button
          onClick={ 
            //   () => {
            //   setName("");
            //   artists.push({
            //     id: nextId++,
            //     name: name,
            //   });
            // }
            addText
          }
        >
          Add
        </button>*/}
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "light" ? "#042743" : "white",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>

      {/* <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul> */}
    </>
  );
}

export default TextForm;
