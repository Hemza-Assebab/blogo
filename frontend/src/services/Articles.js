import { axiosClient } from "../api/axios";
export const ArticlesService = {

    index: async () => {
        return await axiosClient.get("/articles");            
    },

    store: async (values) => {
        return await axiosClient.post("/articles", values);
    },

    dislike: async (id) => {
        return await axiosClient.delete(`/like/article/${id}`);
    },

    like: async (id) => {
        return await axiosClient.post(`/like/article/${id}`);
    }
};