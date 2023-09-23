import React from 'react';
import Banner from '../Banner/Banner';
import CategoryList from '../CategoryList/CategoryList';
import FeturedJobs from '../FeturedJobs/FeturedJobs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeturedJobs></FeturedJobs>
        </div>
    );
};

export default Home;