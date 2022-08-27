import instance from "../../axios";

export const user = {
    register: (payload) => instance.post("/users/register", payload),
    login: (payload) => instance.post("/users/login", payload),
};