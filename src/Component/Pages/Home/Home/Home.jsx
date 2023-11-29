import React from 'react';
import Banner from '../Banner/Banner';
import Partner from '../Partner/Partner';
import BecomeInstructor from '../BecomeInstructor/BecomeInstructor';
import FeedbackSection from '../FeedbackSection/FeedbackSection';
import TotalCount from '../TotalCount/TotalCount';
import StudentFuture from '../StudentFuture/StudentFuture';
import LatestNews from '../LatestNews/LatestNews';
import PopularCourse from '../PopularCourse/PopularCourse';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Partner></Partner>
            <PopularCourse></PopularCourse>
            <FeedbackSection></FeedbackSection>
            <TotalCount></TotalCount>
            <BecomeInstructor></BecomeInstructor>
            <StudentFuture></StudentFuture>
            <LatestNews></LatestNews>

        </div>
    );
};

export default Home;