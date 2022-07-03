import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
// routing
import { RouterFunction } from "./routes";
import { PRICE } from "./consts";
// styles
import "./App.css";

function App() {
  const a = PRICE;
  console.log("a: ", a);
  return (
    <div className="app">
      <BrowserRouter>
       <RouterFunction />    
      </BrowserRouter>
    </div>
  );
}

export default App;
