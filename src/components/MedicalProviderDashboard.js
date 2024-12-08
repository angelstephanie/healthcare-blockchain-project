import React from "react";
import { Container, Button } from "react-bootstrap";

const MedicalProviderDashboard = ({ walletAddress }) => {
    const addMedicalProvider = async () => {
        console.log("Placeholder for addMedicalProvider()")
        // Web3.js
    }

    return (
        <Container>
            <h2>Medical Provider Dashboard</h2>
            <p>Welcome! Your wallet address: {walletAddress}</p>
            <Button variant="primary" onClick={addMedicalProvider}>
                Add Medical Provider
            </Button>
        </Container>
    );
}


export default MedicalProviderDashboard;