import React from 'react';
import './About.css';
const About = () => {
    return (
        <section id="about" className="about-me">
            <div className="container pt-3 pb-5">
                <h1 className="text-center py-5 text-dark">About Me</h1>

                <h3 className="text-center text-secondary">I'm Rakib and I'm a <span className="text-warning">Front-End Developer</span></h3>
                <p className="text-justify">
                    I am a student of International University of Business Agriculture and Technology. My department is Computer Science and Engineering. Now I am doing intern at Nextech Limited.
                </p>
                <p className="text-justify">
                I am looking for a job in the field of Web Developer. My area of interest is Website Development. After completing my degree, i will be looking forward to do post graduate program. At the moment i am focusing on Full Stack Development. 
                </p>
                <p className="text-justify pb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, exercitationem. Ex sed eligendi, reiciendis aspernatur atque cumque soluta est perferendis iste ad deserunt incidunt pariatur earum beatae facilis eveniet eum a, voluptate voluptates consectetur sequi assumenda fuga, animi voluptatum? Eveniet esse eius blanditiis obcaecati ipsum temporibus adipisci minus tempore quidem!
                </p>
            </div>
        </section>
    );
};

export default About;