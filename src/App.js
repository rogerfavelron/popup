import React from 'react';
import './App.css';
import {PopupWrapper} from './Components/PopupWrapper';
import {Sidebar} from './Components/Sidebar';

const App = () => {
  return (
    <div className="App">
      <Sidebar/>
      <PopupWrapper/>
    </div>
  )
}

export default App
