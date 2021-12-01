import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Nav from '../Nav/Nav';
import Services from '../Project/Project';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Nav />
            <Banner />
            <About />
            <Skills />
            <Services />
            <Contact />
        </div>
    );
};

export default Home;