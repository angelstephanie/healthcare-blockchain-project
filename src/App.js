import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import WalletSignIn from './components/WalletSignIn';

const App = () => {
    const [walletAddress, setWalletAddress] = useState(null);

    return (
        <Router>
            <AppNavbar walletAddress={walletAddress} />
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route 
                        path="/signin" 
                        element={<WalletSignIn setWalletAddress={setWalletAddress} />} 
                    />
                    <Route 
                        path="/profile" 
                        element={<Profile walletAddress={walletAddress} />} 
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
