import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-dark">
            <div className="container all-link">
                <Link className="navbar-brand" to="/"><span className="portfolio"><span className="portfo">Portfo</span><span className="lio">lio</span></span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link active me-3" aria-current="page" to="/home">HOME</Link>
                        <a className="nav-link active me-3" href="#skills">SKILLS</a>
                        <a className="nav-link active me-3" href="#projects">PROJECTS</a>
                        <a className="nav-link active me-3" href="https://drive.google.com/uc?export=download&id=1VLUniMqlPKBWnex5ayWFNcZB39c1jkD8">RESUME</a>
                        <a className="nav-link active me-3" href="#about">ABOUT</a>
                        <Link className="nav-link active me-3" to="contact">CONTACT</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;