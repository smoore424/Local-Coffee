import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="row row-content">
                    <div className="col col-md-6 text-center">
                        <img className="body-img img-thumbnail" src="/assets/images/owner.jpg" alt="the owner" width="300px" />
                    </div>

                    <div className="col-12 col-md-6 align-self-center">
                        <h2>Meet the Owner</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Leo a diam sollicitudin tempor. Ipsum suspendisse ultrices gravida dictum
                    fusce. </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.</p>
                    </div>
                </div>

                <div className="row row-content">
                    <div className="col-12">
                        <div className="card bg-light mt-3">
                            <blockquote className="blockquote card-body">
                                <p className="mb-0">“We make a living by what we get, but we make a life by what we give.”</p>
                                <footer className="blockquote-footer">Winston Churchill
                        </footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;