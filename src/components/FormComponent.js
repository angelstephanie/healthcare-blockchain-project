import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const FormComponent = ({ title, fields, onSubmit, state, setState }) => {
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setState((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    return (
        <Container>
            <h4>{title}</h4>
            <Form onSubmit={onSubmit}>
                {fields.map((field, index) => (
                     <Form.Group controlId={field.name} key={index} className="mb-3">
                        <Form.Label>{field.label}</Form.Label>
                        <Form.Control
                            type={field.type}
                            name={field.name}
                            value={state[field.name] || ""}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                ))}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default FormComponent;