import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Trading from './pages/solutions/Trading';
import Freight from './pages/solutions/Freight';
import Clearence from './pages/solutions/Clearence';
import CargoInsurance from './pages/solutions/Cargo';
import RacingSolutions from './pages/solutions/Racing';
import Tech from './pages/Tech';
import Partnerships from './pages/Partnerships';
import Contact from './pages/Contact';

import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
                <Route path='/trading-solutions' element={<Trading />} />
            </Routes>
            <Routes>
                <Route path='/freight-forwarding-solutions' element={<Freight />} />
            </Routes>
            <Routes>
                <Route path='/clearance-solutions' element={<Clearence />} />
            </Routes>
            <Routes>
                <Route path='/cargo-insurance-solutions' element={<CargoInsurance />} />
            </Routes>
            <Routes>
                <Route path='/racing-solutions' element={<RacingSolutions />} />
            </Routes>
            <Routes>
                <Route path='/dealo-tech' element={<Tech />} />
            </Routes>
            <Routes>
                <Route path='/partnerships' element={<Partnerships />} />
            </Routes>
            <Routes>
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;
