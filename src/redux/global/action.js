import { globalType } from "../actionType";

export const userIsloadingAction = (payload) => ({
    type: globalType.IS_LOADING,
    payload,
});

export const globalAllertAction = (payload) => ({
    type: globalType.ALLERT,
    payload,
})