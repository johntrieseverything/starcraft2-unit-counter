import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import UnitsList from './components/pages/UnitsList';
import UnitCountersPage from './components/pages/UnitCountersPage';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter basename="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/UnitsList" element={<UnitsList />} />
            <Route path="/UnitCountersPage" element={<UnitCountersPage />} />
            {/* <Route path="/ContactMe" element={<ContactMe />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
