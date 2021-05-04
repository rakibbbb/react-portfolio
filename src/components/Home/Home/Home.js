import React from 'react';
import About from '../About/About';
import Navbar from '../Navbar/Navbar';
import Skills from '../Skills/Skills';
import Title from '../Title/Title';
import Projects from '../../Projects/Projects';
import Blog from '../../Blog/Blog';
import Contact from '../Contact/Contact';
import './Home.css';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <section id="home">
            <Navbar/>
            <Title/>
            <About/>
            <Skills/>
            <Projects/>
            <Blog/>
            <Contact/>
            <Footer/>
        </section>
    );
};

export default Home;