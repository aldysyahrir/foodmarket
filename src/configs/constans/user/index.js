import instance from "../../axios";

export const user = {
    register: (payload) => instance.post("/users/register", payload),
    login: (payload) => instance.post("/users/login", payload),
    getUser: () => instance.get("/users"),
    updateProfile: (payload) => instance.put("/users", payload),
    updateAddress: (payload) => instance.put("/users/address", payload),
    updatePassword: (payload) => instance.put("/users/password", payload),
};