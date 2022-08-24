import "./App.css";
import React from "react";
import Home from "./Components/Home";



// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Result from "./Components/Result";

function App() {
  return(
  <div className="App">
    <BrowserRouter>
    <Routes>

    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/:catigory/:catigoryId" element={<Result/>}/>
    </Routes>
  
    </BrowserRouter>
  </div>
  ); 
}

export default App;






















// import Home from "./Components/Home";
// import CharOrNum from './Components/CharOrNum';
// import FullColor from './Components/FullColor';
// <BrowserRouter>
//   <Routes>
//     <Route exact path="/home" element={<Home/>}/>
//     <Route exact path=":char" element={<CharOrNum/>}/>
//     <Route exact path="/:char/:color/:bgc" element={<FullColor/>}/>
//   </Routes>
// </BrowserRouter>