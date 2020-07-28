//TODO fix google map on small device
//TODO don't allow form to submit if validation errors exist.

import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Col, Button, FormFeedback } from 'reactstrap';

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            senderName: '',
            email: '',
            feedback: '',
            touched: {
                senderName: false,
                email: false,
                feedback: false
            }
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validate(senderName, email, feedback) {
        const errors = {
            senderName: '',
            email: '',
            feedback: ''
        };

        if (this.state.touched.senderName) {
            if (senderName.length < 2) {
                errors.senderName = 'Name must be at least 2 characters.';
            } else if (senderName.length > 15) {
                errors.senderName = 'Name must be less than 15 characters.';
            }
        }

        const validEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

        if(this.state.touched.email && !validEmail.test(email)) {
            errors.email = "Please provide a valid email address.";
        }

        if (this.state.touched.feedback && (feedback.length < 1)) {
            errors.feedback = 'Please provide your feedback'
        }

        return errors;
    }

    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log("Current State is: " + JSON.stringify(this.state));
        alert("Current State is: " + JSON.stringify(this.state));
        event.preventDefaul();
    }

    render() {

        const errors = this.validate(this.state.senderName, this.state.email, this.state.feedback);

        return (
            <div className="container">
                <div className="row row-content">
                    <div className="col-6">
                        <h3>Local Coffee Shop</h3>
                        <p>123 Main St. <br />
                            Anytown, USA <br />
                            1-800-555-1234<br />
                            local@coffee.com 
                        </p>
                    </div>
                    <div className="col-6" id="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2684.6029157221424!2d-116.9491032487251!3d47.711546279089696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5361c3194a096b7d%3A0xca53eb3e1e72fd5c!2sCity%20Hall-%20Post%20Falls!5e0!3m2!1sen!2sus!4v1595366203200!5m2!1sen!2sus" title="map" width="300" height="200" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div>

                <div className="row row-content">
                    <div className="col-12 text-center">
                        <h3>We love hearing from our customers!</h3>
                    </div>

                    <div className="col-8 md-10 m-auto">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="senderName">Name:</Label>
                                <Input 
                                    type="text" 
                                    name="senderName" 
                                    id="senderName" 
                                    placeholder="Name" 
                                    value={this.state.senderName}
                                    invalid={errors.senderName}
                                    onBlur={this.handleBlur("senderName")}
                                    onChange={this.handleInputChange}
                                />
                                <FormFeedback>{errors.senderName}</FormFeedback>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="email">Email:</Label>
                                <Input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    placeholder="Email" 
                                    value={this.state.email}
                                    invalid={errors.email}
                                    onBlur={this.handleBlur("email")}
                                    onChange={this.handleInputChange}    
                                />
                                <FormFeedback>{errors.email}</FormFeedback>
                            </FormGroup>

                            <FormGroup row>
                                <Label for="feedback">Feedback:</Label>
                                <Input 
                                    type="textarea" 
                                    name="feedback" 
                                    id="feedback" 
                                    rows="8"
                                    value={this.state.feedback}
                                    invalid={errors.feedback}
                                    onBlur={this.handleBlur("feedback")}
                                    onChange={this.handleInputChange}>    
                                </Input>
                                <FormFeedback>{errors.feedback}</FormFeedback>
                            </FormGroup>
        
                            <FormGroup row>
                                <Button type="submit" color="primary">Send Feedback</Button>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;