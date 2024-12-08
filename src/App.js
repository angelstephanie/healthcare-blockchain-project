import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/Navbar';
import Home from './components/Home';
import WalletSignIn from './components/WalletSignIn';
import MedicalProviderDashboard from './components/MedicalProviderDashboard';
import MedicalProfessionalDashboard from './components/MedicalProfessionalDashboard';

const App = () => {
    const [walletAddress, setWalletAddress] = useState(null)
    const [userType, setUserType] = useState("")

    return (
        <Router>
            <AppNavbar walletAddress={walletAddress} userType={userType} />
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route 
                        path="/signin" 
                        element={<WalletSignIn setWalletAddress={setWalletAddress} setUserType={setUserType} />} 
                    />
                    <Route 
                        path="/provider-dashboard" 
                        element={<MedicalProviderDashboard walletAddress={walletAddress} />} 
                    />
                    <Route 
                        path="/professional-dashboard" 
                        element={<MedicalProfessionalDashboard walletAddress={walletAddress} />} 
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
