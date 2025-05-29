import { axiosClient } from "../api/axios";
export const ArticlesService = {

    index: async () => {
        return await axiosClient.get("/articles");            
    },

    store: async (values) => {
        return await axiosClient.post("/articles", values);
    }
};