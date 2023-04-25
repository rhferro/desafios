import DaysConverter from './components/DaysConverter.js';
import MeterConverter from './components/MeterConverter.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';

import './global.css';

function App() {
  return (
    <>
      <header className="App-header">
        <h1>Desafios</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/MeterConverter" element={<MeterConverter />} />
            <Route path="/DaysConverter" element={<DaysConverter />} />
          </Routes>
        </BrowserRouter>
      </header>
      <main>
        {/*  */}
        {/* <MeterConverter />*/}
        {/* <DaysConverter /> */}
      </main>
    </>
  );
}

export default App;
