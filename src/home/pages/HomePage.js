import React from "react";

import ArticleSlider from "../components/ArticleSlider";
import './HomePage.css';

const HomePage = () => {
    const DUMMY_ARTICLES = [
        {
            id: 'a1',
            title: 'Make your favorite cocktails at home',
            image: 'https://i.pinimg.com/564x/a0/39/74/a039745576161f0618b4a4e56e769682.jpg',
            author: 'danielle',
            likeCount: '22.3K',
        }
    ];

    return <div className="home">
        <div className="home-intro">
            <h1 className="home-description__title">Bea -</h1>
        <h1 className="home-description__title">be a part</h1>
        <div className="home-description__content">
            Taking social media into a medium of opportunities, new discoveries and creating a virtual space for everyone
        </div>
        <button>Get Started</button>
        </div>
        
        <ArticleSlider articles={DUMMY_ARTICLES} />
    </div>;
};

export default HomePage;