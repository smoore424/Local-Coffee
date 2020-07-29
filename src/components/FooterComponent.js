//TODO fix social buttons problem may be with the version of bootstrap i am using.

import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-4 col-sm-2 offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link className="link-styles" to='/home'>Home</Link></li>
                            <li><Link className="link-styles" to='/menu'>Menu</Link></li>
                            <li><Link className="link-styles" to='/contact'>Contact</Link></li>
                            <li><Link className="link-styles" to='/about'>About</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-5 text-center">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/" target="_blank">
                            <i className="fa fa-instagram" />
                        </a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://facebook.com/" target="_blank"> 
                            <i className="fa fa-facebook" />
                        </a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/" target="_blank"> 
                            <i className="fa fa-twitter" />
                        </a>
                    </div>
                    <div className="col-10 col-sm-4 text-right text-sm-center">
                        <h6>Local Coffee Shop</h6>
                        <p>
                            123 Main St. <br />
                            Anytown, USA
                        </p>
                        <a className="link-styles" href="tel:+18005551234"> 1-800-555-1234<br /> </a>
                        <a className="link-styles" href="mailto:local@coffee.com"> local@coffee.com </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
