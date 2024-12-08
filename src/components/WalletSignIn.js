import React, { useState } from 'react'
import { Container, Button, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import web3 from '../web3';
import myContract from '../myContract';

const WalletSignIn = ({ setWalletAddress, setUserType }) => {
    const [walletAddr, setWalletAddr] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const [showProviderPopup, setShowProviderPopup] = useState(false);


    const connectWallet = async () => {
        try {
            const accounts = await web3.eth.requestAccounts();
            const walletAddress = accounts[0];
            setWalletAddr(walletAddress)
            setWalletAddress(walletAddress)
            console.log("Wallet connected:", walletAddress)
        } catch (err) {
            console.error(err)
            setError('Failed to connect wallet. Ensure MetaMask or another provider is installed.')
        }
    };

    const checkIfProvider = async () => {
        try {
            const isProvider = await myContract.methods.isProvider(walletAddr).call();
            console.log("isProvider? ", isProvider)
            return isProvider
        } catch (error) {
            console.error('Error checking provider status:', error);
        }
    };

    const checkIfProffessional = async () => {
        try {
            const isProfessional = await myContract.methods.isProfessionalAddressExist(walletAddr).call();
            console.log("isProfessional? ", isProfessional)
            return isProfessional
        } catch (error) {
            console.error('Error checking provider status:', error);
        }
    };

    const loginAsProvider = async () => {
        await connectWallet()
        const success = await checkIfProvider()
        if (success) {
          setUserType("Provider")
          navigate("/provider-dashboard")
        } else {
          setShowProviderPopup(true);
        }
    }

    const loginAsProfessional = async () => {
        await connectWallet()
        const success = await checkIfProffessional()
        if (success) {
          setUserType("Professional")
          navigate("/professional-dashboard");
        } else {
          setShowProviderPopup(true);
        }
    }

    return (
        <Container>
            <h1>Login with Wallet</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            <Button variant="primary" onClick={loginAsProvider} className="me-3">
                Login as Medical Provider
            </Button>
            <Button variant="secondary" onClick={loginAsProfessional}>
                Login as Medical Professional
            </Button>
            {showProviderPopup && (
                <div className="provider-popup">
                    <p>You are not registered.</p>
                </div>
            )}
        </Container>
    );
};

export default WalletSignIn;
