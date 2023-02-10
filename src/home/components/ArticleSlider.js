import React from "react";

import Article from "./Article";
import './ArticleSlider.css';

const ArticleSlider = props => {
    let { articles } = props;

    return <article className="ArticleSlider-article">
        {articles.map(article => {
            return <Article
                id={article.id}
                title={article.title}
                image={article.image}
                author={article.author}
                likeCount={article.likeCount}
            />
        })}
    </article>
};

export default ArticleSlider;