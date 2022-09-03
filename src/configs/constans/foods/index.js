import instance from "../../axios";

export const foods = {
    getAllFood: () => instance.get("/foods"),
    getFood: (id) => instance.get(`/foods/${id}`)
};