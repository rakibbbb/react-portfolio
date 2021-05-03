import React from 'react';
import Image from '../../../Assets/images/me.png';
import {
    FaFacebookF,
    FaTwitter,
    FaPinterest,
    FaInstagram,
    FaPlay,
    FaDownload,
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
                                        <FaFacebookF className="headerIcon" />
                                    </li>
                                    <li>
                                        <FaTwitter className="headerIcon" />
                                    </li>
                                    <li>
                                        <FaPinterest className="headerIcon" />
                                    </li>
                                    <li>
                                        <FaInstagram className="headerIcon" />
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