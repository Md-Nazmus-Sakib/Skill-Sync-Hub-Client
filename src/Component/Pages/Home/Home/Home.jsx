import React from 'react';
import Banner from '../Banner/Banner';
import Partner from '../Partner/Partner';
import BecomeInstructor from '../BecomeInstructor/BecomeInstructor';
import FeedbackSection from '../FeedbackSection/FeedbackSection';
import TotalCount from '../TotalCount/TotalCount';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Partner></Partner>
            <FeedbackSection></FeedbackSection>
            <TotalCount></TotalCount>
            <BecomeInstructor></BecomeInstructor>

        </div>
    );
};

export default Home;