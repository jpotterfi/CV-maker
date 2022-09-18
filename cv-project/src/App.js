import "./App.css";
import Header from "./Components/Header";
import "./Header.css";
import Personal from "./Components/Personal";
import React from "react";

function App() {
  return (
    <div className="App">
      <Header mode="Entry Mode" />
      <Personal />
    </div>
  );
}

export default App;
