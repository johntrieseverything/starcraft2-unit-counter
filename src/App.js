import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import UnitsList from './components/pages/UnitsList';
import UnitCountersPage from './components/pages/UnitCountersPage';
import ArmyCounterPage from './components/pages/ArmyCounterPage';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter basename="">
          <Routes>
            <Route path="/starcraft2-unit-counter" element={<Home />} />
            <Route path="/UnitsList" element={<UnitsList />} />
            <Route path="/UnitCountersPage" element={<UnitCountersPage />} />
            <Route path="/ArmyCounterPage" element={<ArmyCounterPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
