import React from 'react';
import './App.scss';

//components
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Home />
        <About />
        <Skills />
        <Work />
      </div>
    </div>
  );
}

export default App;
