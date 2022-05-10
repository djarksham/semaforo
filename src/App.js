import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import './index.css';

function App() {
  const [selectedColor, setSelectedColor] = useState("red");
  return (
    <div className="luztrafico">
      <div onClick={() => setSelectedColor("red")}
        className={"light red" + (selectedColor === "red" ? " glow" : "")
        }></div>

      <div onClick={() => setSelectedColor("yellow")}
        className={"light yellow" + (selectedColor === "yellow" ? " glow" : "")
        }></div>

      <div onClick={() => setSelectedColor("green")}
        className={"light green" + (selectedColor === "green" ? " glow" : "")
        }></div>

    </div>
  );
}

export default App;
