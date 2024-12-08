import React, { useState } from "react";
import { Container, Alert } from "react-bootstrap";
import FormComponent from "./FormComponent";

const MedicalProviderDashboard = ({ walletAddress }) => {
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const [medicalProfessional, setMedicalProfessional] = useState({
        profId: "",
        name: "",
        position: "",
        experience: "",
    });

    const [medicalLicense, setMedicalLicense] = useState({
        licenseId: "",
        profId: "",
        licenseType: "",
        issueDate: "",
        expiryDate: "",
    });

    const [medicalPractice, setMedicalPractice] = useState({
        practiceId: "",
        patientName: "",
        diagnosis: "",
        treatment: "",
        date: "",
        profId: "",
        providerName: "",
    });

    const medicalProfessionalFields = [
        { label: "Professional ID", name: "profId", type: "text" },
        { label: "Name", name: "name", type: "text" },
        { label: "Position", name: "position", type: "text" },
        { label: "Experience (Years)", name: "experience", type: "number" },
    ];

    const medicalLicenseFields = [
        { label: "License ID", name: "licenseId", type: "text" },
        { label: "Professional ID", name: "profId", type: "text" },
        { label: "License Type", name: "licenseType", type: "text" },
        { label: "Issue Date", name: "issueDate", type: "date" },
        { label: "Expiry Date", name: "expiryDate", type: "date" },
    ];

    const medicalPracticeFields = [
        { label: "Practice ID", name: "practiceId", type: "text" },
        { label: "Patient Name", name: "patientName", type: "text" },
        { label: "Diagnosis", name: "diagnosis", type: "text" },
        { label: "Treatment", name: "treatment", type: "text" },
        { label: "Date", name: "date", type: "date" },
        { label: "Professional ID", name: "profId", type: "text" },
        { label: "Provider Name", name: "providerName", type: "text" },
    ];

    const addMedicalProfessional = (e) => {
        e.preventDefault();
        console.log("Adding Medical Professional:", medicalProfessional);
        setSuccessMessage("Medical Professional added successfully!");
        setErrorMessage("");
        // Web3.js logic goes here
    };

    const addMedicalLicense = (e) => {
        e.preventDefault();
        console.log("Adding Medical License:", medicalLicense);
        setSuccessMessage("Medical License added successfully!");
        setErrorMessage("");
        // Web3.js logic goes here
    };

    const addMedicalPractice = (e) => {
        e.preventDefault();
        console.log("Adding Medical Practice:", medicalPractice);
        setSuccessMessage("Medical Practice added successfully!");
        setErrorMessage("");
        // Web3.js logic goes here
    };

    return (
        <Container>
            <h2>Medical Provider Dashboard</h2>
            <p>Welcome! Your wallet address: {walletAddress}</p>

            {successMessage && <Alert variant="success">{successMessage}</Alert>}
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

            <FormComponent
                title="Add Medical Professional"
                fields={medicalProfessionalFields}
                onSubmit={addMedicalProfessional}
                state={medicalProfessional}
                setState={setMedicalProfessional}
            />

            <FormComponent
                title="Add Medical License"
                fields={medicalLicenseFields}
                onSubmit={addMedicalLicense}
                state={medicalLicense}
                setState={setMedicalLicense}
            />

            <FormComponent
                title="Add Medical Practice"
                fields={medicalPracticeFields}
                onSubmit={addMedicalPractice}
                state={medicalPractice}
                setState={setMedicalPractice}
            />
        </Container>
    );
};

export default MedicalProviderDashboard;
