import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Feedback from '../Feedback/Feedback';
import Contact from '../Contact/Contact';



const Home = () => {
    return (
        <div id="home" className="home-page">          
            <Banner></Banner>
            <Services></Services>
            <Feedback></Feedback>
            <Contact></Contact>
        </div>
    );
};

export default Home;