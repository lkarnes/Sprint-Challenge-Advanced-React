import React, {useState} from 'react';
import Users from './components/Users';
import {useDarkMode} from './useDarkMode'
import './App.css';



function App() {
  const [darkMode, setDarkMode] = useDarkMode(['darkmode', true]);
  
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <div className="App">
      <h2>test</h2>
      <button onClick={toggleMode}>Click</button>
      <Users/>
    </div>
  );
}

export default App;
