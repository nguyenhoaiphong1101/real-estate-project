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
    const token = localStorage.getItem('access_token');
    const checkLogin = () =>{
        if(token)
        {
            return <ListRecomend/>
        }
    }
    return (
        <div>
            <Banner />
            {checkLogin()}
            <Category />
            <SectionFunction />
            <NeedMore />
            <SectionRecentList />
            <SectionTopList />
            <Testimonials />
        </div>
    );
}

export default Home;