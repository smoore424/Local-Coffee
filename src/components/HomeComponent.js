import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Local Coffee Shop</h2>
                    <h4>The place where locals meet</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo a diam sollicitudin tempor. Ipsum suspendisse ultrices gravida dictum fusce. </p>
                    <p>Mi tempus imperdiet nulla malesuada pellentesque. In est ante in nibh mauris cursus mattis molestie a. Semper eget duis at tellus at urna. Elit eget gravida cum sociis natoque penatibus. Justo donec enim diam vulputate.</p>
                    <a className="btn btn-primary" role="button" href="menu.html">Order Now</a>
    
                </div>
                <div className="col-8 col-md-6 text-center">    
                        <img className="body-img img-thumbnail" src="/assets/images/holding-coffee.jpg" alt="person holding coffee" />
                    
                </div>
            </div>
        </div>
        )
    }
}

export default Home;