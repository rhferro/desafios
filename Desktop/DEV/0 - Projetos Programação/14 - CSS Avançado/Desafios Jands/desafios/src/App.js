import Home from './components/Home.js';
import Menu from './components/Router/Menu.js';

import { Routes, Route } from 'react-router-dom';
import DaysConverter from './components/DaysConverter.js';
import MeterConverter from './components/MeterConverter.js';
import Triangle from './components/Triangle.js';
import YearsInSeconds from './components/YearsInSeconds.js';
import TemperatureConverter from './components/TemperatureConverter.js';

import './global.css';

function App() {
  return (
    <>
      <header className="App-header">
        <h1>Desafios</h1>
        <Menu />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/MeterConverter" element={<MeterConverter />} />
          <Route path="/DaysConverter" element={<DaysConverter />} />
          <Route path="/Triangle" element={<Triangle />} />
          <Route path="/YearsInSeconds" element={<YearsInSeconds />} />
          <Route
            path="/TemperatureConverter"
            element={<TemperatureConverter />}
          />
        </Routes>
      </header>
      <main>{/* <Home /> */}</main>
    </>
  );
}

export default App;
