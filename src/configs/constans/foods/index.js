import instance from "../../axios";

export const foods = {
    getAllFood: (params) => instance.get(`/foods${params || ""}`),
    getFood: (id) => instance.get(`/foods/${id}`)
};