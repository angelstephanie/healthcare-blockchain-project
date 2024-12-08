import React, { useState, useEffect } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { pdfjs } from "react-pdf";
import web3 from '../web3';
import myContract from '../myContract';

const MedicalProfessionalDashboard = () => {

    const [walletAddress, setWalletAddress] = useState('')
    const [userDetails, setUserDetails] = useState({
        profId: 0,
        name: '',
        position: '',
        experience: 0,
        walletAddress: ''
    })
    const [certificates, setCertificates] = useState({})
    const [medicalPractices, setMedicalPractices] = useState([])
    const [medicalProfessionals, setMedicalProfessionals] = useState([])
    const [successMessage, setSuccessMessage] = useState("")

    const fetchDetails = async () => {
        const accounts = await web3.eth.requestAccounts();
        const walletAddress = accounts[0];
        setWalletAddress(walletAddress);
        const fetchUserDetails = await myContract.methods.getMedicalProfessionalByProfAddress(walletAddress).call();
        setUserDetails({
            profId: fetchUserDetails.profId,
            name: fetchUserDetails.name,
            position: fetchUserDetails.position,
            experience: fetchUserDetails.experience,
            walletAddress: fetchUserDetails.addr
        })
      };


    const fetchMedicalProfessionals = async () => {
        const medicalProfessionals = await myContract.methods.getAllMedicalProfessionals().call()
        setMedicalProfessionals(medicalProfessionals)
      };

    const fetchMedicalPractices = async () => {
        console.log("User profID: ", parseInt(userDetails.profId))
        // Call Web3.js function to fetch professionals
        const fetchedMedicalPractices = await myContract.methods.getMedicalPracticesByProfId(parseInt(userDetails.profId)).call()
        setMedicalPractices(fetchedMedicalPractices)
    }

    const handleUpload = async (e) => {
        e.preventDefault()
        console.log("Certificates uploaded:", certificates)
        setSuccessMessage("Certificates uploaded successfully!")
    }

    /////// Upload File
    const [title, setTitle] = useState("");
    const [file, setFile] = useState("");
    const [allImage, setAllImage] = useState(null);
    const [pdfFile, setPdfFile] = useState(null);

    useEffect(() => {
      getPdf();
    }, []);
    const getPdf = async () => {
      const result = await axios.get("http://localhost:4000/get-files");
      console.log(result.data.data);
      setAllImage(result.data.data);
    };

    const submitImage = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("title", title);
      formData.append("file", file);
      console.log(title, file);

      const result = await axios.post(
        "http://localhost:4000/upload-files",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log(result);
      if (result.data.status == "ok") {
        alert("File Uploaded Successfully!");
        getPdf();
      }
    };
    const showPdf = (pdf) => {
      window.open(`http://localhost:4000/files/${pdf}`, "_blank", "noreferrer");
    };

    return (
        <Container>
            <h2>Medical Professional Dashboard</h2>
            <div>
                <h5>User Details</h5>
                <p>Prof ID: {userDetails.profId}</p>
                <p>Name: {userDetails.name}</p>
                <p>Position: {userDetails.position}</p>
                <p>Experience: {userDetails.experience} years</p>
                <p>Wallet Address: {userDetails.walletAddress}</p>
            </div>
            <Button onClick={fetchDetails} variant="primary" className="mt-3">
                View My Most Updated Details
            </Button>
            <br/>
            {/* View Practices */}
           <Button onClick={fetchMedicalPractices} variant="primary" className="mt-3">
               View My Practices
           </Button>
           <ul>
                {medicalPractices.map(practice => (
                    <li key={practice.practiceId}>
                        <p>Practice ID: {practice.practiceId}, Patient Name: {practice.patientName}, Diagnosis: {practice.diagnosis}, Treatment: {practice.treatment}, Date: {practice.date}, Professional ID: {practice.profId}, Provider Name: {practice.providerName}</p>
                    </li>
                ))}
            </ul>

           {/* Browse Other Professionals */}
           <Button onClick={fetchMedicalProfessionals} variant="primary" className="mt-3">
               Browse All Professionals
           </Button>
           <ul>
               {medicalProfessionals.map(professional => (
                 <li key={professional.profId}>
                     <p>Professional ID: {professional.profId}, Name: {professional.name}, Position: {professional.position}, Experience: {professional.experience} years, Address: {professional.addr} </p>
                 </li>
               ))}
            </ul>

           {/* Upload Medical Certs */}
            <form className="formStyle" onSubmit={submitImage}>
              <h4>Upload Medical Certificates</h4>
              <input
                type="text"
                className="form-control"
                placeholder="Title"
                required
                onChange={(e) => setTitle(e.target.value)}
              />
              <br />
              <input
                type="file"
                class="form-control"
                accept="application/pdf"
                required
                onChange={(e) => setFile(e.target.files[0])}
              />
              <br />
              <button class="btn btn-primary" type="submit">
                Upload Certificate
              </button>
            </form>
            <br/>
            <div className="uploaded">
              <h5>Uploaded Certificates:</h5>
              <div className="output-div">
                {allImage == null
                  ? ""
                  : allImage.map((data) => {
                      return (
                        <div className="inner-div">
                          <p>Title: {data.title}</p>
                          <button
                            style={{ marginBottom: '20px' }}
                            className="btn btn-secondary btn-sm"
                            onClick={() => showPdf(data.pdf)}
                          >
                            Show Pdf
                          </button>
                        </div>
                      );
                    })}
              </div>
            </div>

            {successMessage && <Alert variant="success">{successMessage}</Alert>}

        </Container>
    )
}

export default MedicalProfessionalDashboard;
