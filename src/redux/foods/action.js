import { foodsType } from "../actionType";

export const allFoodsAction = (payload) => ({
    type: foodsType.ALL_FOODS,
    payload
})