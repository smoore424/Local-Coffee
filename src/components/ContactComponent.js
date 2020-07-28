//TODO fix google map on small device
//TODO form validation


import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            feedback: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
                                <Label htmlFor="name">Name:</Label>
                                <Input 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    placeholder="Name" 
                                    value={this.state.name}
                                    onChange={this.handleInputChange}
                                />
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email">Email:</Label>
                                <Input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    placeholder="Email" 
                                    value={this.state.email}
                                    onChange={this.handleInputChange}    
                                />
                            </FormGroup>
                            <FormGroup row>
                                <Label for="feedback">Feedback:</Label>
                                <Input 
                                    type="textarea" 
                                    name="feedback" 
                                    id="feedback" 
                                    rows="8"
                                    value={this.state.feedback}
                                    onChange={this.handleInputChange}>    
                                </Input>
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