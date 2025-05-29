import LoadingButton from "../components/LoadingButton";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useArticlesContext } from "../context/ArticlesContext";

export default function CreateArticleForm () {
    const [isPosting, setIsPosting] = useState(false);
    const { articles, setArticles, postArticle } = useArticlesContext();

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

    const onPost = async (values) => {
        setIsPosting(true);
        try {
            const { data: {article} } = await postArticle(values);
            setIsPosting(false);
        } catch ({response}) {
            console.log(response);
        }
    }

    return (
        <div className="shadow p-3">
            <form onSubmit={handleSubmit(onPost)}>
                <input
                    {...register("title", {
                        required: "Article title is required !"
                    })}
                    type="text" className="form-control border-0" placeholder="Article title..." name="title"/>
                <hr />
                <div className="form-floating">
                    <textarea
                        {...register("content", {
                            required: "Article content is required !"
                        })}
                        style={{height: "80px"}} className="form-control border-0" placeholder="What are you thinking about ?" name="content" id="floatingTextarea"></textarea>
                    <label htmlFor="floatingTextarea">What are you thinking about ?</label>
                </div>
                {
                    isPosting
                    ?
                    <LoadingButton className="btn btn-dark btn-sm w-25 mt-4" text="Posting"/>
                    :
                    <button className="btn btn-dark btn-sm w-25 mt-4">Post</button>
                }
            </form>
        </div>
    );
}