import React, { useState } from "react";
import { Container, Alert, Button } from "react-bootstrap";
import FormComponent from "./FormComponent";
import web3 from '../web3';
import myContract from '../myContract';

const MedicalProviderDashboard = ({ walletAddress }) => {
    const [medicalProvider, setMedicalProvider] = useState({
        addr: "",
        providerName: "",
    });

    const [medicalProfessional, setMedicalProfessional] = useState({
        profId: "",
        name: "",
        position: "",
        experience: "",
        addr: ""
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

    const medicalProviderFields = [
        { label: "Wallet Address", name: "addr", type: "text" },
        { label: "Provider Name", name: "providerName", type: "text" },
    ];

    const medicalProfessionalFields = [
        { label: "Professional ID", name: "profId", type: "text" },
        { label: "Name", name: "name", type: "text" },
        { label: "Position", name: "position", type: "text" },
        { label: "Experience (Years)", name: "experience", type: "number" },
        { label: "Wallet Address", name: "addr", type: "text" },
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

    const addMedicalProvider = async (e) => {
        e.preventDefault();
        console.log("Adding Medical Provider:", medicalProvider);
        await myContract.methods.addMedicalProvider(medicalProvider.addr, medicalProvider.providerName).send({
          from: walletAddress
        });
    };

    const addMedicalProfessional = async (e) => {
        e.preventDefault();
        console.log("Adding Medical Professional:", medicalProfessional);
        await myContract.methods.addMedicalProfessional(medicalProfessional.profId, medicalProfessional.name, medicalProfessional.position, medicalProfessional.experience, medicalProfessional.addr).send({
          from: walletAddress
        });
    };

    const addMedicalLicense = async (e) => {
        e.preventDefault();
        console.log("Adding Medical License:", medicalLicense);
        await myContract.methods.addMedicalLicense(medicalLicense.licenseId, medicalLicense.profId, medicalLicense.licenseType, medicalLicense.issueDate, medicalLicense.expiryDate).send({
          from: walletAddress
        });
    };

    const addMedicalPractice = async (e) => {
        e.preventDefault();
        console.log("Adding Medical Practice:", medicalPractice);
        await myContract.methods.addMedicalPractice(medicalPractice.practiceId, medicalPractice.patientName, medicalPractice.diagnosis, medicalPractice.treatment, medicalPractice.date, medicalPractice.profId, medicalPractice.providerName).send({
          from: walletAddress
        });
    };

    return (
        <Container>
            <h2>Medical Provider Dashboard</h2>
            <p>Welcome! Your wallet address: {walletAddress}</p>

            <FormComponent
                title="Add Medical Provider"
                fields={medicalProviderFields}
                onSubmit={addMedicalProvider}
                state={medicalProvider}
                setState={setMedicalProvider}
            />
            <br/>
            <FormComponent
                title="Add Medical Professional"
                fields={medicalProfessionalFields}
                onSubmit={addMedicalProfessional}
                state={medicalProfessional}
                setState={setMedicalProfessional}
            />
            <br/>
            <FormComponent
                title="Add Medical License"
                fields={medicalLicenseFields}
                onSubmit={addMedicalLicense}
                state={medicalLicense}
                setState={setMedicalLicense}
            />
            <br/>
            <FormComponent
                title="Add Medical Practice"
                fields={medicalPracticeFields}
                onSubmit={addMedicalPractice}
                state={medicalPractice}
                setState={setMedicalPractice}
            />
        </Container>
    );
}


export default MedicalProviderDashboard;
