import React from 'react';
import { FaPlay } from 'react-icons/fa';
import P1 from '../../Assets/images/p1.png';
import P2 from '../../Assets/images/p2.png';
import P3 from '../../Assets/images/p3.png';

const Projects = () => {
    return (
        <section id="projects" className="container py-5">
            <h1 className="text-center py-5">My Projects</h1>
            <div className="row">
                <div className="col-sm-12 col-lg-4 col-md-6">
                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src={P1} alt="Card image cap" />
                            <div className="card-body">
                                <p className="card-text text-justify">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a className="btn btn-warning" href="https://handyy-man.firebaseapp.com/"><FaPlay/> Preview</a>
                            </div>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-4 col-md-6">
                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src={P2} alt="Card image cap" />
                            <div className="card-body">
                                <p className="card-text text-justify">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a className="btn btn-warning" href="https://deshi-riderss.firebaseapp.com/"><FaPlay/> Preview</a>
                            </div>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-4 col-md-6">
                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src={P3} alt="Card image cap" />
                            <div className="card-body">
                                <p className="card-text text-justify">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a className="btn btn-warning" href="https://rakibbbb.github.io/hot-gadget/"><FaPlay/> Preview</a>
                            </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Projects;