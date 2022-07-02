import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import {Shelve} from "./models/Shelve" 

function App() {
  const [shelve, setShelve] = useState(new Shelve())

  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
