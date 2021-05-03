import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <section id="skills" className="bg-dark py-5" height="400px">
            <h2 className="text-light text-center py-5">My Skills</h2>
            <div className="skill-bars m-auto mb-5">
                <div className="bar">
                    <div className="info">
                        <span>HTML</span>
                    </div>
                    <div className="progress-line html">
                        <span></span>
                    </div>
                </div>
                <div className="bar">
                    <div className="info">
                        <span>CSS</span>
                    </div>
                    <div className="progress-line css">
                        <span></span>
                    </div>
                </div>
                <div className="bar">
                    <div className="info">
                        <span>javascript</span>
                    </div>
                    <div className="progress-line jquery">
                        <span></span>
                    </div>
                </div>
                <div className="bar">
                    <div className="info">
                        <span>react</span>
                    </div>
                    <div className="progress-line python">
                        <span></span>
                    </div>
                </div>
                <div className="bar">
                    <div className="info">
                        <span>MongoDB</span>
                    </div>
                    <div className="progress-line mysql">
                        <span></span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;