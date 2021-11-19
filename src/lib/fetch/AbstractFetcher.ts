import axios, {AxiosRequestConfig} from "axios";
import {Article, ArticleType} from "../Article";

export default abstract class AbstractFetcher {

    public abstract readonly type: ArticleType;
    protected abstract readonly requestConfig: AxiosRequestConfig;

    public abstract transformResponse(data: any[]): Article[];

    public fetchArticles = async () => {
        return axios.request<Article[]>({
            ...this.requestConfig,
            transformResponse: (data) => this.transformResponse(data),
        }).then((response) => response.data);
    }
}
