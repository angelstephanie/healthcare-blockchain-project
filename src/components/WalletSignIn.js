import React, { useState } from 'react'
import { Container, Button, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const WalletSignIn = ({ setWalletAddress, setUserType }) => {
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const connectWallet = async () => {
        try {
            // Placeholder for Web3.js integration
            // Your groupmate should initialize Web3 here and handle wallet connection
            // Example:
            // const web3 = new Web3(Web3.givenProvider);
            // const accounts = await web3.eth.requestAccounts();
            // const address = accounts[0];

            const walletAddress = '0xPLACEHOLDER' // Placeholder for connected wallet address
            setWalletAddress(walletAddress)
            console.log("Wallet connected:", walletAddress)
        } catch (err) {
            console.error(err)
            setError('Failed to connect wallet. Ensure MetaMask or another provider is installed.')
        }
    };

    const loginAsProvider = async () => {
        await connectWallet()
        setUserType("Provider")
        navigate("/provider-dashboard")
    }

    const loginAsProfessional = async () => {
        await connectWallet()
        setUserType("Professional")
        navigate("/professional-dashboard");
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
        </Container>
    );
};

export default WalletSignIn;
