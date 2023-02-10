import React from "react";

import './Article.css';
import "@fortawesome/fontawesome-free/css/all.css";

const Article = props => {
    const { title, image, author, likeCount } = props;
    return <div className="article">
        <img src={image} alt={title} />
        <h4 className="article-slide__title">{title}</h4>
        <div className="article-details">
            <div className="article-author">article by @{author}</div>
            <div className="likes">{likeCount}</div>
        </div>
    </div>
};

export default Article;