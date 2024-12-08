import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const UploadForm = () => {
    const [files, setFiles] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFiles((prevFiles) => ({
            ...prevFiles,
            [name]: files[0], 
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (Object.keys(files).length > 0) {
            console.log('Files to upload:', files);

            // Placeholder for uploading files to backend/blockchain
            setSuccessMessage('Files uploaded successfully!');
            setErrorMessage('');
        } else {
            setErrorMessage('Please select at least one file to upload.');
        }
    };

    return (
        <Container>
            <h2>Upload Documents</h2>
            {successMessage && <Alert variant="success">{successMessage}</Alert>}
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formCV">
                    <Form.Label>Medical CV</Form.Label>
                    <Form.Control type="file" name="cv" onChange={handleFileChange} />
                </Form.Group>
                <Form.Group controlId="formRegistration">
                    <Form.Label>Professional Registration Document</Form.Label>
                    <Form.Control type="file" name="registration" onChange={handleFileChange} />
                </Form.Group>
                <Form.Group controlId="formEmployment">
                    <Form.Label>Employment Document</Form.Label>
                    <Form.Control type="file" name="employment" onChange={handleFileChange} />
                </Form.Group>
                <Button type="submit" variant="primary" className="mt-3">
                    Upload
                </Button>
            </Form>
        </Container>
    );
};

export default UploadForm;
