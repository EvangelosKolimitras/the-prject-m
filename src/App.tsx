import React from 'react';
import './App.css';
import { BackgroundImage } from './components/Background/Background';
import { Title } from './components/Title/Title';

function App() {
  return (
    <div className="App">
      <Title />
      <BackgroundImage />
    </div>
  );
}

export default App;
