import {Login, Register} from "./components/login/index"
import React, { Component }  from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">Connecting Women in STEM
        <p>
          <code>SheHacks 2022</code> 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
        >
          Create Profile
        </a>
      </header>
      <Login/>
      <Register/>
    </div>
  );
}

export default App;
