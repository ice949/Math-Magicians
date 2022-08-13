import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './pages/Home';
import Quote from './pages/Quote';
import Navbar from './components/Navbar';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route
        path="/calculator"
        element={(
          <div className="App">
            {' '}
            <Calculator />
            {' '}
          </div>
)}
      />
      <Route exact path="/" element={<Home />} />
      <Route path="/quote" element={<Quote />} />

    </Routes>
  </Router>
);

export default App;
