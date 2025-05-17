import React from 'react';
import './styles/App.css';
import Header from './components/common/Header.jsx';
import Home from './components/sections/Home.jsx';
import About from './components/sections/About.jsx';

function App() {
  

  return (
    <div>
      <Header />
      <Home />
      <About />
    </div>
  )
}

export default App
