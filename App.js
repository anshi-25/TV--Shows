// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { Router, Switch, Route } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowSummary from './components/ShowSummary';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<ShowList />} />
          <Route path="/show/:id" element={<ShowSummary />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

