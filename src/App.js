import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import TextForm2 from "./components/TextForm2";
// import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { FaSun, FaMoon } from "react-icons/fa";

// let nextId = 0;

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const [isDark, setIsDark] = useState(false);

  // const [name, setName] = useState("");
  // const [artists, setArtists] = useState([]);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setIsDark(true);
      document.body.style.backgroundColor = "#042743";
      showAlert("DarkMode has been Enabled", "success");
    } else {
      setMode("light");
      setIsDark(false);
      document.body.style.backgroundColor = "white";
      showAlert("LightMode has been Enabled", "success");
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        isDark={isDark}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <About /> */}
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze below"
          mode={mode}
          // setName={setName}
          // name={name}
          // artists={artists}
          // setArtists={setArtists}
          // nextId={nextId}
        />
        {/* <TextForm2 /> */}
      </div>

      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar /> */}
    </>
  );
}

export default App;
