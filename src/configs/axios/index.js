import axios from "axios";
import errorHandler from "./errorHandler";

const API_URL = "http://localhost:4000/api/v1"

const instance = axios.create({
    baseURL: API_URL
})

instance.interceptors.response.use((response) => response.data, errorHandler);

export * from "./setAuthorizationHeader";
export default instance;