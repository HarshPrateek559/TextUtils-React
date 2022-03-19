import "./App.css";
import Navbar from "./components/Navbar.js";
import Form from "./components/Form.js";
import Alert from "./components/Alert";
import { useState } from "react";
// import {
//   HashRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";
import About from "./components/About";
function App() {
  const [darkMode, setDarkMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [text, setText] = useState("Enable Dark Mode");
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggle = () => {
    if (darkMode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "#08071c";
      document.body.style.color = "white";
      setText("Enable Light Mode");
      showAlert("Dark Mode has been enabled. Enjoy!", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "#d8eef5";
      document.body.style.color = "black";
      setText("Enable Dark Mode");
      showAlert("Light Mode has been enabled. Enjoy!", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      {/* <Router> */}
      <Navbar mode={darkMode} toggle={toggle} text={text} />
      <Alert alert={alert} />

      <Form
        heading="Enter the text to analyze"
        mode={darkMode}
        showAlert={showAlert}
      />
      {/* <Routes>
            <Route exact path="/" element={<Form
                heading="Enter the text to analyze"
                mode={darkMode}
                showAlert={showAlert}
              />}/>
            <Route exact path="/about" element={<About mode={darkMode}/>} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
