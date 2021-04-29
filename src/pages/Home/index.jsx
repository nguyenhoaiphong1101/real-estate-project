import React from 'react';
import Banner from './Banner';
import Category from './Category';
import Testimonials from './Testimonials';
import NeedMore from './NeedMore';
import Blog from './Blog';

function Home(props) {
    return (
        <div>
            <Banner />
            <Category />
            <Testimonials />
            <NeedMore />
            <Blog />
        </div>
    );
}

export default Home;