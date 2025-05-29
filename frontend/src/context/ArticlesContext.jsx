import { createContext, useState, useContext } from "react";
import { ArticlesService } from "../services/Articles";

export const ArticlesStateContext = createContext({
    articles: [],
    setArticles: () => {},
});

export default function ArticlesContext ({children}) {
    const [articles, setArticles] = useState([]);
    
    const getArticles = async () => {
        return ArticlesService.index();
    }

    const postArticle = async (values) => {
        return ArticlesService.store(values);
    }

    return <>
        <ArticlesStateContext.Provider value={{
            articles,
            setArticles,
            getArticles,
            postArticle,
        }}>
            {children}
        </ArticlesStateContext.Provider>
    </>
}

export const useArticlesContext = () => useContext(ArticlesStateContext)