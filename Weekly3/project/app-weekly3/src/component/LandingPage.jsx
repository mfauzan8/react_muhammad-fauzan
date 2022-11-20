import React from 'react'
import Footer from '../component/Footer';
import Home from '../component/Home';
import Navigation from '../component/Navigation';
import AboutUsContainer from '../containers/AboutUsContainer';
import ContactContainers from '../containers/ContactContainers';

const LandingPage = () => {
    return (
        <>
            <div className="bg-home">
                <Navigation />
                <Home />
            </div>
            <ContactContainers />
            <AboutUsContainer />
            <Footer />
        </>
    )
}

export default LandingPage