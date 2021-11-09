import React from 'react';
import './Contact.css';
import { Button, Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="contact-container mt-5 pb-3">
            <div className="p-3 ">
                <h1 className="fw-bold fs-1 mb-4 text-center">24/7 Customar Support</h1>
                <p>We are aware of the importance of offering a fast and effective support when you and your clients most need it. That’s why we offer a wide range of customer services to ensure that you get the best solution no matter the situation. Find out what Bedsonline can do for you and your customers.</p>
                <Button className="btn-danger mt-5 px-5 py-2 fs-5">Contact Us</Button>
            </div>
            
            <div className="p-3">
                <h1 className="fw-bold fs-1 mb-4 text-center">Join The Newslatter</h1>
                <h5 className="text-secondary">To receive our best monthly deals</h5>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="fs-5" >Email address</Form.Label>
                        <Form.Control className="input-field" type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Subscribe
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Contact;