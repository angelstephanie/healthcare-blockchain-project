import React from 'react';
import { Container, Alert } from 'react-bootstrap';
import UploadForm from './UploadForm';

const Profile = ({ walletAddress }) => {
    if (!walletAddress) {
        return (
            <Alert variant="warning">
                Please <a href="/signin">sign in with your wallet</a> to access this page.
            </Alert>
        );
    }

    return (
        <Container>
            <h1>Welcome to Your Profile</h1>
            <p>Wallet Address: {walletAddress}</p>
            <UploadForm />
        </Container>
    );
};

export default Profile;
