import React from 'react';
import './App.css';
import PersistentDrawerLeft from './components/Header';
import Home from './components/Home'
import Footer from './components/Footer'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <PersistentDrawerLeft/>
      <Home/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
