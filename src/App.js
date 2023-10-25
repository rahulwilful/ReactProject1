import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [textColor, setTextColor] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setTextColor("light");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode on", "success");
      document.title = "ConverTing-DarkMode";
      setInterval(() => {
        document.title = "ConverTing-IsTooGood";
      }, 2000);

      setInterval(() => {
        document.title = "ConverTing-InstallNow";
      }, 1500);
    } else {
      setMode("light");
      setTextColor("dark");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode on", "success");
      document.title = "ConverTing-LightMode";
      setInterval(() => {
        document.title = "ConverTing-IsTooGood";
      }, 2000);

      setInterval(() => {
        document.title = "ConverTing-InstallNow";
      }, 1500);
    }
  };
  return (
    <>
      <Navbar title="ConverTing" mode={mode} textColor={textColor} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container my-3">
        <TextForm heading="Enter Your Text Here" showAlert={showAlert} mode={mode} />
      </div>
    </>
  );
}

export default App;
