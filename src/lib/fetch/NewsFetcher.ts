import AbstractFetcher from "./AbstractFetcher";
import {Article, ArticleType} from "../Article";
import {AxiosRequestConfig} from "axios";

type NewsArticle = {
    author: string|null;
    category: string;
    country: string;
    description: string;
    image: string|null;
    language: string;
    published_at: string;
    source: string;
    title: string;
    url: string;
};

export default class NewsFetcher extends AbstractFetcher {

    readonly type: ArticleType = ArticleType.News;

    protected readonly requestConfig: AxiosRequestConfig<NewsArticle[]> = {
        url: 'http://api.mediastack.com/v1/news',
        params: {
            access_key: 'ca4e3544699fee1e410a8f3a81539196',
            languages: 'en',
            sort: 'popularity',
        },
        transformResponse: this.transformResponse,
    };

    public transformResponse(data: any) {
        return JSON.parse(data).data.map((news: NewsArticle) => {
            const article: Article = {
                description: news.description,
                id: news.url,
                published: new Date(news.published_at),
                source: news.source,
                title: news.title,
                type: this.type,
                url: news.url,
            };

            return article;
        });
    }
}
