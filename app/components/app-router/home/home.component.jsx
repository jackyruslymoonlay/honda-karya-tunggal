import React from 'react';
import Catalogue from './catalogue/catalogue.component';
import Info from './info/info.component';
import News from './news/news.component';

const Home = (props) => {
    const { user, getUserData } = props;

    return (
        <div>
            <News />
            <Info />
            <Catalogue />
        </div>
    );
}
export default Home;