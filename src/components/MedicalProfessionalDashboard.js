import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

const MedicalProfessionalDashboard = ({ walletAddress }) => {
    const [certificates, setCertificates] = useState({})
    const [medicalPractices, setMedicalPractices] = useState([])
    const [allProfessionals, setAllProfessionals] = useState([])
    const [successMessage, setSuccessMessage] = useState("")

    const uploadCertificate = (e) => {
        const { name, files } = e.target
        setCertificates((prev) => ({
            ...prev,
            [name]: files[0],
        }))
    }

    const fetchAllProfessionals = async () => {
        console.log("Placeholder for getAllMedicalProfessionals()")
        // Call Web3.js function to fetch professionals
        const fetchedProfessionals = []
        setAllProfessionals(fetchedProfessionals)
      };

    const fetchMedicalPractices = async () => {
        console.log("Placeholder for getAllMedicalPractices()")
        // Call Web3.js function to fetch professionals
        const fetchedMedicalPractices = [
            { id: 1, diagnosis: "Cold", treatment: "Rest and hydration" },
            { id: 2, diagnosis: "Flu", treatment: "Antiviral medication" },
        ];
        setMedicalPractices(fetchedMedicalPractices)
    }

    const handleUpload = async (e) => {
        e.preventDefault()
        console.log("Certificates uploaded:", certificates)
        setSuccessMessage("Certificates uploaded successfully!")
    }

    return (
        <Container>
            <h2>Medical Professional Dashboard</h2>
            <p>Wallet Address: {walletAddress}</p>

            {/* Upload Certificates */}
            <Form onSubmit={handleUpload}>
                <Form.Group controlId="formCV">
                    <Form.Label>Medical CV</Form.Label>
                    <Form.Control type="file" name="cv" onChange={uploadCertificate} />
                </Form.Group>
                <Form.Group controlId="formRegistration">
                    <Form.Label>Professional Registration</Form.Label>
                    <Form.Control type="file" name="registration" onChange={uploadCertificate} />
                </Form.Group>
                <Button type="submit" variant="primary" className="mt-3">
                    Upload Certificates
                </Button>
            </Form>
            {successMessage && <Alert variant="success">{successMessage}</Alert>}

             {/* View Practices */}
            <Button onClick={fetchMedicalPractices} variant="secondary" className="mt-3">
                View My Practices
            </Button>
            <ul>
                {medicalPractices.map((practice, index) => (
                <li key={index}>{JSON.stringify(practice)}</li>
                ))}
            </ul>

            {/* Browse Other Professionals */}
            <Button onClick={fetchAllProfessionals} variant="info" className="mt-3">
                Browse All Professionals
            </Button>
            <ul>
                {allProfessionals.map((prof, index) => (
                <li key={index}>{JSON.stringify(prof)}</li>
                ))}
            </ul>
        </Container>
    )
}

export default MedicalProfessionalDashboard;