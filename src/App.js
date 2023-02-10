import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import UnitsList from './components/pages/UnitsList';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter basename="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/UnitsList" element={<UnitsList />} />
            {/* <Route path="/MyWorks" element={<MyWorks />} />
            <Route path="/ContactMe" element={<ContactMe />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
