import React from 'react';
import { Container } from 'react-bootstrap';

const Home = () => {
    return (
        <Container className="mt-5">
            <h1>Welcome to the Medical ID Application</h1>
            <p>
                Our platform helps manage and verify healthcare providers' digital identities,
                ensuring trustworthiness and reducing medical malpractice.
            </p>
        </Container>
    );
};

export default Home;
