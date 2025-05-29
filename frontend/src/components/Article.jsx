import ReadMore from "./ReadMore";
import TimeAgo from "./TimeAgo";
import ArticleLike from "./ArticleLike";

export default function Article ({ article }) {

    const avatar = import.meta.env.VITE_BACKEND_URL + `/storage/avatars/${article.user.avatar}`;
        
    return (
        <div className="card border-0 shadow mb-4 px-2">
            <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                    <img src={avatar} alt="Profile Avatar" style={{width: "50px"}} className="rounded-circle" />
                    <div className="flex-fill ps-2">
                        <div className="fw-bold">{article.user.first_name} {article.user.last_name}</div>
                        <div className="small text-body text-opacity-50"><TimeAgo isoDate={article.created_at} /></div>
                    </div>
                </div>
                <h2>{article.title}</h2>
                <ReadMore text={article.content} />
                <div className="d-flex justify-content-between">
                    <ArticleLike article={article} />
                    <button className="bg-transparent border-0 flex-fill">{article.comments_count} <i className="fs-5 fa-regular fa-comment"></i></button>
                    <button className="bg-transparent border-0 flex-fill ms-2"><i className="fs-5 fa-solid fa-share"></i></button>
                </div>
            </div>
        </div>
    );
}