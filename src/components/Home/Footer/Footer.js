import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="footer" className="colored-section text-center pt-5">
            <div className="container-fluid">

                <a href="#"><i className="footer-icon fab fa-facebook-square"></i></a>
                <a href="#"><i className="footer-icon fab fa-twitter-square"></i></a>
                <a href="#"><i className="footer-icon fab fa-instagram"></i></a>
                <a href="mailto:email@example.com"><i className="footer-icon fas fa-envelope"></i></a>
                <p className="footer-text text-white">© Copyright 2021, all rights reserved.</p>

            </div>
        </footer>
    );
};

export default Footer;