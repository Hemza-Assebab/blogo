import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { useArticlesContext } from "../context/ArticlesContext";
import { AuthService } from "../services/Auth";
import PageLoader from "../components/PageLoader";
import CreateArticleForm from "../components/CreateArticleForm";
import Article from "../components/Article";

function HomePage () {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const { authenticated, user, setUser, logout } = useUserContext();
    const { articles, setArticles, getArticles } = useArticlesContext();

    const displayArticles = () => {
        return articles.map(article => <Article key={article.id} article={article} />);
    }

    const fetchArticles = async () => {
        try {
            const { data } = await getArticles();
            setArticles(data.articles);
            console.log(data.articles);
            
        } catch (error) {
            console.log("Error getting articles");
        }
    };

    const fetchUser = async () => {
        try {
            const { data } = await AuthService.getUser();
            setUser(data);
            setIsLoading(false);
        } catch {
            logout();
        }
    }

    useEffect(() => {
        if (!authenticated) {
            navigate("/login");
            return;
        }
        fetchUser();
        fetchArticles();
    }, [authenticated]);

    return (
        isLoading
            ?
        <PageLoader />
        :
        <div className="container mt-5" style={{maxWidth: "800px"}}>
            <h1>Hello {user.first_name} {user.last_name}</h1>
            <hr />
            <CreateArticleForm />
            <div className="mt-3">
                { displayArticles() }
            </div>
        </div>
    );
}

export default HomePage;