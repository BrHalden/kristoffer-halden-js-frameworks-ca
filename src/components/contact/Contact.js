import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../../css/contact.css'
import * as yup from "yup";
import { useForm } from "react-hook-form";
import $ from 'jquery'

const schema = yup.object().shape({
	firstName: yup.string().min(2).required("First name is required"),
    lastName: yup.string().min(2).required("Last name is required"),
    email: yup.string().email().required("Valid Email is required"),
    message: yup.string().min(10).required("Message must be 10 or more characters long"),
});

export default function Contact (props) {
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });

    function onSubmit(data) {
        console.log("data", data);
        $('.form-accepted').removeClass('hidden');
    }

    return (
        <Form className="big-margin-top" onSubmit={handleSubmit(onSubmit)}>
            <Row className="align-left">
                <Col>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control name="firstName" placeholder="Type frist name here" ref={register({ required: true })}/>
                    {errors.firstName && <p className="error">First name is required</p>}
                </Col>
                <Col>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control name="lastName" placeholder="Type last name here" ref={register({ required: true })}/>
                    {errors.lastName && <p className="error">Last name is required</p>}
                </Col>
            </Row>
            <Form.Group className="align-left margin-top">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" placeholder="Type Email here" ref={register({ required: true })}/>
                {errors.email && <p className="error">Valid Email is required</p>}
            </Form.Group>
            <Form.Group className="align-left margin-top">
                <Form.Label>Message</Form.Label>
                <Form.Control name="message" as="textarea" rows="4" placeholder="Type your message here..." ref={register({ required: true })}/>
                {errors.message && <p className="error">Message must be 10 or more characters long</p>}
            </Form.Group>
            <Button variant="dark" type="submit">
                Submit
            </Button>
            <p className="hidden form-accepted">Your message was sent</p>
        </Form>
    )
}