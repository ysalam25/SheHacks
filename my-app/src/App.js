import {Login, Register} from "./components/login/index"
import {EditProfile} from "./components/login/editProfile";
import React, { Component }  from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
          <code>SheHacks 2022 - Find My Sisters - Alice Sung and Yusra Salam</code> 
      <Login/>
      <Register/>
    </div>
  );
}

export default App;
