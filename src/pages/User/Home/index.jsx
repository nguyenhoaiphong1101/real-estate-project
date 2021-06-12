import React from 'react';
import Banner from './components/Banner';
import Category from './components/Category';
import ListRecomend from './components/ListRecommend';
import NeedMore from './components/NeedMore';
import SectionFunction from './components/SectionFunction';
import SectionRecentList from './components/SectionRecentList';
import SectionTopList from './components/SectionTopList';
import Testimonials from './components/Testimonials';

function Home(props) {
    return (
        <div>
            <Banner />
            <Category />
            <ListRecomend/>
            <SectionFunction />
            <NeedMore />
            <SectionRecentList />
            <SectionTopList />
            <Testimonials />
        </div>
    );
}

export default Home;