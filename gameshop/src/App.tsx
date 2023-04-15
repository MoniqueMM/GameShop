import React from 'react';
import logo from './logo.svg';
import './App.css';
import Games from "./components/Games";
import "./components/SingleGame";

function App() {
  return (
    <div className="App">
      <h1>Game Store</h1>
      <Games/>
    </div>
  );
}

export default App;
