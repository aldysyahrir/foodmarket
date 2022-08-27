import axios from "./index";

export const setAuthorizationHeaders = (token = null) => {
    if (token) axios.defaults.headers.common.authorization = token;
    else delete axios.defaults.headers.common.authorization;
}