import React, { useState } from 'react';
import { Container, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const WalletSignIn = ({ setWalletAddress }) => {
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const connectWallet = async () => {
        try {
            // Placeholder for Web3.js integration
            // Your groupmate should initialize Web3 here and handle wallet connection
            // Example:
            // const web3 = new Web3(Web3.givenProvider);
            // const accounts = await web3.eth.requestAccounts();
            // const address = accounts[0];

            const address = '0xPLACEHOLDER'; // Placeholder for connected wallet address
            setWalletAddress(address);
            navigate('/profile');
        } catch (err) {
            console.error(err);
            setError('Failed to connect wallet. Ensure MetaMask or another provider is installed.');
        }
    };

    return (
        <Container>
            <h1>Sign In with Wallet</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            <Button variant="primary" onClick={connectWallet}>
                Connect Wallet
            </Button>
        </Container>
    );
};

export default WalletSignIn;
