import { axiosClient } from "../api/axios";
export const AuthService = {
    getCSRF: async () => {
        return await axiosClient.get("/sanctum/csrf-cookie", {
            baseURL: import.meta.env.VITE_BACKEND_URL
        });
    },

    login: async (values) => {
        return await axiosClient.post("/login", values);            
    },

    signup: async (values) => {
        return await axiosClient.post("/register", values);            
    },

    getUser: async () => {
        return await axiosClient.get("/user");
    }
}