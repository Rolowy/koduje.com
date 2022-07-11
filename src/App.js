import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Info from './Components/Info/info'
import Navigation from './Components/Navigation/nav';

function App() {
  return (
    <>
    <Router>
      <Navigation />
      <Routes>
        <Route path='info' element={<Info name="Info"/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
