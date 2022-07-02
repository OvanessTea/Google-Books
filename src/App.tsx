import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import ShelveComponent from "./components/ShelveComponent" 

function App() {
  return (
    <div className="App">
      <Header/>
      <ShelveComponent/>
    </div>
  );
}

export default App;
