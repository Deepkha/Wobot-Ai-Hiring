// App.js

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './components/Home';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes><div class="text-center p-3 bg-dark text-white" >
    © 2024 Copyright: 
    <a class="blah"href="https://www.linkedin.com/in/deepesh-khatri-858b28211/"> Deepsh Khatri</a>
  </div></div>
    </Router>
  );
}

export default App;
