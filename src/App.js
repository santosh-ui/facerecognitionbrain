import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      {/*      <ImageLink />
            <FaceRecognition />*/}
    </div>
  );
}

export default App;