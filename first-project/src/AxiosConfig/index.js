import axios from "axios";


const api = axios.create({
    baseURL: "https://backend-7grf.onrender.com",
    // baseURL: process.env.ENV === "DEVELOPMENT" ? "http://localhost:3003/api/v1" : "https://awdiz-6.com",
    withCredentials: true,
});

export default api;

// https://backend-7grf.onrender.com