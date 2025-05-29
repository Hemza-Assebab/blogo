import { useState } from "react";
import { ArticlesService } from "../services/Articles";
import { useUserContext} from "../context/UserContext";

export default function ArticleLike ({ article }) {
    const { user } = useUserContext();
    const userLiked = article.likes.some(like => like.user_id === user.id);

    const [liked, setLiked] = useState(userLiked);
    const [likesCount, setLikesCount] = useState(article.likes_count);

    const toggleLike = async () => {
        try {
            if (liked) {
                await ArticlesService.dislike(article.id);
                setLikesCount(count => count - 1);
            } else {
                await ArticlesService.like(article.id);
                setLikesCount(count => count + 1);
            }
            setLiked(!liked);
        } catch (e) {
            console.log(e);
        }
    }

    const likeClassName = liked ? "fs-5 fa-solid fa-thumbs-up" : "fs-5 fa-regular fa-thumbs-up"

    return (
        <>
            <button onClick={toggleLike} className="bg-transparent border-0 flex-fill me-2">{likesCount} <i className={likeClassName}></i></button>
        </>
    );
}