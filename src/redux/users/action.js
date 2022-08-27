import { userType } from "../actionType";

export const userIsloadingAction = (payload) => ({
    type: userType.IS_LOADING,
    payload,
});

export const registerDataAction = (payload) => ({
    type: userType.REGISTER_DATA,
    payload,
})