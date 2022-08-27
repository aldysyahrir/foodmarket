import { globalType } from "../actionType";

export const globalAllertAction = (payload) => ({
    type: globalType.ALLERT,
    payload,
})