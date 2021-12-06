import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScotlandHolidays from './pages/Holidays/ScotlandHolidays';
import EnglandHolydays from './pages/Holidays/EnglandHolydays';
import IrelandHolydays from './pages/Holidays/IrelandHolydays';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scotland" element={<ScotlandHolidays />} />
          <Route path="/england" element={<EnglandHolydays />} />
          <Route path="/ireland" element={<IrelandHolydays />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
