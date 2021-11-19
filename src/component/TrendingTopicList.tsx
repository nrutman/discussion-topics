import React from "react";
import {useQuery} from "react-query";
import NewsFetcher from "../lib/fetch/NewsFetcher";
import ArticleItem from "./ArticleItem";

const newsFetcher = new NewsFetcher();

const TrendingTopicList = () => {
    const articles = useQuery(['articles'], newsFetcher.fetchArticles);

    return (
        <div>
            { articles.data && articles.data.map((article) => (<ArticleItem key={'article-'+article.id} article={article} />)) }
        </div>
    )
};

export default TrendingTopicList;
