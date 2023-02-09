import React from "react";

import './HomePage.css';

const HomePage = () => {
    return <div className="home">
        <h1 className="home-description__title">Bea -</h1>
        <h1 className="home-description__title">be a part</h1>
        <div className="home-description__content">
            Taking social media into a medium of opportunities, new discoveries and creating a virtual space for everyone
        </div>
        <button>
            Get Started
        </button>
        <article>
            <span>
                <h4 className="homepage-article-slide__title">Make your fave cocktails at home</h4>
                <div>article by @danielle</div>
                <div>heart shape</div>
                <div>22.3k</div>
            </span>

        </article>
    </div>;
};

export default HomePage;