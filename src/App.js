import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Trading from './pages/solutions/Trading';
import Freight from './pages/solutions/Freight';
import './App.css';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
                <Route path='/trading-solutions' element={<Trading />} />
            </Routes>
            <Routes>
                <Route path='/freight-forwarding-solutions' element={<Freight />} />
            </Routes>
        </Router>
    );
}

export default App;
