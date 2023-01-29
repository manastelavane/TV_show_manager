import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" exact element={<Landing />} />
                    <Route path="/home" exact element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
