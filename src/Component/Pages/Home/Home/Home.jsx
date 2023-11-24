import React from 'react';
import Banner from '../Banner/Banner';
import Partner from '../Partner/Partner';
import BecomeInstructor from '../BecomeInstructor/BecomeInstructor';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Partner></Partner>
            <BecomeInstructor></BecomeInstructor>
        </div>
    );
};

export default Home;