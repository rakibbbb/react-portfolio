import React from 'react';
import Image from '../../../Assets/images/me.png';
import {
    FaFacebookF,
    FaInstagram,
    FaDownload,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";
import './Title.css';


const Title = () => {

    return (
        <section className="title">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="header__content">
                            <div className="header__section">
                                <ul className="header__ul">
                                    <li>
                                        <a href="https://www.facebook.com/r.rakib1997/" target="_blank"><FaFacebookF className="headerIcon" /></a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/md-rakibuzzaman-a97b38146/" target="_blank"><FaLinkedin className="headerIcon" /></a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/rakibbbb" target="_blank"><FaGithub className="headerIcon" /></a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/ra_kibb/" target="_blank"><FaInstagram className="headerIcon" /></a>
                                    </li>
                                </ul>
                                <h3>Hey, I'm</h3>
                                <h1>MD RAKIBUZZAMAN</h1>
                                <p>I'm a Front-End Developer</p>
                                <div className="header__buttons d-flex">
                                        <a href="https://drive.google.com/uc?export=download&id=1VLUniMqlPKBWnex5ayWFNcZB39c1jkD8" className="btn btn-warning me-3">
                                           <FaDownload/> <span className="font-weight-bold">Get Resume</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="banner__img">
                            <img src={Image} alt="man" width="500" height="400" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Title;