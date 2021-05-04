import React from 'react';
import Banner from './components/Banner';
import Category from './components/Category';
import Testimonials from './components/Testimonials';
import NeedMore from './components/NeedMore';
import Blog from './components/Blog';
import SectionFunction from './components/SectionFunction';
import SectionTopList from './components/SectionTopList';

function Home(props) {
    return (
        <div>
            <Banner />
            <Category />
            <SectionFunction />
            <NeedMore />
            <SectionTopList />
            <Blog />
        </div>
    );
}

export default Home;