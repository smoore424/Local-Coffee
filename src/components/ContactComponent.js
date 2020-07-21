import React, { Component } from 'react';
import About from './AboutComponent';

class Contact extends Component {
    render() {
        return (
            <div className="container">
                <div className="row row-content">
                    <div className="col">
                        <h3>Local Coffee Shop</h3>
                        <p>123 Main St. <br />
                            Anytown, USA <br />
                            1-800-555-1234<br />
                            local@coffee.com 
                        </p>
                    </div>
                    <div className="col">
                        google map here
                    </div>
                </div>
                {/* <div className="row row-content">
                    <div className="col-12 text-center">
                        <h3>We love hearing from our customers!</h3>
                    </div>
                    <div className="col">
                        <form>
                            <div className="form-group">
                                <label for="name">Name:</label>
                                <input type="text" className="form-control" name="name" id="name" placeholder="Name">
                            </div>
                            <div className="form-group">
                                <label for="email">Email:</label>
                                <input type="email" className="form-control" name="name" id="email" placeholder="Email">
                            </div>
                            <div className="form-group">
                                <label for="feedback">Feedback:</label>
                                <textarea className="form-control" name="feedback" id="feedback" rows="8"></textarea>
                            </div>
        
                            <div className="form-group">
                                <div>
                                    <button type="submit" className="btn btn-primary">Send Feedback</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div> */}
            </div>
        );
    }
}

export default Contact;