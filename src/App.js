import React from "react";
import "./App.css";

import Stars from './components/Stars';

function App() {
  return (
    <div className="container">
      <div className="background-element"> </div>{" "}
      <div className="highlight-window">
        <div className="highlight-overlay"> </div>{" "}
      </div>{" "}
      <div className="window">
        <Stars count={1}/>
      </div>{" "}
    </div>
  );
}

export default App;
