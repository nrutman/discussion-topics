export enum ArticleType {
    News = 'news',
    Twitter = 'twitter',
}

export interface Article {
    description: string|null;
    id: string;
    published: Date;
    source: string;
    title: string;
    type: ArticleType;
    url: string;
}
